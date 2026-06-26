export type SystemEntry = {
  title: string;
  summary: string;
  domain: string;
  stack: string[];
  diagramLabel?: string;
  status?: string;
  href: string;
  linkLabel: string;
};

export const systemsEntries: SystemEntry[] = [
  {
    title: "AI-Powered Personalization Systems",
    summary:
      "Context-aware recommendation pipelines combine event classification, embeddings, weather, cultural logic, confidence bands, and fallback strategies so personalized outputs stay useful even when user or context data is incomplete.",
    domain: "PERSONALISATION",
    stack: ["Embeddings", "FastAPI", "Flutter", "Weather"],
    diagramLabel: "Profile + Event + Weather -> Scoring -> Outfit Recommendation",
    status: "OPEN RECOMMENDATION ENGINE",
    href: "/systems/ai-powered-personalization-systems",
    linkLabel: "Open personalization system",
  },
  {
    title: "Backend-Driven Mobile State Systems",
    summary:
      "Backend snapshots, idempotent mutations, local outbox replay, startup hydration, and conflict-aware synchronization preserve user intent across interrupted sessions and devices.",
    domain: "STATE",
    stack: ["Snapshots", "Outbox", "Recovery", "Postgres"],
    diagramLabel: "Intent -> Mutation Control -> Backend Truth -> Hydration",
    status: "TRACE RECOVERY FLOW",
    href: "/systems/backend-driven-mobile-state-systems",
    linkLabel: "Open mobile state system",
  },
  {
    title: "Commerce & Payment Reliability",
    summary:
      "An order-first Paystack workflow combines bag snapshots, checkout deduplication, backend verification, signed webhooks, event idempotency, and lifecycle synchronization.",
    domain: "COMMERCE",
    stack: ["Paystack", "Idempotency", "Orders", "Flutter"],
    diagramLabel: "Checkout -> Order -> Paystack -> Verification -> Client",
    status: "TRACE TRANSACTION FLOW",
    href: "/systems/commerce-payment-reliability",
    linkLabel: "Open commerce system",
  },
  {
    title: "Content Distribution & Ingestion",
    summary:
      "This backend uses scheduled RSS and API ingestion, source-registry controls, startup timeout guards, editorial workflow routes, and canonical feed delivery to keep a mobile news product fresh without letting upstream instability break the user experience.",
    domain: "DISTRIBUTION",
    stack: ["RSS", "FastAPI", "Postgres", "Scheduler"],
    diagramLabel: "Sources -> Ingestion -> Postgres -> Feed API",
    status: "TRACE INGESTION FLOW",
    href: "/systems/content-distribution-aggregation-systems",
    linkLabel: "Open distribution system",
  },
];
