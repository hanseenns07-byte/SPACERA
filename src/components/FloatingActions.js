"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { site } from "@/data/site";

// Bottom-right floating actions:
//  - Always-visible WhatsApp button
//  - Sticky "Book Free Consultation" CTA that appears after a little scroll
export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-soft-lg transition-transform hover:-translate-y-0.5"
            >
              <FiCalendar className="h-4 w-4" />
              <span className="hidden sm:inline">Book Free Consultation</span>
              <span className="sm:hidden">Consultation</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-transform hover:scale-105"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <FaWhatsapp className="relative h-7 w-7" />
      </a>
    </div>
  );
}
