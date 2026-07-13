import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

// Home page — composes the studio's story from reusable section components.
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChoose />
      <Services />
      <PortfolioPreview />
      <BeforeAfterShowcase />
      <ProcessTimeline />
      <Stats />
      <Testimonials />
      <InstagramGallery />
      <FAQ />
      <CTASection />
    </>
  );
}
