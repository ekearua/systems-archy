import { notFound, redirect } from "next/navigation";
import { isCaseStudySlug, isSystemSlug } from "@/lib/content";

type LegacyProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyProjectRedirectPage({
  params,
}: LegacyProjectPageProps) {
  const { slug } = await params;

  if (isCaseStudySlug(slug)) {
    redirect(`/case-studies/${slug}`);
  }

  if (isSystemSlug(slug)) {
    redirect(`/systems/${slug}`);
  }

  notFound();
}
