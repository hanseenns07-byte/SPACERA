import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/sections/Stats";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";
import { getIcon } from "@/utils/icons";
import { mission } from "@/data/content";

export const metadata = {
  title: "About",
  description:
    "SPACERA is an interior inspiration and design studio helping people beautify and maximize small spaces through realistic, functional, and practical design solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const Check = getIcon("check");

  return (
    <>
      <PageBanner
        eyebrow="Our studio"
        title="About SPACERA"
        subtitle="An interior inspiration and design studio for beautiful, functional small spaces."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80"
        breadcrumb={[{ label: "About" }]}
      />

      {/* Company Story */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="heading mt-3 text-3xl leading-tight sm:text-4xl">
              Comfortable spaces don&apos;t have to be big or complicated.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70 dark:text-dark-ink/70">
              <p>
                SPACERA is an interior inspiration and design studio that helps
                people beautify and maximize small spaces through realistic,
                functional, and practical design solutions.
              </p>
              <p>
                We believe comfortable spaces don&apos;t have to be expensive,
                large, or complicated.
              </p>
              <p>
                Through smart layouts, proportional furniture, harmonious
                colors, and carefully selected materials, every room can become
                more functional and aesthetically pleasing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80"
                alt="SPACERA studio interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-secondary/25 py-20 dark:bg-dark-surface/40 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our vision</span>
            <p className="mt-6 text-2xl font-light leading-relaxed text-ink dark:text-dark-ink sm:text-3xl lg:text-[2.25rem] lg:leading-[1.35]">
              &ldquo;To become a trusted interior inspiration platform that
              helps everyone create beautiful, organized, comfortable, and
              functional living spaces through realistic and practical
              design.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission — cards */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our mission"
            title="What drives us every day"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mission.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-ink/5 bg-base p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg dark:border-white/5 dark:bg-dark-surface">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 text-[15px] font-medium leading-relaxed text-ink dark:text-dark-ink">
                    {m}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment — image background */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=2000&q=80"
          alt="Warm functional interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/50" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-accent">Our commitment</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Limited space should never limit comfort.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              SPACERA exists to design practical solutions that make every
              square meter more meaningful.
            </p>
          </Reveal>
        </div>
      </section>

      <Stats />
      <ProcessTimeline />
      <CTASection
        title="Let's design your space together"
        primaryLabel="Start Your Project"
      />
    </>
  );
}
