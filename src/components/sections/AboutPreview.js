"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SmartImage from "@/components/SmartImage";
import { fadeUp, viewport } from "@/utils/motion";

// Short "about" intro with an image beside the text.
export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <SmartImage
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
            alt="SPACERA Japandi interior styling"
            className="aspect-[4/5] rounded-3xl shadow-soft-lg"
            imgClassName="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-base p-5 shadow-soft-lg dark:bg-dark-surface sm:-right-6">
            <p className="text-3xl font-semibold text-primary dark:text-accent">
              25+
            </p>
            <p className="text-xs text-ink/60 dark:text-dark-ink/60">
              Spaces transformed
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">Who we are</span>
          <h2 className="heading mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Small spaces, thoughtfully reimagined.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 dark:text-dark-ink/70">
            SPACERA is an interior design studio and inspiration platform that
            helps people transform small spaces into beautiful, organized,
            comfortable, and functional environments.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-dark-ink/70">
            We believe comfortable spaces don&apos;t have to be expensive, large,
            or complicated — every room can become more functional and
            aesthetically pleasing.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-accent"
          >
            More about SPACERA
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
