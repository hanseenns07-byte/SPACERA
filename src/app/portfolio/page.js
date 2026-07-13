import PageBanner from "@/components/PageBanner";
import PortfolioExplorer from "@/components/PortfolioExplorer";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore SPACERA's portfolio of small-space interior design projects — workspaces, bedrooms, living rooms, kitchens, and apartments in warm Japandi style.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our work"
        title="Portfolio"
        subtitle="A collection of small spaces reimagined into functional, beautiful homes."
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
        breadcrumb={[{ label: "Portfolio" }]}
      />
      <PortfolioExplorer />
      <CTASection
        title="Have a space in mind?"
        subtitle="Let's turn your small space into something you love coming home to."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
