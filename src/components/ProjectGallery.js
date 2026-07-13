"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Gallery slider used on project detail pages. Clicking a slide opens the
// lightbox via the provided onZoom callback.
export default function ProjectGallery({ images = [], onZoom }) {
  if (!images.length) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: 1.4 }, 1024: { slidesPerView: 1.6 } }}
      className="!pb-12"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <button
            onClick={() => onZoom?.(img.src, img.alt)}
            className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-3xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
