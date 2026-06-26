import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/reveal";
import { getAllWriting } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering insights on complex systems, edge-case handling, and backend reliability.",
};

export default async function WritingPage() {
  const writing = await getAllWriting();

  return (
    <div className="shell-container pb-24">
      <section className="grid gap-8 pb-20 pt-8 md:grid-cols-2 md:gap-6">
        <div>
          <h2 className="eyebrow mb-4 text-xs text-primary">Deep Dives</h2>
          <h1 className="mb-8 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Engineering Insights
          </h1>
          <p className="max-w-md text-base leading-7 text-foreground/72">
            I write about complex systems engineering, edge-case handling, and the
            intersection of mobile performance and backend reliability.
          </p>
        </div>

        <div className="space-y-4">
          {writing.map((entry, index) => (
            <FadeIn key={entry.slug} delay={0.08 * index}>
              <Link
                href={`/writing/${entry.slug}`}
                className="block rounded-lg border border-border-soft px-6 py-6 transition-all hover:bg-surface-strong"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold">{entry.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">
                        {entry.summary}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted">NE</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 pl-10">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border-soft px-2 py-1 font-mono text-[10px] text-muted"
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
    </div>
  );
}
