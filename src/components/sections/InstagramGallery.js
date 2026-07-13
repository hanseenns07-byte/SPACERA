"use client";

import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { stagger, scaleIn, viewport } from "@/utils/motion";

// Instagram-style gallery pulling imagery from project galleries.
// 3 cols desktop / 2 tablet / 1 mobile.
export default function InstagramGallery() {
  // Flatten a handful of gallery images for the grid.
  const images = projects
    .flatMap((p) => p.gallery.map((g) => ({ ...g, slug: p.slug })))
    .slice(0, 6);

  const instagram = site.social.find((s) => s.icon === "instagram");

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="On Instagram"
          title="Fresh from the studio"
          subtitle="Follow along for daily small-space inspiration, behind-the-scenes, and finished reveals."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((img, i) => (
            <motion.a
              key={i}
              variants={scaleIn}
              href={instagram?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-primary/0 opacity-0 transition-all duration-500 group-hover:bg-primary/40 group-hover:opacity-100">
                <FiInstagram className="h-8 w-8 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={instagram?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiInstagram className="h-4 w-4" /> Follow @spacera.id
          </a>
        </div>
      </div>
    </section>
  );
}
