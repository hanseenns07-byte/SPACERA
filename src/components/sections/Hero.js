"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

// Full-screen hero with a parallax background and staggered fade-in copy.
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Gentle parallax: background drifts down slower than the scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Japandi interior living space by SPACERA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Warm gradient scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-x pt-28"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-white/85"
          >
            <span className="h-px w-10 bg-accent" />
            Japandi · Minimalist · Functional
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Designing Better Spaces,
            <br />
            Creating Better Experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Helping people maximize small spaces through realistic interior
            design, smart layouts, and functional furniture.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/portfolio" className="btn-primary">
              View Portfolio <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-light">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
