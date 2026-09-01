"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* Decrypt Text — from Motiq (https://motiq.dev/components/decrypt-text).
   MIT licensed. Zero runtime dependencies. */

/* -------------------------------------------------------------------------- */
/* Motiq design tokens                                                        */
/* -------------------------------------------------------------------------- */
/* Rendered with the component, in a low cascade layer, so your own
   `:root { --motiq-*: … }` always wins. Move it to globals.css to drop it. */
const MOTIQ_TOKENS = "@layer motiq{:root{--motiq-accent:#1CB08F;--motiq-accent-text:#159376;--motiq-bg:#f7f9fc;--motiq-border:#dce4ef;--motiq-border-strong:#c5d1e1;--motiq-fg:#001a39;--motiq-fg-secondary:#344054;--motiq-muted:#667085;--motiq-secondary-accent:#1CB08F;--motiq-shadow-md:0 8px 24px -6px rgba(16, 24, 40, 0.10);--motiq-success:#1CB08F;--motiq-surface:#ffffff;--motiq-surface-2:#f8fafd}}@layer motiq{.dark,[data-theme=\"dark\"]{--motiq-accent:#1CB08F;--motiq-accent-text:#5adcb8;--motiq-bg:#080c14;--motiq-border:#263449;--motiq-border-strong:#354863;--motiq-fg:#f8fafc;--motiq-fg-secondary:#cbd5e1;--motiq-muted:#9caabd;--motiq-secondary-accent:#1CB08F;--motiq-shadow-md:0 8px 24px -6px rgba(0, 3, 10, 0.62);--motiq-success:#1CB08F;--motiq-surface:#111827;--motiq-surface-2:#192337}}";

/** Merge Tailwind class names; later/consumer classes win on conflict. */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* ---- motion primitives (inlined from @motiq/primitives) ---- */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useVisibilityPause<T extends Element>(
  ref: React.RefObject<T | null>,
  { threshold = 0.1 }: { threshold?: number } = {},
): boolean {
  const [onScreen, setOnScreen] = React.useState(true);
  const [tabVisible, setTabVisible] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => setOnScreen(entries.some((e) => e.isIntersecting)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  React.useEffect(() => {
    const onVis = () => setTabVisible(document.visibilityState !== "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return onScreen && tabVisible;
}

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */
export type DecryptTextTrigger = "mount" | "inview" | "hover";
export type DecryptTextVariant = "display" | "body" | "terminal";

export interface DecryptTextProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  text: string;
  glyphs?: string;
  speed?: number;
  stagger?: number;
  startDelay?: number;
  jitter?: number;
  trigger?: DecryptTextTrigger;
  variant?: DecryptTextVariant;
  loop?: number | false;
  retriggerOnHover?: boolean;
  seed?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  reducedMotion?: boolean;
  onDecrypted?: () => void;
}

interface CharItem {
  i: number;
  ch: string;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */
const POOL_DISPLAY = "#%&@$?!*+=/{}[]<>~^";
const POOL_TERMINAL = "abcdef0123456789$#%&*+=/|_~";
const HOVER_COOLDOWN = 1500;
const CYCLE_SPREAD = 35;
const FLASH_MS = 420;

function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */
function DecryptTextBase({
  text,
  glyphs,
  speed = 45,
  stagger = 55,
  startDelay = 350,
  jitter = 120,
  trigger = "inview",
  variant = "display",
  loop = 7000,
  retriggerOnHover = true,
  seed = 1,
  as: Tag = "p",
  reducedMotion,
  onDecrypted,
  className,
  ...rest
}: DecryptTextProps) {
  const rootRef = React.useRef<HTMLElement | null>(null);
  const charRefs = React.useRef<Array<HTMLSpanElement | null>>([]);
  const rafRef = React.useRef<number | null>(null);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastStartRef = React.useRef(-Infinity);
  const playedRef = React.useRef(false);
  const runRef = React.useRef(0);
  const onDecryptedRef = React.useRef(onDecrypted);
  onDecryptedRef.current = onDecrypted;

  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const scope = `mk-dt-${uid}`;

  const systemReduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const reduceNow = reducedMotion ?? systemReduced;
  const reduce = reducedMotion ?? (mounted ? systemReduced : false);

  const visible = useVisibilityPause(rootRef, { threshold: 0.12 });
  const pool = glyphs && glyphs.length > 0 ? glyphs : variant === "terminal" ? POOL_TERMINAL : POOL_DISPLAY;

  const words = React.useMemo(() => {
    const out: CharItem[][] = [];
    let i = 0;
    for (const word of text.split(" ")) {
      const item: CharItem[] = [];
      for (const ch of Array.from(word)) {
        item.push({ i, ch });
        i += 1;
      }
      out.push(item);
    }
    return out;
  }, [text]);

  const total = React.useMemo(() => words.reduce((n, w) => n + w.length, 0), [words]);

  const stop = React.useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const resolveAll = React.useCallback(() => {
    for (const el of charRefs.current) {
      if (!el) continue;
      el.textContent = el.dataset.mkChar ?? el.textContent;
      el.dataset.state = "plain";
    }
  }, []);

  const play = React.useCallback(() => {
    const rng = makeRng(seed + runRef.current * 7919);
    runRef.current += 1;
    stop();

    const cells = charRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    if (cells.length === 0) return;

    lastStartRef.current = performance.now();
    playedRef.current = true;

    const lockAt = new Float64Array(cells.length);
    const nextAt = new Float64Array(cells.length);
    const locked = new Uint8Array(cells.length);

    cells.forEach((el, idx) => {
      lockAt[idx] = startDelay + idx * stagger + (rng() * 2 - 1) * jitter;
      nextAt[idx] = 0;
      el.dataset.state = "scramble";
      el.textContent = pool.charAt((rng() * pool.length) | 0);
    });

    let remaining = cells.length;
    const t0 = performance.now();

    const frame = () => {
      const now = performance.now() - t0;

      for (let idx = 0; idx < cells.length; idx += 1) {
        if (locked[idx]) continue;
        const el = cells[idx];

        if (now >= (lockAt[idx] ?? 0)) {
          el.textContent = el.dataset.mkChar ?? "";
          el.dataset.state = "lock";
          locked[idx] = 1;
          remaining -= 1;
        } else if (now >= (nextAt[idx] ?? 0)) {
          el.textContent = pool.charAt((rng() * pool.length) | 0);
          nextAt[idx] = now + speed + rng() * CYCLE_SPREAD;
        }
      }

      if (remaining <= 0) {
        rafRef.current = null;
        onDecryptedRef.current?.();

        if (loop !== false && loop > 0) {
          timerRef.current = setTimeout(() => {
            timerRef.current = null;
            play();
          }, loop);
        }
        return;
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
  }, [jitter, loop, pool, seed, speed, stagger, startDelay, stop]);

  React.useLayoutEffect(() => {
    if (reduceNow) {
      stop();
      resolveAll();
      return;
    }

    if (!visible) {
      stop();
      return;
    }

    if (trigger === "hover") {
      if (!playedRef.current) resolveAll();
      return;
    }

    if (!playedRef.current) {
      play();
      return;
    }

    if (loop !== false && loop > 0 && rafRef.current == null && timerRef.current == null) {
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        play();
      }, Math.min(loop, 3000));
    }
  }, [loop, play, reduceNow, resolveAll, stop, trigger, visible]);

  React.useEffect(() => stop, [stop]);

  const onPointerEnter = React.useCallback(() => {
    if (reduceNow || !retriggerOnHover) return;
    if (rafRef.current != null) return;
    if (performance.now() - lastStartRef.current < HOVER_COOLDOWN) return;
    play();
  }, [play, reduceNow, retriggerOnHover]);

  const terminal = variant === "terminal";
  const isBody = variant === "body";

  const scrambleColor = terminal
    ? "color-mix(in oklab, var(--motiq-muted, #9caabd) 80%, var(--motiq-secondary-accent, #1CB08F))"
    : "var(--motiq-muted, #9caabd)";
  const lockedColor = terminal
    ? "color-mix(in oklab, var(--motiq-fg, #f8fafc) 84%, var(--motiq-muted, #9caabd))"
    : isBody
      ? "var(--motiq-fg-secondary, #344054)"
      : "var(--motiq-fg, #001a39)";

  const css = `
.${scope} [data-mk-char]{color:${lockedColor};}
.${scope} [data-mk-char][data-state="scramble"]{color:${scrambleColor};}
.${scope} [data-mk-char][data-state="lock"]{color:${lockedColor};animation:${scope}-flash ${FLASH_MS}ms cubic-bezier(.2,0,0,1);}
@keyframes ${scope}-flash{0%{color:var(--motiq-accent-text, #159376);text-shadow:0 0 24px color-mix(in oklab, var(--motiq-accent, #1CB08F) 70%, transparent);}100%{text-shadow:0 0 0 transparent;}}
.${scope} [data-mk-caret]{animation:${scope}-caret 1.1s steps(1) infinite;}
@keyframes ${scope}-caret{50%{opacity:0;}}
@media (prefers-reduced-motion: reduce){.${scope} [data-mk-char][data-state="lock"],.${scope} [data-mk-caret]{animation:none;}}
`;

  let cursor = -1;
  const glyphLayer = (
    <span aria-hidden="true" className="select-none inline">
      {words.map((word, w) => (
        <React.Fragment key={w}>
          <span className="inline-block whitespace-pre">
            {word.map((item) => {
              cursor += 1;
              const at = cursor;
              return (
                <span
                  key={item.i}
                  data-mk-char={item.ch}
                  data-state="plain"
                  ref={(el) => {
                    charRefs.current[at] = el;
                  }}
                >
                  {item.ch}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </span>
  );

  const baseClasses = terminal
    ? "block font-mono text-[clamp(0.78rem,2.4vw,1rem)] leading-relaxed"
    : isBody
      ? "block text-left leading-relaxed"
      : "block text-balance text-[clamp(1.6rem,5.2vw,3.3rem)] font-extrabold leading-[1.15] tracking-[-0.02em]";

  return (
    <Tag
      ref={rootRef as React.Ref<never>}
      data-motion={reduce ? "static" : "animated"}
      data-variant={variant}
      data-chars={total}
      onPointerEnter={onPointerEnter}
      className={cn("w-full", baseClasses, className)}
      {...rest}
    >
      <style>{css}</style>
      <span className="sr-only">{text}</span>
      {terminal ? (
        <span
          className={cn(
            scope,
            "inline-flex max-w-full flex-wrap items-baseline gap-x-1 rounded-[10px] border px-4 py-3 align-middle",
          )}
          style={{
            borderColor: "var(--motiq-border, #dce4ef)",
            background: "color-mix(in oklab, var(--motiq-surface, #ffffff) 88%, transparent)",
            boxShadow: "var(--motiq-shadow-md, 0 8px 24px -6px rgba(16, 24, 40, 0.10))",
          }}
        >
          <span aria-hidden="true" style={{ color: "var(--motiq-success, #1CB08F)" }}>
            $
          </span>
          {glyphLayer}
          <span
            aria-hidden="true"
            data-mk-caret=""
            className="inline-block h-[1.05em] w-[0.55em] align-text-bottom"
            style={{ background: "var(--motiq-success, #1CB08F)" }}
          />
        </span>
      ) : (
        <span className={cn(scope, "inline")}>{glyphLayer}</span>
      )}
    </Tag>
  );
}

export function DecryptText(props: DecryptTextProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOTIQ_TOKENS }} />
      <DecryptTextBase {...props} />
    </>
  );
}

export default DecryptText;
