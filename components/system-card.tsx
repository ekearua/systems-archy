import type { SystemEntry } from "@/content/systems";

type SystemCardProps = {
  system: SystemEntry;
};

export function SystemCard({ system }: SystemCardProps) {
  return (
    <article className="glass-panel rounded-[28px] p-7 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-[11px] text-primary">{system.domain}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            {system.title}
          </h2>
        </div>
        {system.status ? (
          <span className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-1 font-mono text-[11px] text-muted">
            {system.status}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-foreground/74 md:text-base">
        {system.summary}
      </p>

      {system.diagramLabel ? (
        <div className="mt-6 rounded-2xl border border-border-soft bg-surface-ink/75 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Diagram anchor
          </p>
          <p className="mt-2 text-sm text-primary">{system.diagramLabel}</p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {system.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-2 font-mono text-[11px] text-foreground/64"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
