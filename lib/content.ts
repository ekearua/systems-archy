import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/lib/mdx-components";

type ProjectMetric = {
  label: string;
  value: string;
};

type ProjectFrontmatter = {
  title: string;
  summary: string;
  year: number;
  tags: string[];
  featured?: boolean;
  role: string;
  metrics?: ProjectMetric[];
};

type WritingFrontmatter = {
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  metrics: ProjectMetric[];
  featured: boolean;
  content: React.ReactNode;
};

export type ProjectSummary = Omit<Project, "content">;

export type WritingSummary = WritingFrontmatter & {
  slug: string;
  featured: boolean;
};

export type WritingEntry = WritingSummary & {
  content: React.ReactNode;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");
const writingDirectory = path.join(process.cwd(), "content", "writing");

export const caseStudySlugs = [
  "context-aware-recommendation-engine",
  "persistent-mobile-state-architecture",
  "reliable-commerce-workflow",
] as const;

export const systemSlugs = [
  "ai-powered-personalization-systems",
  "backend-driven-mobile-state-systems",
  "commerce-payment-reliability",
  "content-distribution-aggregation-systems",
] as const;

const caseStudySlugSet = new Set<string>(caseStudySlugs);
const systemSlugSet = new Set<string>(systemSlugs);

async function getMdxSlugs(directory: string) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

async function readMdxSource(directory: string, slug: string) {
  return fs.readFile(path.join(directory, `${slug}.mdx`), "utf8");
}

const compileProject = cache(async (slug: string): Promise<Project> => {
  const source = await readMdxSource(projectsDirectory, slug);

  // Frontmatter powers both the listing pages and the generated route metadata.
  const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    ...frontmatter,
    slug,
    featured: frontmatter.featured ?? false,
    metrics: frontmatter.metrics ?? [],
    content,
  };
});

const compileWriting = cache(async (slug: string): Promise<WritingEntry> => {
  const source = await readMdxSource(writingDirectory, slug);
  const { content, frontmatter } = await compileMDX<WritingFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    ...frontmatter,
    slug,
    featured: frontmatter.featured ?? false,
    content,
  };
});

function sortProjects(projects: ProjectSummary[]) {
  return [...projects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    return right.year - left.year;
  });
}

function sortWriting(entries: WritingSummary[]) {
  return [...entries].sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}

export async function getAllProjects(): Promise<ProjectSummary[]> {
  const slugs = await getMdxSlugs(projectsDirectory);
  const projects = await Promise.all(slugs.map((slug) => compileProject(slug)));

  const summaries = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    year: project.year,
    tags: project.tags,
    featured: project.featured,
    role: project.role,
    metrics: project.metrics,
  }));

  return sortProjects(summaries);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const slugs = await getMdxSlugs(projectsDirectory);

  if (!slugs.includes(slug)) {
    return null;
  }

  return compileProject(slug);
}

export function isCaseStudySlug(slug: string) {
  return caseStudySlugSet.has(slug);
}

export function isSystemSlug(slug: string) {
  return systemSlugSet.has(slug);
}

export async function getAllCaseStudies(): Promise<ProjectSummary[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => isCaseStudySlug(project.slug));
}

export async function getAllSystems(): Promise<ProjectSummary[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => isSystemSlug(project.slug));
}

export async function getCaseStudyBySlug(slug: string): Promise<Project | null> {
  if (!isCaseStudySlug(slug)) {
    return null;
  }

  return getProjectBySlug(slug);
}

export async function getSystemBySlug(slug: string): Promise<Project | null> {
  if (!isSystemSlug(slug)) {
    return null;
  }

  return getProjectBySlug(slug);
}

export async function getAllWriting(): Promise<WritingSummary[]> {
  const slugs = await getMdxSlugs(writingDirectory);
  const entries = await Promise.all(slugs.map((slug) => compileWriting(slug)));

  const summaries = entries.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    publishedAt: entry.publishedAt,
    tags: entry.tags,
    featured: entry.featured,
  }));

  return sortWriting(summaries);
}

export async function getWritingBySlug(slug: string): Promise<WritingEntry | null> {
  const slugs = await getMdxSlugs(writingDirectory);

  if (!slugs.includes(slug)) {
    return null;
  }

  return compileWriting(slug);
}
