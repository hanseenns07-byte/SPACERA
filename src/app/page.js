import SpaceraLanding from "@/components/SpaceraLanding";

// Home — the Spacera landing page, implemented from the Spacera.dc.html
// Claude Design mockup. It is fully self-contained (its own nav, footer,
// floating actions and scroll progress), so the shared site chrome is skipped
// for this route (see SiteFrame).
export default function HomePage() {
  return <SpaceraLanding />;
}
