import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioEntryDetail } from "@/components/portfolio-entry-detail";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  return entry
    ? { title: entry.title, description: entry.summary }
    : { title: "Case study not found" };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <PortfolioEntryDetail
      entry={entry}
      kind="Case Study"
      backHref="/case-studies"
      backLabel="Back to Case Studies"
    />
  );
}
