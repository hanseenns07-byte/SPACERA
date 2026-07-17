"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";

// The home page ("/") renders the fully self-contained Spacera landing (its own
// nav, footer, floating actions and scroll progress), so we skip the shared
// chrome there. Every other route keeps the standard studio chrome.
export default function SiteFrame({ children }) {
  const pathname = usePathname();
  const bare = pathname === "/";

  if (bare) return children;

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
