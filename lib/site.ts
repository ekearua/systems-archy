export const siteConfig = {
  title: "SYSTEM_ARCHITECT | Building Reliable Mobile Systems",
  shortName: "SYSTEM_ARCHITECT",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical metadata resolves to
  // the deployed domain instead of localhost.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Building reliable mobile systems across Flutter, backend services, payments, and stateful user experiences.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Systems", href: "/systems" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ],
  heroTopics: ["Flutter", "Backend Services", "Payments", "Stateful UX"],
  heroMetrics: [
    {
      label: "Reliability",
      value: "99.999%",
      context: "Transaction flows designed to keep backend truth ahead of client ambiguity.",
    },
    {
      label: "Latency",
      value: "<150ms",
      context: "Operational paths optimized for fast verification and graceful fallback handling.",
    },
    {
      label: "Client Model",
      value: "Thin observer",
      context: "Critical logic lives in durable server-side orchestration instead of volatile clients.",
    },
    {
      label: "State Shape",
      value: "Persistent",
      context: "Synchronization, retries, and recovery are modeled as explicit system behavior.",
    },
  ],
  controlLayers: [
    {
      name: "Client",
      summary: "The client becomes a thin subscriber that requests work and reflects backend-confirmed state.",
    },
    {
      name: "Backend",
      summary: "Idempotent handlers and strict workflow ownership keep race conditions from fragmenting truth.",
    },
    {
      name: "Ledger",
      summary: "Persistent reconciliation layers preserve auditability, retries, and operational clarity.",
    },
  ],
  principles: [
    {
      title: "Resilient Payment Flow",
      summary:
        "Multi-stage fallback logic with atomic state transitions to prevent double charging.",
    },
    {
      title: "State Synchronization",
      summary:
        "Real-time bi-directional sync using WebSockets with vector clock conflict resolution.",
    },
    {
      title: "Backend-driven UI",
      summary:
        "Dynamic component rendering controlled by central schema registries for instant updates.",
    },
  ],
  contact: {
    // Centralize direct contact details so the contact page and footer stay aligned.
    email: "ekearua@gmail.com",
    location: "Remote / global collaboration",
    focus: [
      "Complex backend synchronization",
      "Payment flows",
      "Mobile product reliability",
      "Resilient systems",
    ],
    links: [
      {
        label: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/eke-arua-60b31b167/",
        description: "Social Sync",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/ekearua",
        description: "Repository Access",
      },
    ],
  },
} as const;
