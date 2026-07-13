import Link from "next/link";
import { FiInstagram, FiYoutube, FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import Logo from "./Logo";
import { site } from "@/data/site";

const socialIcon = {
  instagram: FiInstagram,
  youtube: FiYoutube,
  tiktok: FaTiktok,
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-base dark:border-white/10 dark:bg-dark-surface">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo className="text-ink dark:text-dark-ink" />
            <p className="mt-5 text-sm leading-relaxed text-ink/60 dark:text-dark-ink/60">
              An interior design studio helping people transform small spaces
              into beautiful, organized, comfortable, and functional
              environments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink dark:text-dark-ink">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink/60 transition-colors hover:text-primary dark:text-dark-ink/60 dark:hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink dark:text-dark-ink">
              Get in touch
            </h4>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-primary dark:text-dark-ink/60 dark:hover:text-accent"
            >
              <FiMail className="h-4 w-4" /> {site.email}
            </a>
            <div className="mt-6 flex gap-3">
              {site.social.map((s) => {
                const Icon = socialIcon[s.icon] || FiInstagram;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink/70 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-white/15 dark:text-dark-ink/70 dark:hover:border-accent dark:hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink/50 dark:border-white/10 dark:text-dark-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} SPACERA. All rights reserved.</p>
          <p>Designing better spaces, creating better experiences.</p>
        </div>
      </div>
    </footer>
  );
}
