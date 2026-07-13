"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { stagger, viewport } from "@/utils/motion";

// Featured 6-project grid on the home page.
export default function PortfolioPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="section bg-secondary/20 dark:bg-dark-surface/40">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Projects we're proud of"
            subtitle="A glimpse into the spaces we've reimagined — thoughtful, functional, and quietly beautiful."
          />
          <Link
            href="/portfolio"
            className="btn-outline hidden shrink-0 sm:inline-flex"
          >
            View All Projects <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/portfolio" className="btn-outline">
            View All Projects <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
