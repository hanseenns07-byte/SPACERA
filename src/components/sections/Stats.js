"use client";

import { stats } from "@/data/site";
import useCountUp from "@/hooks/useCountUp";

// Single animated stat tile.
function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold text-primary dark:text-accent sm:text-5xl lg:text-6xl">
        {current}
        <span>{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-ink/60 dark:text-dark-ink/60">{label}</p>
    </div>
  );
}

// Company statistics with animated counters (fire on scroll into view).
export default function Stats() {
  return (
    <section className="section bg-primary/[0.04] dark:bg-dark-surface/40">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
