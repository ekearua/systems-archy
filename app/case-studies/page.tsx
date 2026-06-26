import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { getAllCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Three grounded case studies covering recommendation systems, persistent mobile state, and reliable commerce workflows.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="shell-container pb-24">
      <header className="mb-16 pt-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="h-px w-12 bg-primary" />
          <span className="eyebrow text-xs text-primary">Applied Engineering</span>
        </div>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Case Studies
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
          Three implementation stories showing how recommendation logic, durable
          state, and payment workflows were designed for real-world uncertainty.
        </p>
      </header>

      <main className="grid gap-6 xl:grid-cols-2">
        {caseStudies.map((caseStudy, index) => (
          <FadeIn key={caseStudy.slug} delay={0.08 * index}>
            <ProjectCard project={caseStudy} />
          </FadeIn>
        ))}
      </main>
    </div>
  );
}
