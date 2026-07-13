"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/utils/motion";

// Consistent section header: eyebrow label + title + optional subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`flex flex-col ${alignment} max-w-2xl ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-ink/65 dark:text-dark-ink/65">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
