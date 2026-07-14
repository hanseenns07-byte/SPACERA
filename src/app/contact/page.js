import Link from "next/link";
import {
  FiMail,
  FiInstagram,
  FiYoutube,
  FiClock,
  FiZap,
  FiPhone,
} from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with SPACERA to start your small-space interior design project. Free consultation and survey — we respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const socialIcon = { instagram: FiInstagram, youtube: FiYoutube, tiktok: FaTiktok };

export default function ContactPage() {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  // Elegant contact cards.
  const cards = [
    {
      icon: FiPhone,
      label: "Phone / WhatsApp",
      value: site.phone,
      href: waLink,
    },
    {
      icon: FiMail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    ...site.social.map((s) => ({
      icon: socialIcon[s.icon] || FiInstagram,
      label: s.name,
      value: s.handle,
      href: s.url,
    })),
    {
      icon: FiClock,
      label: "Business Hours",
      value: "Mon–Fri · 09:00–18:00",
      href: null,
    },
    {
      icon: FiZap,
      label: "Response Time",
      value: site.responseTime,
      href: null,
    },
  ];

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's Build Your Dream Space"
        subtitle="Tell us about your space — your first consultation and survey are completely free."
        image="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=2000&q=80"
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: contact info */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="heading mt-3 text-3xl leading-tight sm:text-4xl">
                We&apos;d love to hear from you
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70 dark:text-dark-ink/70">
                Reach out through any channel below, or send us a message using
                the form. We typically reply within 24 hours.
              </p>
            </Reveal>

            {/* Contact cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => {
                const Inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-ink/5 bg-base p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg dark:border-white/5 dark:bg-dark-surface">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-ink/45 dark:text-dark-ink/45">
                        {c.label}
                      </p>
                      <p className="mt-0.5 truncate font-medium text-ink dark:text-dark-ink">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={c.label} delay={i * 0.05}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaWhatsapp className="h-4 w-4" /> Contact via WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="btn-outline">
                <FiMail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/5 bg-base p-6 shadow-soft-lg dark:border-white/5 dark:bg-dark-surface sm:p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-ink dark:text-dark-ink">
                Send an inquiry
              </h3>
              <p className="mt-1.5 text-sm text-ink/60 dark:text-dark-ink/60">
                Fields marked * are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
