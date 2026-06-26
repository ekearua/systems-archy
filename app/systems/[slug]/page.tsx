import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioEntryDetail } from "@/components/portfolio-entry-detail";
import { getAllSystems, getSystemBySlug } from "@/lib/content";

type SystemPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const systems = await getAllSystems();
  return systems.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: SystemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getSystemBySlug(slug);

  return entry
    ? { title: entry.title, description: entry.summary }
    : { title: "System not found" };
}

export default async function SystemDetailPage({ params }: SystemPageProps) {
  const { slug } = await params;
  const entry = await getSystemBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <PortfolioEntryDetail
      entry={entry}
      kind="System"
      backHref="/systems"
      backLabel="Back to Systems"
    />
  );
}
