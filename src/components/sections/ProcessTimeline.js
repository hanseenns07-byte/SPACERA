"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/data/content";
import { getIcon } from "@/utils/icons";
import { fadeUp, stagger, viewport } from "@/utils/motion";

// Design Process Timeline — 7 steps with icons and a connecting line.
export default function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from idea to installation"
          subtitle="Seven considered steps that keep your project transparent, collaborative, and stress-free."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="group relative rounded-3xl border border-ink/5 bg-base p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg dark:border-white/5 dark:bg-dark-surface"
              >
                <span className="text-4xl font-semibold text-secondary transition-colors group-hover:text-accent dark:text-white/10">
                  {step.num}
                </span>
                <div className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink dark:text-dark-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-dark-ink/60">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
