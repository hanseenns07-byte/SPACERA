"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp, viewport } from "@/utils/motion";

// Large closing call-to-action with an image background.
export default function CTASection({
  eyebrow = "Let's begin",
  title = "Ready to transform your home?",
  subtitle = "Tell us about your space and goals. Your first consultation and survey are completely free.",
  primaryLabel = "Let's Discuss",
  primaryHref = "/contact",
}) {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-[2rem] px-6 py-20 text-center shadow-soft-lg sm:px-12 lg:py-28"
        >
          {/* Background image + scrim */}
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
            alt="Warm minimalist interior"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/55" />

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-accent">{eyebrow}</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">{subtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel} <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-light">
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
