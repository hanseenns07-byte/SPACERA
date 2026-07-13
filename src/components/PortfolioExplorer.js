"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "@/data/projects";
import { stagger } from "@/utils/motion";

// Portfolio grid with category filters + text search.
// Masonry-style layout via CSS columns for an editorial feel.
export default function PortfolioExplorer() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = active === "All" || p.category.includes(active);
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.style.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.category.some((c) => c.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [active, query]);

  return (
    <div className="container-x section">
      {/* Controls */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "bg-primary text-white shadow-soft"
                  : "border border-ink/15 text-ink/70 hover:border-primary hover:text-primary dark:border-white/15 dark:text-dark-ink/70 dark:hover:border-accent dark:hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 dark:text-dark-ink/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-full border border-ink/15 bg-base py-3 pl-11 pr-10 text-sm text-ink outline-none transition-colors focus:border-primary dark:border-white/15 dark:bg-dark-surface dark:text-dark-ink dark:focus:border-accent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink dark:text-dark-ink/40"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <p className="mt-8 text-sm text-ink/50 dark:text-dark-ink/50">
        {filtered.length} project{filtered.length !== 1 && "s"}
      </p>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={active + query}
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6"
          >
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} className="break-inside-avoid" />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 rounded-3xl border border-dashed border-ink/15 py-20 text-center dark:border-white/15"
          >
            <p className="text-lg font-medium text-ink dark:text-dark-ink">
              No projects found
            </p>
            <p className="mt-2 text-sm text-ink/55 dark:text-dark-ink/55">
              Try a different category or search term.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
