"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { features } from "@/data/content";
import { getIcon } from "@/utils/icons";
import { fadeUp, stagger, viewport } from "@/utils/motion";

// "Why Choose SPACERA" — 5 premium cards with hover lift.
export default function WhyChoose() {
  return (
    <section className="section bg-secondary/20 dark:bg-dark-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Everything you need to start with confidence"
          subtitle="From the first free conversation to the final install, we make premium interior design approachable and transparent."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => {
            const Icon = getIcon(f.icon);
            // Make the last card span nicely on 3-col to keep the grid balanced.
            const wide = i === features.length - 1 ? "lg:col-start-2" : "";
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={`group rounded-3xl border border-ink/5 bg-base p-8 shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-soft-lg dark:border-white/5 dark:bg-dark-base ${wide}`}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white dark:bg-accent/15 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-dark-base">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink dark:text-dark-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-dark-ink/60">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
