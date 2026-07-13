"use client";

import { useCallback, useRef, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// Interactive before/after comparison slider.
// Drag the handle (mouse or touch) to reveal the "after" image over "before".
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    },
    [setFromClientX]
  );

  const startDrag = () => {
    dragging.current = true;
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchend", stopDrag);
  };

  return (
    <div
      ref={containerRef}
      onClick={(e) => setFromClientX(e.clientX)}
      className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl shadow-soft-lg ${className}`}
    >
      {/* After (base layer) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeLabel}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Drag to compare"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-soft-lg"
        >
          <FiChevronsLeft className="h-4 w-4" />
          <FiChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
