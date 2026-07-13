"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

// Full-screen image viewer. Controlled via `image` ({src, alt}) + onClose.
export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (image) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FiX className="h-6 w-6" />
          </button>
          <motion.img
            key={image.src}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            src={image.src}
            alt={image.alt || ""}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
