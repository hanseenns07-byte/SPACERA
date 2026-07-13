"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiMessageSquare } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import { testimonials } from "@/data/content";

// Elegant testimonial slider.
export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kind words"
          title="Loved by the people we design for"
          subtitle="Real feedback from clients whose small spaces now work harder — and feel better."
        />

        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="flex h-full flex-col rounded-3xl border border-ink/5 bg-base p-8 shadow-soft dark:border-white/5 dark:bg-dark-surface">
                  <FiMessageSquare className="h-8 w-8 text-secondary dark:text-accent/40" />
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/75 dark:text-dark-ink/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <StarRating rating={t.rating} className="mt-6" />
                  <figcaption className="mt-4">
                    <p className="font-semibold text-ink dark:text-dark-ink">
                      {t.name}
                    </p>
                    <p className="text-sm text-ink/55 dark:text-dark-ink/55">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
