"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/utils/motion";

// Lightweight scroll-reveal wrapper. Wrap any block to fade + rise it into view.
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
