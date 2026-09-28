export interface ProductImage {
  src: string;
  title: string;
  caption: string;
  isHero?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  category: string;
  categoryTag: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  stages?: string[];
  primaryImage: string;
  gallery: ProductImage[];
  accentColor?: string;
  badgeText?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "fieldsense360",
    slug: "fieldsense360",
    name: "FieldSense360",
    shortName: "FieldSense360",
    tagline: "Every site, every stage, sensed end to end.",
    category: "Site Operations & Lifecycle Intelligence",
    categoryTag: "01 • SITE LIFECYCLE MANAGEMENT",
    badgeText: "Enterprise Site Ops",
    shortDescription:
      "FieldSense360 is an all-in-one platform for managing the entire site development lifecycle — from screening and feasibility through approvals, construction, and commissioning — with built-in field audits, a live pipeline dashboard, and an offline-first mobile app for teams in the field.",
    longDescription: `FieldSense360 gives operations teams a single command center for every physical site they develop — replacing scattered spreadsheets and paper forms with one auditable pipeline.

Every application flows through a clear, stage-by-stage pipeline: Site Screening → Feasibility → Approvals → Layout → Documents → Government Documentation → Construction & Commissioning. Managers watch the whole portfolio from a real-time analytics dashboard — total applications, in-process, approved, inaugurated, rejected, and on-hold — with per-stage counts, overdue alerts, and a breakdown by regional manager.

In the field, teams work from a fast, offline-first mobile app. They track their sites, run guided inspections, capture geo-tagged photos and notes, and raise corrective actions on the spot — even with no signal. Everything syncs automatically the moment they're back online. A dedicated audit module adds configurable inspection templates, live scoring, and a maker-checker verification flow, with role-based access that mirrors the real org hierarchy.`,
    keyFeatures: [
      "End-to-end site development pipeline with stage-gate governance",
      "Real-time analytics dashboard with overdue SLA tracking",
      "Offline-first mobile app for field engineers & auditors",
      "Guided field inspections with photo & GPS tamper-proof evidence",
      "Corrective actions (CAPA) tracking with instant escalation",
      "Configurable audit templates & automated compliance scoring",
      "Maker-checker multi-level authorization & verification flow",
      "Role-based access control mirroring exact corporate hierarchy",
      "Automated executive reporting, digests & portfolio variance",
    ],
    stages: [
      "Site Screening",
      "Feasibility",
      "Approvals",
      "Layout",
      "Documents",
      "Govt Documentation",
      "Construction & Commissioning",
    ],
    primaryImage: "/projects-images/FieldSense360-web-dashboard.png",
    gallery: [
      {
        src: "/projects-images/FieldSense360-web-dashboard.png",
        title: "Real-Time Site Portfolio Analytics Dashboard",
        caption: "Main command center monitoring portfolio status, stage-by-stage counts, overdue alerts, and regional breakdowns.",
        isHero: true,
      },
      {
        src: "/projects-images/FieldSense360-mobile-suite.png",
        title: "Offline-First Mobile Field Suite",
        caption: "On-site guided inspections, geo-tagged photo evidence, corrective actions, and offline synchronization.",
      },
    ],
  },
  {
    id: "col-track",
    slug: "col-track",
    name: "COL Track",
    shortName: "COL Track",
    tagline: "GPS-verified field attendance and location-aware visit tracking.",
    category: "Workforce & Attendance Automation",
    categoryTag: "02 • FIELD WORKFORCE INTELLIGENCE",
    badgeText: "Location Verified",
    shortDescription:
      "COL Track is a GPS-verified field attendance and visit-tracking solution. On-ground staff check in from their allocated sites with a live-location selfie, while managers monitor, approve, and export attendance in real time from a web dashboard.",
    longDescription: `COL Track is a location-aware attendance and field-force tracking platform built for teams that work across multiple sites rather than a single office. Every check-in is tied to the employee's real GPS location and a selfie taken at the site, so attendance reflects where people actually were.

Field staff mark arrival at their allocated location, log each site visit during the day, and start/end their daily journey — the app auto-detects the location and matches it against the assigned site.

Managers work from a web portal with a live attendance register (in/out times, department, assigned vs. detected location, visit reasons) that can be filtered by date, searched, approved, and exported for payroll and reporting.`,
    keyFeatures: [
      "GPS geofenced check-in and check-out verification",
      "Live-location selfie verification at assigned facilities",
      "Automated site detection and geofence radius matching",
      "Field visit logging and continuous daily journey timeline",
      "Multi-site and cross-departmental organizational structure",
      "Web admin dashboard with live registers & instant approvals",
      "One-click attendance & payroll export (Excel, CSV, API)",
    ],
    stages: [
      "Assigned Location Match",
      "Selfie Capture",
      "GPS Verification",
      "Check-In Logged",
      "Site Visits Logged",
      "Manager Approval",
    ],
    primaryImage: "/projects-images/col-track-dashboard-redacted.png",
    gallery: [
      {
        src: "/projects-images/col-track-dashboard-redacted.png",
        title: "Live Attendance Register & Admin Portal",
        caption: "Web management dashboard featuring real-time employee check-ins, department filters, assigned vs. detected site matching, and exportable logs.",
        isHero: true,
      },
      {
        src: "/projects-images/WhatsApp Image 2026-09-28 at 11.11.24.jpeg",
        title: "Mobile Geofenced Check-In & Selfie Capture",
        caption: "Field app interface requiring live-location selfie and auto-detected site verification before logging arrival.",
      },
      {
        src: "/projects-images/WhatsApp Image 2026-09-28 at 11.11.25.jpeg",
        title: "Journey Tracking & Multi-Site Visit Workflow",
        caption: "Mobile home screen with quick actions for marking visits, tracking journey milestones, and offline profile synchronization.",
      },
    ],
  },
  {
    id: "col-tms",
    slug: "col-tms",
    name: "COL TMS — Fuel & Fleet Transport Management System",
    shortName: "COL TMS",
    tagline: "From depot to delivery — every trip tracked and accounted for.",
    category: "Petroleum & Tanker Logistics ERP",
    categoryTag: "03 • FLEET & FUEL LOGISTICS",
    badgeText: "Tanker Logistics ERP",
    shortDescription:
      "COL TMS is an end-to-end transport management system built for fuel and tanker logistics. It connects dispatch, drivers, and finance in one platform — from customer orders and trip planning to real-time GPS delivery tracking, geofenced site verification, and built-in profit & loss reporting.",
    longDescription: `COL TMS is a complete transport management platform designed for fuel and petroleum distribution — the businesses that move product from depots to fuel stations and industrial sites with a fleet of tank lorries. It brings the three parts of that operation that usually live in separate systems — dispatch, field execution, and accounting — together into one connected workflow.

At the center is a web control panel where operators manage the entire logistics lifecycle: customer orders, trip planning across primary, secondary, and external routes, tank lorries, drivers, sites, products, and freight rates. Every trip moves through a clear status pipeline — Created, Accepted, Started, Ended, Closed — so dispatchers always know exactly where each load is, and a live dashboard breaks down the fleet at a glance.

Drivers work from a dedicated mobile app that keeps running even without a signal. It captures every milestone of the journey step by step — arrive at depot, filling start and complete, leave depot, arrive at site, decantation, and exit — each stamped with time and GPS. Geofencing verifies that deliveries genuinely happen at the correct site, invoices are captured against each drop, and everything syncs automatically the moment the device reconnects, so head office sees an accurate, tamper-resistant record of what happened in the field.

Because logistics and money are inseparable in fuel distribution, COL TMS also builds accounting straight into the platform. Trip vouchers, debit/credit tracking, monthly expenses, financial periods, and distance standards feed directly into reports like Profit & Loss and per-trip Profitability — so the same data that dispatched a truck also tells you whether that trip made money.

Role-based access, multi-user management, device controls, and tracker-company integration make it ready for real operations at scale. COL TMS gives fuel and transport companies a single source of truth from the moment an order is placed to the moment the load is delivered, verified, and reconciled.`,
    keyFeatures: [
      "End-to-end trip management — primary, secondary & external routes with a clear status pipeline",
      "Real-time driver mobile app with offline-first sync",
      "GPS tracking and geofenced site/delivery verification",
      "Step-by-step trip progress: depot filling, decantation, and site exit",
      "Digital invoices and delivery proof captured in the field",
      "Built-in accounting: trip vouchers, Dr/Cr, monthly expenses & financial periods",
      "Profit & Loss and Trip Profitability reporting",
      "Master data for tank lorries, sites, customers, products, freight rates & distance standards",
      "Role-based user management, device controls & push notifications",
    ],
    stages: [
      "Customer Order",
      "Trip Planning",
      "Depot Filling",
      "Transit & GPS Tracking",
      "Site Geofence Arrival",
      "Decantation",
      "Proof of Delivery",
      "Financial Settlement & P&L",
    ],
    primaryImage: "/projects-images/col-tms-hero.png",
    gallery: [
      {
        src: "/projects-images/col-tms-hero.png",
        title: "COL TMS Command Center & Architecture",
        caption: "From depot to delivery — central fleet control, driver dispatch, and automated accounting in one system.",
        isHero: true,
      },
      {
        src: "/projects-images/col-tms-feature-1-dashboard.png",
        title: "Administration Dashboard",
        caption: "Live operational metrics, active trips breakdown, vehicle status, and financial health summaries.",
      },
      {
        src: "/projects-images/col-tms-feature-2-tripboard.png",
        title: "Live Trip Control Board",
        caption: "Real-time trip status pipeline tracking primary, secondary, and external tanker movements.",
      },
      {
        src: "/projects-images/col-tms-feature-3-driver-progress.png",
        title: "Driver App Trip Progress",
        caption: "Step-by-step milestone logging from depot gate-in, product loading, to highway transit.",
      },
      {
        src: "/projects-images/col-tms-feature-4-delivery.png",
        title: "Geofenced Deliveries & Verification",
        caption: "Automated geofencing checks, tamper-proof decantation logging, and instant delivery receipting.",
      },
      {
        src: "/projects-images/col-tms-feature-5-offline-sync.png",
        title: "Offline-First Auto Sync",
        caption: "Resilient edge architecture ensuring continuous operation in remote routes with automatic synchronization.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
