import { site } from "@/data/site";
import { projects } from "@/data/projects";

// Generates /sitemap.xml at build/runtime from static routes + project slugs.
export default function sitemap() {
  const base = site.domain;
  const now = new Date();

  const routes = ["", "/about", "/portfolio", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
