"use client";

import Image from "next/image";
import { useState } from "react";

// next/image wrapper that adds:
//  - a shimmer skeleton until the image finishes loading
//  - lazy loading by default (handled by next/image)
//  - optional click-to-zoom (opens a lightbox) via the `zoom` prop
export default function SmartImage({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  imgClassName = "",
  priority = false,
  zoom = false,
  onZoom,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        zoom ? "cursor-zoom-in" : ""
      } ${className}`}
      onClick={zoom && onZoom ? () => onZoom(src, alt) : undefined}
    >
      {!loaded && <div className="skeleton absolute inset-0" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`transition-[opacity,transform] duration-700 ease-out-expo ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
