"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Reusable inner-page hero banner with a background image and breadcrumb.
export default function PageBanner({ eyebrow, title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/35" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <span className="eyebrow text-accent">{eyebrow}</span>
          )}
          <h1 className="mt-3 text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {breadcrumb && (
            <nav className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              {breadcrumb.map((b) => (
                <span key={b.label} className="flex items-center gap-2">
                  <span>/</span>
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}
