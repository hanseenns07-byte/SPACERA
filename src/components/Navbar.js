"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo";
import useTheme from "@/hooks/useTheme";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle, mounted } = useTheme();

  // Transparent while at the very top of the page (over the hero),
  // solid + blurred once the user scrolls. Home page has a hero; other
  // pages have a banner, so the same behaviour reads well everywhere.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-base/80 shadow-soft backdrop-blur-xl dark:bg-dark-base/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="SPACERA home"
          className="text-ink transition-colors dark:text-dark-ink"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    active
                      ? "text-primary dark:text-accent"
                      : "text-ink/80 hover:text-primary dark:text-dark-ink/80 dark:hover:text-accent"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 place-items-center rounded-full text-ink/80 transition-colors hover:bg-ink/5 dark:text-dark-ink/80 dark:hover:bg-white/5"
            >
              {theme === "dark" ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
          )}

          <Link href="/contact" className="btn-primary hidden lg:inline-flex">
            Book Consultation
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 dark:text-dark-ink dark:hover:bg-white/5 md:hidden"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-ink/5 bg-base/95 backdrop-blur-xl dark:border-white/5 dark:bg-dark-base/95 md:hidden"
          >
            <ul className="container-x flex flex-col py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-medium text-ink dark:text-dark-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Book Free Consultation
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
