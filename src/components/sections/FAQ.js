"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/data/content";

// Elegant accordion FAQ with smooth height animation.
function Item({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10 dark:border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-ink dark:text-dark-ink sm:text-lg">
          {faq.q}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300 dark:border-white/15 ${
            isOpen ? "rotate-45 bg-primary text-white dark:bg-accent" : "text-ink dark:text-dark-ink"
          }`}
        >
          <FiPlus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-ink/65 dark:text-dark-ink/65">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-secondary/20 dark:bg-dark-surface/40">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you might want to know before we start designing together."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div>
          {faqs.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
