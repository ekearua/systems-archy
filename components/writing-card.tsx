import type { WritingSummary } from "@/lib/content";

type WritingCardProps = {
  entry: WritingSummary;
};

export function WritingCard({ entry }: WritingCardProps) {
  return (
    <article className="glass-panel rounded-[28px] p-7 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-border-soft bg-surface-quiet/85 px-3 py-1 font-mono text-[11px] text-muted">
          {entry.publishedAt}
        </span>
        {entry.featured ? (
          <span className="rounded-full border border-primary/20 bg-primary-strong/10 px-3 py-1 font-mono text-[11px] text-primary">
            Featured note
          </span>
        ) : null}
      </div>

      <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
        {entry.title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-foreground/74 md:text-base">
        {entry.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-2 font-mono text-[11px] text-foreground/64"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
