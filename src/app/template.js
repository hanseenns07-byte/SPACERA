"use client";

import { motion } from "framer-motion";

// template.js re-mounts on every navigation, giving us a subtle page
// transition (fade + slight rise) across route changes.
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
