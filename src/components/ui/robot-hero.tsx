"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

class HeartCurve extends THREE.Curve<THREE.Vector3> {
  constructor() {
    super();
  }

  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    t = t * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    return optionalTarget.set(x * 0.002, (y + 6) * 0.002, 0);
  }
}

const sharedHeartCurve = new HeartCurve();

function GlassCapsule({
  color,
  power,
  intensity,
}: {
  color: string;
  power: number;
  intensity: number;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color("#ffffff") },
      power: { value: 2.5 },
      intensity: { value: 0.6 },
    }),
    [],
  );

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.color.value.set(color);
      materialRef.current.uniforms.power.value = power;
      materialRef.current.uniforms.intensity.value = intensity;
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[0.3, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          uniform float power;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
            fresnel = pow(fresnel, power);
            gl_FragColor = vec4(color, fresnel * intensity);
          }
        `}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

const earBaseMat = new THREE.MeshStandardMaterial({
  color: "#f0f0f0",
  roughness: 0.4,
  metalness: 0.1,
});

const earRingMat = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.2,
  metalness: 0.2,
});

const earCenterMat = new THREE.MeshStandardMaterial({
  color: "#cccccc",
  roughness: 0.6,
});

const antennaBaseMat = new THREE.MeshStandardMaterial({
  color: "#999999",
  roughness: 0.3,
  metalness: 0.6,
});

const antennaStickMat = new THREE.MeshStandardMaterial({
  color: "#d0d0d0",
  roughness: 0.3,
  metalness: 0.4,
});

const antennaTipMat = new THREE.MeshStandardMaterial({
  color: "#1CB08F",
  roughness: 0.1,
  toneMapped: false,
});

function RobotEar({
  position,
  scale = 1,
  isLeft = false,
}: {
  position: [number, number, number];
  scale?: number;
  isLeft?: boolean;
}) {
  const dir = isLeft ? -1 : 1;
  return (
    <group position={position} scale={scale}>
      <mesh
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earBaseMat}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.025, 32]} />
      </mesh>
      <mesh
        position={[dir * 0.012, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earRingMat}
      >
        <torusGeometry args={[0.032, 0.008, 16, 32]} />
      </mesh>
      <mesh
        position={[dir * 0.012, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earCenterMat}
      >
        <cylinderGeometry args={[0.03, 0.03, 0.005, 32]} />
      </mesh>
      <group position={[dir * 0.015, 0.035, 0]} rotation={[-0.4, 0, 0]}>
        <mesh
          position={[0, 0.01, 0]}
          castShadow
          receiveShadow
          material={antennaBaseMat}
        >
          <cylinderGeometry args={[0.006, 0.008, 0.02, 16]} />
        </mesh>
        <mesh
          position={[0, 0.06, 0]}
          castShadow
          receiveShadow
          material={antennaStickMat}
        >
          <cylinderGeometry args={[0.003, 0.003, 0.1, 8]} />
        </mesh>
        <mesh
          position={[0, 0.11, 0]}
          castShadow
          receiveShadow
          material={antennaTipMat}
        >
          <sphereGeometry args={[0.006, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

const eyeMat = new THREE.MeshBasicMaterial({
  color: new THREE.Color(2.5, 2.5, 2.5),
  toneMapped: false,
  transparent: true,
});

const heartMat = new THREE.MeshBasicMaterial({
  color: "#1CB08F",
  toneMapped: false,
});

function RobotEye({
  position,
  rotation,
  scale = 1,
  blinkDuration = 0.15,
  blinkCycle = 3.0,
  isLovedRef,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  blinkDuration?: number;
  blinkCycle?: number;
  isLovedRef: React.MutableRefObject<boolean>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const normalEyesRef = useRef<THREE.Group>(null);
  const heartEyeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current || !normalEyesRef.current || !heartEyeRef.current)
      return;
    const isHeart = isLovedRef.current;
    normalEyesRef.current.visible = !isHeart;
    heartEyeRef.current.visible = isHeart;
    const cycle = clock.getElapsedTime() % blinkCycle;
    let targetScaleY = 1;
    if (cycle < blinkDuration && !isHeart) {
      const progress = cycle / blinkDuration;
      const blinkClose = Math.sin(progress * Math.PI);
      targetScaleY = Math.max(0.05, 1.0 - blinkClose);
    }
    groupRef.current.scale.set(scale, scale * targetScaleY, scale);
  });

  const { topPath, bottomPath } = useMemo(() => {
    const w = 0.025;
    const h = 0.035;
    const r = 0.02;
    const g = 0.005;
    const tPath = new THREE.CurvePath<THREE.Vector3>();
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, g, 0),
        new THREE.Vector3(-w, h - r, 0),
      ),
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, h - r, 0),
        new THREE.Vector3(-w, h, 0),
        new THREE.Vector3(-w + r, h, 0),
      ),
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, h, 0),
        new THREE.Vector3(w - r, h, 0),
      ),
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, h, 0),
        new THREE.Vector3(w, h, 0),
        new THREE.Vector3(w, h - r, 0),
      ),
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, h - r, 0),
        new THREE.Vector3(w, g, 0),
      ),
    );

    const bPath = new THREE.CurvePath<THREE.Vector3>();
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, -g, 0),
        new THREE.Vector3(-w, -(h - r), 0),
      ),
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, -(h - r), 0),
        new THREE.Vector3(-w, -h, 0),
        new THREE.Vector3(-w + r, -h, 0),
      ),
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, -h, 0),
        new THREE.Vector3(w - r, -h, 0),
      ),
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, -h, 0),
        new THREE.Vector3(w, -h, 0),
        new THREE.Vector3(w, -(h - r), 0),
      ),
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, -(h - r), 0),
        new THREE.Vector3(w, -g, 0),
      ),
    );
    return { topPath: tPath, bottomPath: bPath };
  }, []);

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh ref={heartEyeRef} visible={false} material={heartMat}>
        <tubeGeometry args={[sharedHeartCurve, 64, 0.0035, 8, true]} />
      </mesh>
      <group ref={normalEyesRef}>
        <mesh material={eyeMat}>
          <tubeGeometry args={[topPath, 20, 0.0035, 8, false]} />
        </mesh>
        <mesh material={eyeMat}>
          <tubeGeometry args={[bottomPath, 20, 0.0035, 8, false]} />
        </mesh>
      </group>
    </group>
  );
}

function RobotPrototype({
  neckParams = {
    baseR: 0.25,
    baseH: -0.01,
    midR: 0.23,
    midH: 0.02,
    lipBottomR: 0.27,
    lipBottomH: 0.025,
    lipTopR: 0.28,
    lipTopH: 0.05,
    innerR: 0.24,
    innerDropH: 0.03,
  },
  bodyParams = { bodyBevelR: 0.21, bodyBevelY: 0.38, bodyBevelT: 0.015 },
  color = "#ffffff",
  pantallaColor = "#1CB08F",
  pantallaBrillo = 1.2,
  blinkCycle = 3.0,
  metalness = 0.05,
}: {
  neckParams?: Record<string, number>;
  bodyParams?: Record<string, number>;
  color?: string;
  pantallaColor?: string;
  pantallaBrillo?: number;
  blinkCycle?: number;
  metalness?: number;
}) {
  const isLovedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  const design = {
    pantallaColor: pantallaColor,
    pantallaGrosor: 3.8,
    pantallaBrillo: pantallaBrillo,
    separacionOjos: 0.07,
    tamañoOrejas: 1.3,
    escalaOjos: 1.1,
    parpadeoFrecuencia: blinkCycle,
    parpadeoDuracion: 0.45,
    colorChasis: color,
    alturaCabeza: 0.6,
  };

  const config = {
    moveSpeed: 3.0,
    bodyRotSpeed: 6.0,
    headRotSpeed: 10.0,
    bodyTiltX: 0.1,
    bodyTiltY: 0.35,
    headLookX: 0.25,
    headLookY: 0.6,
  };

  const chassisMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: design.colorChasis,
      roughness: 0.35,
      metalness: metalness,
    });
  }, [design.colorChasis, metalness]);

  const headMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#111111",
      roughness: 1.0,
      metalness: 0.0,
    });
  }, []);

  const neckProfile = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector2(neckParams.innerR, neckParams.baseH));
    points.push(new THREE.Vector2(neckParams.baseR, neckParams.baseH));
    points.push(new THREE.Vector2(neckParams.midR, neckParams.midH));
    points.push(
      new THREE.Vector2(neckParams.lipBottomR, neckParams.lipBottomH),
    );
    points.push(new THREE.Vector2(neckParams.lipTopR, neckParams.lipTopH));
    points.push(new THREE.Vector2(neckParams.innerR, neckParams.lipTopH));
    points.push(
      new THREE.Vector2(
        neckParams.innerR,
        neckParams.lipTopH - neckParams.innerDropH,
      ),
    );
    return points;
  }, [neckParams]);

  useFrame((state, delta) => {
    if (!bodyRef.current || !headRef.current) return;
    const dt = Math.min(delta, 0.1);
    const tx = state.pointer.x;
    const ty = state.pointer.y;

    // Subtle position shift so robot NEVER leaves canvas
    const targetPosX = tx * 0.12;

    bodyRef.current.position.x = THREE.MathUtils.lerp(
      bodyRef.current.position.x,
      targetPosX,
      config.moveSpeed * dt,
    );

    const relativeX = tx;
    const bodyTargetRotY = -relativeX * config.bodyTiltY;
    const bodyTargetRotX = -ty * 0.15;
    const bodyTargetRotZ = -relativeX * 0.08;

    bodyRef.current.rotation.y = THREE.MathUtils.lerp(
      bodyRef.current.rotation.y,
      bodyTargetRotY,
      config.bodyRotSpeed * dt,
    );
    bodyRef.current.rotation.x = THREE.MathUtils.lerp(
      bodyRef.current.rotation.x,
      bodyTargetRotX,
      config.bodyRotSpeed * dt,
    );
    bodyRef.current.rotation.z = THREE.MathUtils.lerp(
      bodyRef.current.rotation.z,
      bodyTargetRotZ,
      config.bodyRotSpeed * dt,
    );

    const headTargetRotY = relativeX * config.headLookY;
    const headTargetRotX = -ty * config.headLookX;

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      headTargetRotY,
      config.headRotSpeed * dt,
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      headTargetRotX,
      config.headRotSpeed * dt,
    );
  });

  const handlePointerDown = (
    e: import("@react-three/fiber").ThreeEvent<PointerEvent>,
  ) => {
    e.stopPropagation();
    isLovedRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isLovedRef.current = false;
    }, 2000);
  };

  return (
    <group
      ref={bodyRef}
      position={[0, -0.15, 0]}
      onPointerDown={handlePointerDown}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <mesh castShadow receiveShadow material={chassisMat}>
        <sphereGeometry
          args={[0.43, 64, 64, 0, Math.PI * 2, Math.PI * 0.15, Math.PI * 0.85]}
        />
      </mesh>

      {bodyParams.bodyBevelT > 0 && (
        <mesh
          position={[0, bodyParams.bodyBevelY, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
          material={chassisMat}
        >
          <torusGeometry
            args={[bodyParams.bodyBevelR, bodyParams.bodyBevelT, 32, 64]}
          />
        </mesh>
      )}

      <mesh position={[0, 0.38, 0]} receiveShadow castShadow material={chassisMat}>
        <latheGeometry args={[neckProfile, 64]} />
      </mesh>

      <group ref={headRef} position={[0, design.alturaCabeza, 0]}>
        <mesh material={headMat} castShadow receiveShadow>
          <sphereGeometry args={[0.28, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
        </mesh>

        <GlassCapsule
          color={design.pantallaColor}
          power={design.pantallaGrosor}
          intensity={design.pantallaBrillo}
        />

        <group position={[0, -0.02, 0.29]}>
          <RobotEye
            position={[-design.separacionOjos, 0, 0]}
            rotation={[0, -0.2, 0]}
            scale={design.escalaOjos}
            blinkDuration={design.parpadeoDuracion}
            blinkCycle={design.parpadeoFrecuencia}
            isLovedRef={isLovedRef}
          />
          <RobotEye
            position={[design.separacionOjos, 0, 0]}
            rotation={[0, 0.2, 0]}
            scale={design.escalaOjos}
            blinkDuration={design.parpadeoDuracion}
            blinkCycle={design.parpadeoFrecuencia}
            isLovedRef={isLovedRef}
          />
        </group>

        <RobotEar
          position={[-0.29, 0, 0]}
          isLeft={true}
          scale={design.tamañoOrejas}
        />
        <RobotEar
          position={[0.29, 0, 0]}
          isLeft={false}
          scale={design.tamañoOrejas}
        />
      </group>
    </group>
  );
}

/**
 * Standalone Mini Robot canvas component to put into any card / hero section
 */
export function MiniRobotCanvas({
  scale = 1.25,
  color = "#ffffff",
  pantallaColor = "#1CB08F",
  pantallaBrillo = 1.4,
  blinkCycle = 3.0,
  className = "w-full h-full",
}: {
  scale?: number;
  color?: string;
  pantallaColor?: string;
  pantallaBrillo?: number;
  blinkCycle?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className} pointer-events-auto overflow-visible`}>
      <Canvas
        shadows
        camera={{ position: [0, 0.22, 4.2], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <hemisphereLight intensity={0.7} groundColor="#f0f2f5" color="#ffffff" />
          <ambientLight intensity={0.55} color="#ffffff" />
          <directionalLight
            position={[3, 5, 4]}
            intensity={1.2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.6}
            color="#1CB08F"
          />
          <group position={[0, 0.05, 0]} scale={scale}>
            <ContactShadows
              position={[0, -0.62, 0]}
              opacity={0.45}
              scale={6}
              resolution={512}
              blur={1.6}
              far={2.0}
              color="#001a39"
            />
            <RobotPrototype
              neckParams={{
                baseR: 0.215,
                baseH: -0.05,
                midR: 0.28,
                midH: 0.02,
                lipBottomR: 0.295,
                lipBottomH: 0.045,
                lipTopR: 0.27,
                lipTopH: 0.055,
                innerR: 0.1,
                innerDropH: 0.0,
              }}
              bodyParams={{
                bodyBevelR: 0.235,
                bodyBevelY: 0.34,
                bodyBevelT: 0.025,
              }}
              color={color}
              pantallaColor={pantallaColor}
              pantallaBrillo={pantallaBrillo}
              blinkCycle={blinkCycle}
              metalness={0.05}
            />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MiniRobotCanvas;
