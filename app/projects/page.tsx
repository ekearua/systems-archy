import { redirect } from "next/navigation";

export default function ProjectsRedirectPage() {
  // Preserve old bookmarks while the portfolio uses explicit content sections.
  redirect("/case-studies");
}
