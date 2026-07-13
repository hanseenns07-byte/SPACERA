"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { projects } from "@/data/projects";
import { fadeUp, viewport } from "@/utils/motion";

// Home showcase of the interactive Before/After slider.
export default function BeforeAfterShowcase() {
  // Use the living-room project's comparison as the hero example.
  const project =
    projects.find((p) => p.slug === "living-room-warmth") || projects[0];

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before & after"
          title="See the transformation"
          subtitle="Drag the handle to reveal how a considered redesign changes everything — space, light, and feeling."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-14 max-w-4xl"
        >
          <BeforeAfterSlider
            before={project.beforeAfter.before}
            after={project.beforeAfter.after}
          />
          <p className="mt-6 text-center text-sm text-ink/55 dark:text-dark-ink/55">
            {project.title} — {project.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
