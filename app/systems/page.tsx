import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/reveal";
import { systemsEntries } from "@/content/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "A visual catalog of technical rigor across architecture diagrams and battle-tested system patterns.",
};

function RepoFlowPreview({ slug }: { slug: string }) {
  const flows: Record<
    string,
    {
      stages: Array<{ label: string; detail: string }>;
      feedback?: string;
    }
  > = {
    "ai-powered-personalization-systems": {
      stages: [
        { label: "CONTEXT", detail: "Profile + Event + Weather" },
        { label: "CLASSIFY", detail: "Rules + Culture + Embeddings" },
        { label: "COMPOSE", detail: "Scoring + OutfitComposerV4" },
        { label: "DELIVER", detail: "Snapshot + OutfitDataBloc" },
      ],
      feedback: "Accept / reject -> style affinity",
    },
    "backend-driven-mobile-state-systems": {
      stages: [
        { label: "INTENT", detail: "Decision + Bag + Offline op" },
        { label: "CONTROL", detail: "Idempotency + Conflict checks" },
        { label: "TRUTH", detail: "Decision + Outfit + Bag snapshots" },
        { label: "RECOVER", detail: "Replay + Startup hydration" },
      ],
      feedback: "Backend-confirmed state -> Flutter UI",
    },
    "commerce-payment-reliability": {
      stages: [
        { label: "CHECKOUT", detail: "Bag + Shipping snapshot" },
        { label: "ORDER", detail: "Dedupe + PaymentOrder" },
        { label: "VERIFY", detail: "Paystack + Signed webhook" },
        { label: "COMMIT", detail: "Timeline + Client refresh" },
      ],
      feedback: "provider_event_key prevents duplicate processing",
    },
    "content-distribution-aggregation-systems": {
      stages: [
        { label: "SOURCES", detail: "Registry + ETag + Poll state" },
        { label: "INGEST", detail: "Scheduler + RSS/API adapters" },
        { label: "PERSIST", detail: "Normalize + Dedupe + Postgres" },
        { label: "DELIVER", detail: "Redis feeds + Flutter cache" },
      ],
      feedback: "Inserted articles invalidate cached news responses",
    },
  };

  const flow = flows[slug];

  if (!flow) {
    return null;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="grid gap-3 md:grid-cols-4">
        {flow.stages.map((stage, index) => (
          <div
            key={stage.label}
            className="relative rounded-lg border border-border-soft bg-surface-ink/80 p-4"
          >
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="absolute -left-3 top-1/2 hidden -translate-y-1/2 font-mono text-sm text-primary md:block"
              >
                -&gt;
              </span>
            ) : null}
            <p className="font-mono text-[10px] tracking-[0.16em] text-primary">
              {stage.label}
            </p>
            <p className="mt-3 text-xs leading-5 text-foreground/68">
              {stage.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-primary/45" />
        <p className="text-center font-mono text-[10px] leading-5 text-primary/75">
          {flow.feedback}
        </p>
        <span className="h-px w-10 bg-primary/45" />
      </div>
    </div>
  );
}

function DiagramPanel({ variant }: { variant: number }) {
  // Each diagram is tailored to the matching system entry so the page reads as
  // architecture storytelling instead of alternating prose and placeholder art.
  switch (variant) {
    case 0:
      return (
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 640 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="46" y="126" width="92" height="58" rx="12" className="stroke-white/35" />
          <rect x="182" y="72" width="100" height="42" rx="10" className="stroke-white/35" />
          <rect x="334" y="126" width="122" height="58" rx="14" className="stroke-primary" />
          <rect x="510" y="72" width="90" height="42" rx="10" className="stroke-white/35" />
          <rect x="508" y="206" width="94" height="42" rx="10" className="stroke-white/30" />

          <text x="92" y="160" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            PROFILE
          </text>
          <text x="232" y="97" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            EVENT
          </text>
          <text x="395" y="152" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            SCORING
          </text>
          <text x="395" y="170" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            ENGINE
          </text>
          <text x="555" y="97" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            WEATHER
          </text>
          <text x="555" y="231" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            OUTFIT
          </text>

          <path className="stroke-white/35" d="M138 155 H182 V114" />
          <path className="animate-ants stroke-primary opacity-70" d="M282 93 H334" />
          <path className="stroke-white/35" d="M456 140 H510 V114" />
          <path className="stroke-white/35" d="M456 170 H510 V227" />
          <circle cx="334" cy="93" r="4" fill="currentColor" />
          <circle cx="510" cy="114" r="4" fill="currentColor" />
          <circle cx="510" cy="227" r="4" fill="currentColor" />
        </svg>
      );
    case 1:
      return (
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 640 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="70" y="128" width="96" height="68" rx="12" className="stroke-white/40" />
          <rect x="266" y="56" width="112" height="44" rx="10" className="stroke-primary" />
          <path d="M472 124 a 34 12 0 0 1 68 0 v 56 a 34 12 0 0 1 -68 0 z" className="stroke-white/40" />
          <rect x="250" y="208" width="144" height="48" rx="10" className="stroke-white/35" />

          <text x="118" y="168" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            CLIENT
          </text>
          <text x="322" y="83" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            VERIFY_API
          </text>
          <text x="506" y="160" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            LEDGER
          </text>
          <text x="322" y="237" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            IDEMPOTENCY
          </text>

          <path className="animate-ants stroke-primary opacity-70" d="M166 162 H266" />
          <path className="stroke-white/40" d="M378 78 H506 V124" />
          <path className="stroke-white/35" d="M322 100 V208" />
          <circle cx="266" cy="162" r="4" fill="currentColor" />
          <circle cx="506" cy="124" r="4" fill="currentColor" />
          <circle cx="322" cy="208" r="4" fill="currentColor" />
        </svg>
      );
    case 2:
      return (
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 640 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="128" cy="164" r="44" className="stroke-white/40" />
          <rect x="250" y="118" width="140" height="92" rx="24" className="stroke-primary" />
          <circle cx="514" cy="164" r="44" className="stroke-white/40" />

          <text x="128" y="169" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            SQLITE
          </text>
          <text x="320" y="156" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            OUTBOX
          </text>
          <text x="320" y="176" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            REPLAY
          </text>
          <text x="514" y="169" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="currentColor">
            CLOUD
          </text>

          <path className="animate-ants stroke-primary" d="M172 164 H250" />
          <path className="animate-ants stroke-primary" d="M390 164 H470" />
          <path className="stroke-white/30" d="M320 118 V72 H514" />
          <rect x="458" y="52" width="112" height="28" rx="8" className="stroke-white/30" />
          <text x="514" y="70" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="currentColor">
            CONFLICT CHECK
          </text>
        </svg>
      );
    case 3:
      return (
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 640 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="56" y="74" width="132" height="164" rx="18" className="stroke-white/25" />
          <rect x="222" y="74" width="132" height="164" rx="18" className="stroke-primary" />
          <rect x="388" y="74" width="132" height="164" rx="18" className="stroke-white/25" />
          <rect x="246" y="34" width="84" height="24" rx="8" className="stroke-white/30" />

          <text x="122" y="100" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            CLIENT_A
          </text>
          <text x="288" y="100" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            SCHEMA
          </text>
          <text x="454" y="100" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            CLIENT_B
          </text>
          <text x="288" y="51" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="currentColor">
            FLAGS
          </text>

          <path className="stroke-white/20" d="M78 122 H166" />
          <path className="stroke-primary/80 animate-ants" d="M244 122 H332" />
          <path className="stroke-white/20" d="M410 122 H498" />

          <rect x="90" y="144" width="64" height="56" rx="8" className="stroke-white/20" />
          <rect x="256" y="132" width="96" height="18" rx="6" className="stroke-primary/70" />
          <rect x="256" y="158" width="72" height="18" rx="6" className="stroke-white/25" />
          <rect x="256" y="184" width="88" height="18" rx="6" className="stroke-white/25" />
          <rect x="422" y="144" width="64" height="56" rx="8" className="stroke-white/20" />
        </svg>
      );
    default:
      return (
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 640 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="44" y="132" width="92" height="56" rx="12" className="stroke-white/35" />
          <rect x="176" y="132" width="116" height="56" rx="12" className="stroke-white/35" />
          <rect x="332" y="132" width="108" height="56" rx="12" className="stroke-primary" />
          <rect x="480" y="132" width="116" height="56" rx="12" className="stroke-white/35" />

          <text x="90" y="166" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            RSS
          </text>
          <text x="234" y="166" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            REGISTRY
          </text>
          <text x="386" y="158" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            INGEST
          </text>
          <text x="386" y="176" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            PIPELINE
          </text>
          <text x="538" y="166" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor">
            FEEDS
          </text>

          <path className="stroke-white/35" d="M136 160 H176" />
          <path className="stroke-white/35" d="M292 160 H332" />
          <path className="animate-ants stroke-primary" d="M440 160 H480" />

          <rect x="346" y="66" width="80" height="24" rx="8" className="stroke-white/30" />
          <text x="386" y="82" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="currentColor">
            SCHEDULED
          </text>
          <path className="stroke-white/30" d="M386 90 V132" />
        </svg>
      );
  }
}

export default function SystemsPage() {
  return (
    <div className="shell-container pb-40">
      <header className="pb-20 pt-8">
        <div className="flex flex-col gap-4">
          <span className="eyebrow text-xs text-primary">ARCHIVE_01</span>
          <h1 className="text-5xl font-semibold leading-none tracking-[-0.05em] md:text-7xl">
            Systems &amp; Architecture
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/72">
            A visual catalog of technical rigor. Each diagram represents a
            battle-tested architecture designed for high-availability, precision
            state management, and developer ergonomics.
          </p>
        </div>
      </header>

      <main className="space-y-20 md:space-y-24">
        {systemsEntries.map((system, index) => {
          const reverse = index % 2 === 1;
          const pathParts = system.href.split("/").filter(Boolean);
          const slug = pathParts[pathParts.length - 1] ?? "";
          const hasRepoFlow = [
            "ai-powered-personalization-systems",
            "backend-driven-mobile-state-systems",
            "commerce-payment-reliability",
            "content-distribution-aggregation-systems",
          ].includes(slug);

          return (
            <FadeIn key={system.title}>
              <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
                <div className={reverse ? "lg:order-2" : ""}>
                  <article className="glass-card h-full rounded-[28px] p-8 md:p-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80">
                      {system.domain}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {system.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                      <Link
                        href={system.href}
                        className="transition-colors hover:text-primary focus-visible:text-primary"
                      >
                        {system.title}
                      </Link>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72">
                      {system.summary}
                    </p>

                    <div className="mt-8 rounded-2xl border border-border-soft bg-surface-ink/60 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        Architecture Snapshot
                      </p>
                      <p className="mt-3 font-mono text-xs leading-6 text-foreground/70">
                        {system.diagramLabel}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-primary">
                      <Link
                        href={system.href}
                        className="font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-white focus-visible:text-white"
                      >
                        {system.status ?? system.linkLabel}
                      </Link>
                      <span aria-hidden="true">{"->"}</span>
                    </div>
                  </article>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <Link href={system.href} className="group block h-full">
                    <div className="glass-card relative flex h-full min-h-[320px] overflow-hidden rounded-[28px]">
                      <div className="absolute inset-0 grid-pattern opacity-20" />
                      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(183,196,255,0.14),transparent_68%)]" />

                      <div className="relative flex h-full w-full flex-col p-6 md:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/75">
                            {system.domain}
                          </p>
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/54 transition-colors group-hover:text-primary">
                            Open system
                          </span>
                        </div>

                        <div className="flex flex-1 items-center justify-center py-8">
                          {hasRepoFlow ? (
                            <RepoFlowPreview slug={slug} />
                          ) : (
                            <DiagramPanel variant={index - 3} />
                          )}
                        </div>

                        <div className="border-t border-border-soft pt-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                            {hasRepoFlow ? "System Flow" : "Live Diagram"}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-foreground/68">
                            {system.linkLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </FadeIn>
          );
        })}
      </main>
    </div>
  );
}
