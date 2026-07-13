"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/content";
import { getIcon } from "@/utils/icons";
import { fadeUp, stagger, viewport } from "@/utils/motion";

// "Our Services" — 6 service cards.
export default function Services() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our services"
          title="A complete design service, end to end"
          subtitle="Whatever your space needs, we cover every stage — from concept to the finishing touches."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative bg-base p-8 transition-colors duration-500 hover:bg-secondary/25 dark:bg-dark-base dark:hover:bg-dark-surface"
              >
                <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110 dark:text-accent" />
                <h3 className="mt-6 text-lg font-semibold text-ink dark:text-dark-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-dark-ink/60">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
