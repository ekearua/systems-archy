import Link from "next/link";
import type { ProjectSummary } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectSummary;
  hrefBase?: string;
};

export function ProjectCard({
  project,
  hrefBase = "/case-studies",
}: ProjectCardProps) {
  return (
    <Link
      href={`${hrefBase}/${project.slug}`}
      className="group glass-panel block rounded-[28px] p-7 transition-transform hover:-translate-y-1 md:p-8"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-border-soft bg-surface-quiet/85 px-3 py-1 font-mono text-[11px] text-muted">
          {project.year}
        </span>
        <span className="rounded-full border border-primary/20 bg-primary-strong/10 px-3 py-1 font-mono text-[11px] text-primary">
          {project.role}
        </span>
        {project.featured ? (
          <span className="rounded-full border border-primary/20 px-3 py-1 font-mono text-[11px] text-primary">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-foreground/74 md:text-base">
        {project.summary}
      </p>

      {project.metrics.length > 0 ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border-soft bg-surface-ink/75 p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {metric.label}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-2 font-mono text-[11px] text-foreground/64"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
