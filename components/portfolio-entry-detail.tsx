import Link from "next/link";
import { FadeIn } from "@/components/motion/reveal";
import { SystemFlowDiagram } from "@/components/system-flow-diagram";
import type { Project } from "@/lib/content";

type PortfolioEntryDetailProps = {
  entry: Project;
  kind: "Case Study" | "System";
  backHref: string;
  backLabel: string;
};

export function PortfolioEntryDetail({
  entry,
  kind,
  backHref,
  backLabel,
}: PortfolioEntryDetailProps) {
  // Keep system and case-study detail pages visually consistent while their
  // routes and editorial purpose remain distinct.
  const signals = [
    { label: "Role", value: entry.role },
    { label: "Year", value: String(entry.year) },
    { label: "Stack", value: entry.tags.slice(0, 2).join(" + ") },
  ];

  return (
    <article className="pb-24">
      <header className="shell-container mb-20 pt-8">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            {kind}
          </span>
          <span className="rounded-full border border-border-soft px-3 py-1 font-mono text-xs text-muted">
            {entry.role}
          </span>
          <span className="rounded-full border border-border-soft px-3 py-1 font-mono text-xs text-muted">
            {entry.year}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              {entry.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/72">
              {entry.summary}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-2xl border border-border-soft bg-surface-ink/75 p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {signal.label}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {kind === "System" ? <SystemFlowDiagram slug={entry.slug} /> : null}

      <section className="shell-container mb-20">
        <FadeIn>
          <div className="glass-card relative overflow-hidden rounded-xl p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-10" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Engineering Focus
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-2 font-mono text-[11px] text-foreground/64"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {entry.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border-soft bg-surface-ink/75 p-5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="shell-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)]">
          <FadeIn>
            <div className="glass-card rounded-xl p-8 md:p-12">
              <div className="project-prose space-y-6 text-base leading-8">
                {entry.content}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <aside className="rounded-xl border border-border-soft bg-surface-ink/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Continue Exploring
              </p>
              <p className="mt-4 text-sm leading-7 text-foreground/72">
                Return to the {kind.toLowerCase()} index to compare this work with
                the rest of the architecture portfolio.
              </p>
              <Link
                href={backHref}
                className="mt-6 inline-flex rounded-lg bg-primary-strong px-5 py-3 text-sm font-bold text-white"
              >
                {backLabel}
              </Link>
            </aside>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
