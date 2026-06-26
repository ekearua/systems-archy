import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/reveal";
import { getAllWriting, getWritingBySlug } from "@/lib/content";

type WritingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const entries = await getAllWriting();

  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWritingBySlug(slug);

  if (!entry) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const entry = await getWritingBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="pb-24">
      <header className="shell-container mb-20 pt-8">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            Deep Dive
          </span>
          <span className="rounded-full border border-border-soft px-3 py-1 font-mono text-xs text-muted">
            {entry.publishedAt}
          </span>
          {entry.featured ? (
            <span className="rounded-full border border-primary/30 px-3 py-1 font-mono text-xs text-primary">
              Featured
            </span>
          ) : null}
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          {entry.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/72">
          {entry.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-soft bg-surface-quiet/80 px-3 py-2 font-mono text-[11px] text-foreground/64"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

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
            <aside className="space-y-6">
              <div className="rounded-xl border border-border-soft bg-surface-ink/70 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Why it matters
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  These articles capture the system tradeoffs behind the product,
                  not just the surface-level features.
                </p>
              </div>

              <div className="rounded-xl border border-border-soft bg-surface-ink/70 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Next Step
                </p>
                <Link
                  href="/writing"
                  className="mt-4 inline-flex rounded-lg bg-primary-strong px-5 py-3 text-sm font-bold text-white"
                >
                  Back to Writing
                </Link>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
