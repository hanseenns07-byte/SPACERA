"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiHome,
  FiLayers,
  FiMaximize,
  FiCalendar,
  FiArrowLeft,
} from "react-icons/fi";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import Lightbox from "./Lightbox";
import ProjectGallery from "./ProjectGallery";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ProjectCard from "./ProjectCard";
import StarRating from "./StarRating";
import SectionHeading from "./SectionHeading";
import CTASection from "./sections/CTASection";
import { stagger, viewport } from "@/utils/motion";

// Small labelled block used in the overview meta grid.
function Meta({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-ink/45 dark:text-dark-ink/45">
          {label}
        </p>
        <p className="mt-0.5 font-medium text-ink dark:text-dark-ink">{value}</p>
      </div>
    </div>
  );
}

export default function ProjectDetail({ project, related }) {
  const [lightbox, setLightbox] = useState(null);
  const openZoom = (src, alt) => setLightbox({ src, alt });

  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-14 pt-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />
        </div>
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <FiArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.category.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-white/75">
              <FiMapPin className="h-4 w-4" /> {project.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview + meta */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Project overview</span>
            <p className="mt-4 text-lg leading-relaxed text-ink/75 dark:text-dark-ink/75">
              {project.overview}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-ink dark:text-dark-ink">
                  Design Challenges
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-dark-ink/65">
                  {project.challenges}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink dark:text-dark-ink">
                  Design Solutions
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-dark-ink/65">
                  {project.solutions}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/5 bg-base p-8 shadow-soft dark:border-white/5 dark:bg-dark-surface">
              <div className="grid gap-6">
                <Meta icon={FiMapPin} label="Location" value={project.location} />
                <Meta icon={FiHome} label="Project Type" value={project.category[0]} />
                <Meta icon={FiLayers} label="Design Style" value={project.style} />
                <Meta icon={FiMaximize} label="Area Size" value={project.area} />
                <Meta icon={FiCalendar} label="Year" value={project.year} />
              </div>

              {/* Material palette */}
              <div className="mt-8 border-t border-ink/10 pt-6 dark:border-white/10">
                <p className="text-xs uppercase tracking-wider text-ink/45 dark:text-dark-ink/45">
                  Material Palette
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.materials.map((m) => (
                    <div key={m.name} className="flex items-center gap-2">
                      <span
                        className="h-7 w-7 rounded-full ring-1 ring-inset ring-black/10"
                        style={{ backgroundColor: m.hex }}
                      />
                      <span className="text-xs text-ink/65 dark:text-dark-ink/65">
                        {m.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Moodboard */}
      {project.moodboard?.length > 0 && (
      <section className="bg-secondary/20 py-20 dark:bg-dark-surface/40 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="The direction" title="Moodboard" />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid gap-5 sm:grid-cols-3"
          >
            {project.moodboard.map((src, i) => (
              <SmartImage
                key={i}
                src={src}
                alt={`${project.title} moodboard ${i + 1}`}
                className="aspect-[3/4] rounded-3xl shadow-soft"
                imgClassName="object-cover"
                zoom
                onZoom={openZoom}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* Before & After */}
      {project.beforeAfter && (
        <section className="section">
          <div className="container-x">
            <SectionHeading
              eyebrow="Transformation"
              title="Before & After"
              subtitle="Drag the handle to compare the space before and after our redesign."
            />
            <div className="mx-auto mt-12 max-w-4xl">
              <BeforeAfterSlider
                before={project.beforeAfter.before}
                after={project.beforeAfter.after}
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-secondary/20 py-20 dark:bg-dark-surface/40 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Image gallery" title="Inside the space" />
        </div>
        <div className="mt-12 pl-6 sm:pl-8 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
          <ProjectGallery images={project.gallery} onZoom={openZoom} />
        </div>
      </section>

      {/* 3D Renders */}
      {project.renders?.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeading
              eyebrow="Visualization"
              title="3D Render Gallery"
              subtitle="Photorealistic renders produced before a single change was made on site."
            />
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-12 grid gap-5 md:grid-cols-2"
            >
              {project.renders.map((r, i) => (
                <SmartImage
                  key={i}
                  src={r.src}
                  alt={r.alt}
                  className="aspect-[16/11] rounded-3xl shadow-soft"
                  imgClassName="object-cover"
                  zoom
                  onZoom={openZoom}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Client testimonial */}
      {project.testimonial && (
        <section className="bg-primary/[0.04] py-20 dark:bg-dark-surface/40 md:py-24">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center">
              <StarRating
                rating={project.testimonial.rating}
                className="justify-center"
              />
              <blockquote className="mt-6 text-2xl font-light leading-relaxed text-ink dark:text-dark-ink sm:text-3xl sm:leading-[1.4]">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-ink dark:text-dark-ink">
                {project.testimonial.name}
              </p>
              <p className="text-sm text-ink/55 dark:text-dark-ink/55">
                {project.testimonial.role}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related projects */}
      {related?.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="Keep exploring" title="Related projects" />
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <CTASection
        title="Inspired by this project?"
        subtitle="Let's create something just as thoughtful for your own space."
        primaryLabel="Start Your Project"
      />

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </article>
  );
}
