import Link from "next/link";
import { FadeIn } from "@/components/motion/reveal";
import { getAllCaseStudies, getAllWriting } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { systemsEntries } from "@/content/systems";

export const metadata = {
  description: siteConfig.description,
};

function SystemFlowPreview({ diagramLabel }: { diagramLabel: string }) {
  const stages = diagramLabel.split("->").map((stage) => stage.trim()).filter(Boolean);

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {stages.map((stage, index) => (
        <div
          key={`${stage}-${index}`}
          className="relative rounded-lg border border-border-soft bg-surface-ink/80 p-3"
        >
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="absolute -left-3 top-1/2 hidden -translate-y-1/2 font-mono text-sm text-primary lg:block"
            >
              -&gt;
            </span>
          ) : null}
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground/72">{stage}</p>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  const [caseStudies, writing] = await Promise.all([
    getAllCaseStudies(),
    getAllWriting(),
  ]);
  const latestWriting = writing.slice(0, 3);

  // The home page intentionally mirrors the reference HTML section order instead of the generic card layout.
  return (
    <div className="pb-24">
      <section className="shell-container relative mb-32 pt-8">
        <div className="pointer-events-none absolute -left-12 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <FadeIn className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-strong/80 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="eyebrow text-[11px] text-muted">Available for Architecture Audits</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Building reliable mobile systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72 md:text-xl">
            Flutter <span className="mx-2 text-muted">|</span> Backend Services{" "}
            <span className="mx-2 text-muted">|</span> Payments{" "}
            <span className="mx-2 text-muted">|</span> Stateful UX
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-strong px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(0,82,255,0.2)] transition-all hover:shadow-[0_0_36px_rgba(0,82,255,0.28)]"
            >
              View Case Studies
              <span aria-hidden="true">{"->"}</span>
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border-soft bg-transparent px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-surface-strong"
            >
              Contact Me
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="shell-container mb-32">
        <div className="grid items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="eyebrow mb-4 text-xs text-primary">Technical Philosophy</h2>
            <p className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-balance md:text-4xl">
              I build production-ready mobile apps and backend systems focused on{" "}
              <span className="text-primary">payments</span>,{" "}
              <span className="text-primary">synchronization</span>, and{" "}
              <span className="text-primary">scalable user experiences</span>.
            </p>
          </div>
          <div className="flex justify-start md:col-span-4 md:justify-end">
            <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-border-soft bg-surface-ink">
              <span className="font-mono text-2xl text-muted">[]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shell-container mb-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="eyebrow mb-4 text-xs text-primary">Selected Works</h2>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Engineering case studies
            </h3>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((project, index) => (
            <FadeIn key={project.slug} delay={0.08 * index}>
              <Link
                href={`/case-studies/${project.slug}`}
                className="glass-card group block rounded-xl p-8 transition-all"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-mono text-xs text-primary">{project.tags[0]}</span>
                  <span className="rounded border border-border-soft px-2 py-1 font-mono text-[10px] text-muted">
                    {project.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="mt-3 min-h-12 text-sm leading-6 text-foreground/72">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-strong px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border-soft/40 bg-surface-ink/80 py-32">
        <div className="shell-container">
          <div className="mb-16">
            <h2 className="eyebrow mb-4 text-xs text-primary">Architecture</h2>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Systems Thinking In Practice
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {systemsEntries.map((system, index) => (
              <FadeIn key={system.title} delay={0.08 * index}>
                <Link
                  href={system.href}
                  className="glass-card group block rounded-xl p-6 transition-colors hover:border-primary/35"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      {system.domain}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/52 transition-colors group-hover:text-primary">
                      Open System
                    </span>
                  </div>

                  <SystemFlowPreview diagramLabel={system.diagramLabel ?? system.title} />

                  <div className="mt-6">
                    <h5 className="mb-2 text-lg font-bold">{system.title}</h5>
                    <p className="text-sm leading-6 text-foreground/72">{system.summary}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-container mt-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-6">
          <div>
            <h2 className="eyebrow mb-4 text-xs text-primary">Deep Dives</h2>
            <h3 className="mb-8 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Engineering Insights
            </h3>
            <p className="max-w-md text-base leading-7 text-foreground/72">
              I write about complex systems engineering, edge-case handling, and the
              intersection of mobile performance and backend reliability.
            </p>
          </div>

          <div className="space-y-4">
            {latestWriting.map((entry, index) => (
              <FadeIn key={entry.slug} delay={0.08 * index}>
                <Link
                  href={`/writing/${entry.slug}`}
                  className="flex items-center justify-between rounded-lg border border-border-soft px-6 py-6 transition-all hover:bg-surface-strong"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-bold">{entry.title}</span>
                  </div>
                  <span className="font-mono text-xs text-muted">NE</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
