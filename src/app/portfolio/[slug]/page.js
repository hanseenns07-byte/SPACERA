import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects, getProject, getRelatedProjects } from "@/data/projects";
import { site } from "@/data/site";

// Pre-render every project page at build time (fast + SEO-friendly).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Dynamic per-project SEO metadata + Open Graph.
export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | SPACERA`,
      description: project.excerpt,
      images: [{ url: project.cover, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | SPACERA`,
      description: project.excerpt,
      images: [project.cover],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(params.slug);

  // JSON-LD structured data for this specific project.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    image: project.cover,
    creator: { "@type": "Organization", name: "SPACERA", url: site.domain },
    locationCreated: project.location,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} related={related} />
    </>
  );
}
