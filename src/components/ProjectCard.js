"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import SmartImage from "./SmartImage";
import { fadeUp } from "@/utils/motion";

// Portfolio grid card with image-zoom-on-hover and an overlay reveal.
export default function ProjectCard({ project, className = "" }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 hover:shadow-soft-lg ${className}`}
    >
      <Link href={`/portfolio/${project.slug}`} aria-label={project.title}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <SmartImage
            src={project.cover}
            alt={project.title}
            className="h-full w-full"
            imgClassName="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />

          {/* Category chip */}
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink backdrop-blur">
            {project.category[0]}
          </span>

          {/* Info */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <FiMapPin className="h-3.5 w-3.5" /> {project.location}
            </div>
            <h3 className="mt-1.5 flex items-center gap-2 text-xl font-semibold text-white">
              {project.title}
              <FiArrowUpRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.style}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
