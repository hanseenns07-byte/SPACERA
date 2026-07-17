"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import useTheme from "@/hooks/useTheme";
import { site } from "@/data/site";

/*
 * SpaceraLanding — a faithful implementation of the Spacera.dc.html Claude
 * Design mockup: a self-contained, single-page studio experience with its own
 * fixed navigation, scroll-progress bar, animated statistics, drag before/after
 * slider, filterable portfolio, FAQ accordion, and floating actions.
 *
 * The visual language (warm Japandi palette, Cormorant Garamond display serif,
 * soft shadows, scroll-reveal) lives in the scoped `[data-app]` stylesheet
 * below so it never leaks into the rest of the app.
 */

// ── Small inline-SVG helper (mirrors the mockup's line-icon set) ────────────
function Ico({ d, size = 30, sw = 1.4, fill = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      {d.map((it, i) =>
        typeof it === "string" ? (
          <path key={i} d={it} />
        ) : it.c ? (
          <circle key={i} cx={it.c[0]} cy={it.c[1]} r={it.c[2]} />
        ) : (
          <rect
            key={i}
            x={it.r[0]}
            y={it.r[1]}
            width={it.r[2]}
            height={it.r[3]}
            rx={it.r[4]}
          />
        )
      )}
    </svg>
  );
}

const IC = {
  arrow: { d: ["M4 12h15", "M13 6l6 6-6 6"], size: 17, sw: 1.6 },
  drag: { d: ["M8 8l-4 4 4 4", "M16 8l4 4-4 4"], size: 20, sw: 1.7 },
  plus: { d: ["M12 5v14", "M5 12h14"], size: 20, sw: 1.6 },
  sun: {
    d: [
      { c: [12, 12, 4] },
      "M12 2v2",
      "M12 20v2",
      "M2 12h2",
      "M20 12h2",
      "M5 5l1.4 1.4",
      "M17.6 17.6L19 19",
      "M19 5l-1.4 1.4",
      "M6.4 17.6L5 19",
    ],
    size: 18,
    sw: 1.5,
  },
  moon: { d: ["M21 12.8A8.5 8.5 0 1111.2 3a6.6 6.6 0 009.8 9.8z"], size: 17, sw: 1.5 },
  calendar: {
    d: [{ r: [3, 4.5, 18, 16, 2] }, "M3 9h18", "M8 2.5v4", "M16 2.5v4"],
    size: 17,
    sw: 1.5,
  },
  chat: {
    d: [
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    ],
  },
  ruler: {
    d: ["M4 8l4-4 12 12-4 4z", "M8 8l1.5 1.5", "M11 11l1.5 1.5", "M14 14l1.5 1.5"],
  },
  coin: {
    d: [
      { c: [12, 12, 9] },
      "M12 7v10",
      "M9.5 9.2c0-1 1-1.7 2.5-1.7s2.5.7 2.5 1.7-1 1.6-2.5 1.6-2.5.7-2.5 1.7 1 1.7 2.5 1.7 2.5-.7 2.5-1.7",
    ],
  },
  pen: { d: ["M12 20h9", "M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"] },
  eye: { d: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z", { c: [12, 12, 3] }] },
  room: { d: ["M3 21V9l9-6 9 6v12", "M9 21v-6h6v6", "M3 21h18"] },
  sofa: {
    d: [
      "M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3",
      "M2 12a2 2 0 012 2v3h16v-3a2 2 0 012-2",
      "M4 17v2",
      "M20 17v2",
    ],
  },
  grid: {
    d: [
      { r: [3, 3, 7, 7, 1] },
      { r: [14, 3, 7, 7, 1] },
      { r: [3, 14, 7, 7, 1] },
      { r: [14, 14, 7, 7, 1] },
    ],
  },
  cube: { d: ["M21 8l-9-5-9 5 9 5 9-5z", "M3 8v8l9 5", "M21 8v8l-9 5", "M12 13v8"] },
  swatch: {
    d: [
      "M3 3h7v13a3.5 3.5 0 11-7 0z",
      "M10 8l5-5 4 4-5 5",
      "M6.5 16.5h.01",
      "M10 16h11v3a2 2 0 01-2 2h-7",
    ],
  },
};

function Stars() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.2l1.4-6.8L2.2 9.7l6.9-.7z" />
        </svg>
      ))}
    </>
  );
}

function WaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.41 1.3-1.94 1.34-.53.05-.53.42-3.34-.7-2.81-1.11-4.55-3.99-4.69-4.18-.14-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.27.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.12.07.63-.17 1.31z" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ── Content ─────────────────────────────────────────────────────────────────
const IMG = "/portfolio";

const HERO_IMG = `${IMG}/ruang-tamu-greenlake/hero.jpg`;
const ABOUT_IMG = `${IMG}/kamar-kosambi-baru/after.jpg`;
const ABOUT_IMG2 = `${IMG}/workspace-japandi/gallery-1.jpg`;
const BEFORE_IMG = `${IMG}/ruang-tamu-greenlake/before.jpg`;
const AFTER_IMG = `${IMG}/ruang-tamu-greenlake/after.jpg`;
const CTA_IMG = `${IMG}/rumah-park-serpong/hero.jpg`;

const STATS = [
  { target: 25, suffix: "+", label: "Completed Projects" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 100, suffix: "%", label: "Custom Design" },
  { text: "3D", label: "Visualization Included" },
];

const WHY = [
  { ic: "chat", n: "01", title: "Free Consultation", desc: "Talk through your ideas, needs and budget with our designers at no cost." },
  { ic: "ruler", n: "02", title: "Free Survey", desc: "We measure and study your actual space so every design is precise and realistic." },
  { ic: "coin", n: "03", title: "Budget Planning", desc: "A clear, honest budget mapped to priorities — no surprises along the way." },
  { ic: "pen", n: "04", title: "Customized Design", desc: "Layouts and furniture tailored to how you actually live in your home." },
  { ic: "eye", n: "05", title: "Transparent Process", desc: "You see every stage — concept, 3D, revision — with full clarity and control." },
];

const SERVICES = [
  { ic: "room", title: "Interior Design", desc: "Complete interior concepts that balance beauty, comfort and function." },
  { ic: "sofa", title: "Furniture Planning", desc: "Proportional, purposeful furniture selected and arranged for real living." },
  { ic: "grid", title: "Space Optimization", desc: "Smart layouts that make every square metre work harder and feel larger." },
  { ic: "cube", title: "3D Visualization", desc: "Photoreal 3D renders so you see the result before anything is built." },
  { ic: "swatch", title: "Material Recommendation", desc: "Curated finishes and materials chosen for durability, feel and budget." },
  { ic: "coin", title: "Budget Planning", desc: "Transparent costing that keeps your project on track and stress-free." },
];

const PROCESS = [
  { n: "01", title: "Free Consultation", desc: "We listen to your needs, lifestyle and budget." },
  { n: "02", title: "Site Survey", desc: "Accurate measurement and study of your space." },
  { n: "03", title: "Concept Design", desc: "Layouts, mood and material direction take shape." },
  { n: "04", title: "3D Visualization", desc: "Photoreal renders to preview the final result." },
  { n: "05", title: "Design Revision", desc: "We refine every detail until it feels right." },
  { n: "06", title: "Production", desc: "Custom furniture and finishes are crafted." },
  { n: "07", title: "Installation", desc: "We install and style your finished space." },
];

const FILTERS = ["All", "Workspace", "Bedroom", "Living Room", "Small Space"];

const PROJECTS = [
  { title: "Workspace Japandi", location: "Jakarta", style: "Japandi Minimalist", cats: ["Workspace", "Small Space"], img: `${IMG}/workspace-japandi/cover.jpg` },
  { title: "Kamar — Kosambi Baru", location: "Jakarta Barat", style: "Japandi Calm", cats: ["Bedroom", "Small Space"], img: `${IMG}/kamar-kosambi-baru/cover.jpg` },
  { title: "Kamar Fungsional", location: "Jakarta", style: "Functional Minimalist", cats: ["Bedroom", "Small Space"], img: `${IMG}/kamar-fungsional/cover.jpg` },
  { title: "Ruang Tamu — Greenlake", location: "Tangerang", style: "Modern Japandi", cats: ["Living Room"], img: `${IMG}/ruang-tamu-greenlake/cover.jpg` },
  { title: "Rumah 3.3 × 12m", location: "Park Serpong", style: "Functional Japandi", cats: ["Living Room", "Small Space"], img: `${IMG}/rumah-park-serpong/cover.jpg` },
];

const INSTAGRAM = [
  `${IMG}/workspace-japandi/gallery-2.jpg`,
  `${IMG}/kamar-kosambi-baru/gallery-1.jpg`,
  `${IMG}/kamar-fungsional/gallery-1.jpg`,
  `${IMG}/ruang-tamu-greenlake/gallery-1.jpg`,
  `${IMG}/rumah-park-serpong/gallery-1.jpg`,
  `${IMG}/workspace-japandi/gallery-3.jpg`,
];

const TESTIMONIALS = [
  { quote: "They turned our cramped apartment into somewhere we love coming home to. Every corner has a purpose now.", name: "Alya Rahmawati", role: "Apartment, Jakarta", initial: "A" },
  { quote: "Honest budgeting and a process we could actually follow. The 3D renders matched the final room exactly.", name: "Bramanta Wijaya", role: "Townhouse, Bandung", initial: "B" },
  { quote: "Our little studio feels twice the size. Warm, calm and so well organised — beyond what we imagined.", name: "Nadine Prasetyo", role: "Studio, Tangerang", initial: "N" },
];

const FAQS = [
  { q: "How much does an interior design project cost?", a: "It depends on scope, area and materials. After a free consultation and survey we prepare a transparent budget mapped to your priorities — no hidden costs." },
  { q: "How long does a project usually take?", a: "A typical small-space project runs 4–10 weeks from concept to installation, depending on custom furniture and site conditions." },
  { q: "Can I request design service only?", a: "Yes. You can take just the concept, 3D visualization and drawings, and build with your own contractor if you prefer." },
  { q: "Do you also build custom furniture?", a: "We do. Proportional, made-to-measure furniture is one of the most effective ways to maximise a small space." },
  { q: "Is the consultation really free?", a: "Absolutely. The first consultation and initial survey are free, with no obligation to continue." },
  { q: "Do you work outside Jakarta?", a: "Yes — we work across Greater Jakarta and other cities. Reach out and we’ll confirm availability for your location." },
];

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function SpaceraLanding() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [baPos, setBaPos] = useState(50);
  const [statP, setStatP] = useState(0);

  const progressRef = useRef(null);
  const statsRef = useRef(null);
  const baRef = useRef(null);
  const draggingRef = useRef(false);
  const statsDoneRef = useRef(false);

  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  // Scroll: progress bar + nav state + fire the stat count-up when in view.
  useEffect(() => {
    let rafId;
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
      }
      setScrolled(st > 60);
      if (!statsDoneRef.current && statsRef.current) {
        const r = statsRef.current.getBoundingClientRect();
        if (r.top < window.innerHeight - 80) {
          statsDoneRef.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            setStatP(1 - Math.pow(1 - p, 3));
            if (p < 1) rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Before/after drag (pointer, works for mouse + touch).
  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current || !baRef.current) return;
      const r = baRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      setBaPos(pct);
    };
    const onUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const onBaDown = (e) => {
    draggingRef.current = true;
    document.body.style.cursor = "ew-resize";
    if (baRef.current) {
      const r = baRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let pct = ((clientX - r.left) / r.width) * 100;
      setBaPos(Math.max(2, Math.min(98, pct)));
    }
  };

  const visibleProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(filter));

  return (
    <div data-app data-theme={theme} style={{ position: "relative", overflowX: "clip" }}>
      <style>{CSS}</style>

      {/* scroll progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 120, background: "transparent", pointerEvents: "none" }}>
        <div ref={progressRef} style={{ height: "100%", width: "0%", background: "linear-gradient(90deg,var(--gold),var(--gold-deep))" }} />
      </div>

      {/* NAV */}
      <header data-nav data-scrolled={scrolled ? "1" : "0"} className="sp-nav">
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, color: "inherit" }}>
          <Logo showText={false} className="[&_svg]:h-9 [&_svg]:w-9" />
          <span style={{ fontWeight: 600, letterSpacing: ".42em", fontSize: 18, textIndent: ".42em" }}>SPACERA</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "clamp(20px,3vw,44px)" }}>
          <span className="sp-navlinks" style={{ display: "flex", alignItems: "center", gap: "clamp(20px,3vw,44px)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="sp-navlink" href={l.href} style={{ color: "inherit", fontSize: 14, fontWeight: 400, letterSpacing: ".03em" }}>
                {l.label}
              </a>
            ))}
          </span>
          <button onClick={toggle} aria-label="Toggle theme" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1px solid currentColor", background: "transparent", color: "inherit", cursor: "pointer" }}>
            <Ico {...(dark ? IC.moon : IC.sun)} />
          </button>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", borderRadius: 999, background: "var(--gold-deep)", color: "#fff", fontSize: 13, fontWeight: 500, letterSpacing: ".04em" }}>Get a Quote</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img src={HERO_IMG} alt="Japandi living room interior by Spacera" fetchPriority="high" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,17,13,.42) 0%, rgba(20,17,13,.12) 40%, rgba(20,17,13,.72) 100%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,5vw,72px) clamp(60px,9vh,120px)", color: "#F7F3EC" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26, animation: "sp-fade 1s .1s both" }}>
              <span style={{ width: 44, height: 1, background: "var(--gold)" }} />
              <span style={{ fontSize: 12, letterSpacing: ".34em", textTransform: "uppercase", color: "#EDE3D2" }}>Japandi Interior Studio</span>
            </div>
            <h1 className="sp-serif" style={{ fontWeight: 500, fontSize: "clamp(42px,7vw,84px)", lineHeight: 1.02, letterSpacing: "-.02em", margin: "0 0 26px", textWrap: "balance", animation: "sp-rise 1s .18s both" }}>
              Designing better spaces,<br />creating better <em style={{ fontStyle: "italic", color: "var(--gold)" }}>experiences</em>.
            </h1>
            <p style={{ maxWidth: 540, fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.7, color: "#E7DCCB", margin: "0 0 40px", animation: "sp-rise 1s .32s both" }}>
              Helping people maximise small spaces through realistic interior design, smart layouts and functional furniture.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, animation: "sp-rise 1s .46s both" }}>
              <a href="#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 999, background: "var(--gold-deep)", color: "#fff", fontSize: 14, fontWeight: 500, letterSpacing: ".03em" }}>View Portfolio <Ico {...IC.arrow} /></a>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", padding: "16px 32px", borderRadius: 999, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.5)", color: "#fff", fontSize: 14, fontWeight: 500, letterSpacing: ".03em", backdropFilter: "blur(6px)" }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ background: "var(--gold-deep)", color: "#F7F3EC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(48px,6vw,72px) clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "40px 24px" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="sp-serif" style={{ fontSize: "clamp(46px,5vw,68px)", lineHeight: 1, fontWeight: 600, letterSpacing: "-.02em" }}>
                {s.text ? s.text : Math.round(s.target * statP) + s.suffix}
              </div>
              <div style={{ marginTop: 12, fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#E4D6BF" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,10vw,150px) clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
        <div className="sp-rise" style={{ position: "relative" }}>
          <div style={{ aspectRatio: "4/5", borderRadius: 6, overflow: "hidden" }}>
            <img src={ABOUT_IMG} alt="Calm Japandi bedroom" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", right: "-6%", bottom: "-8%", width: "52%", aspectRatio: "1", borderRadius: 6, overflow: "hidden", border: "10px solid var(--bg)", boxShadow: "var(--shadow)" }}>
            <img src={ABOUT_IMG2} alt="Interior detail" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <div className="sp-rise">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "var(--gold)" }} />
            <span className="sp-eyebrow">About Spacera</span>
          </div>
          <h2 className="sp-serif sp-h2" style={{ marginBottom: 26, textWrap: "balance" }}>Small spaces, thoughtfully transformed.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--ink2)", margin: "0 0 22px", maxWidth: "56ch" }}>SPACERA is an interior design studio and inspiration platform that helps people transform small spaces into beautiful, organized, comfortable and functional environments.</p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--ink2)", margin: "0 0 34px", maxWidth: "56ch" }}>We believe comfortable spaces don&apos;t have to be expensive, large or complicated — every room can become more meaningful through smart layouts and carefully chosen materials.</p>
          <a href="#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, letterSpacing: ".04em", color: "var(--gold-deep)", borderBottom: "1px solid var(--gold)", paddingBottom: 6 }}>See our work <Ico {...IC.arrow} /></a>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
          <div className="sp-rise" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 70px" }}>
            <span className="sp-eyebrow">Why Spacera</span>
            <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>Reasons clients trust us</h2>
          </div>
          <div className="sp-rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden" }}>
            {WHY.map((w) => (
              <div key={w.n} className="sp-lift" style={{ background: "var(--surface)", padding: "44px 32px" }}>
                <span style={{ color: "var(--gold)" }}><Ico {...IC[w.ic]} /></span>
                <div className="sp-serif" style={{ fontSize: 19, color: "var(--ink3)", marginTop: 26 }}>{w.n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "8px 0 12px", letterSpacing: ".01em" }}>{w.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink2)", margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
        <div className="sp-rise" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 64 }}>
          <div>
            <span className="sp-eyebrow">What we do</span>
            <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>Our services</h2>
          </div>
          <p style={{ maxWidth: "38ch", fontSize: 15, lineHeight: 1.7, color: "var(--ink2)", margin: 0 }}>End-to-end design for homes and small spaces — from first concept to the finished, installed room.</p>
        </div>
        <div className="sp-rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {SERVICES.map((s) => (
            <div key={s.title} className="sp-lift" style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, padding: "40px 34px" }}>
              <span style={{ color: "var(--gold)" }}><Ico {...IC[s.ic]} /></span>
              <h3 style={{ fontSize: 19, fontWeight: 600, margin: "24px 0 12px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ink2)", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
          <div className="sp-rise" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}>
            <span className="sp-eyebrow">Transformation</span>
            <h2 className="sp-serif sp-h2" style={{ margin: "16px 0 12px" }}>Before &amp; after</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink2)", margin: 0 }}>Drag the handle to reveal how the space was reimagined.</p>
          </div>
          <div ref={baRef} className="sp-rise" style={{ position: "relative", maxWidth: 1040, margin: "0 auto", aspectRatio: "16/10", borderRadius: 10, overflow: "hidden", containerType: "inline-size", boxShadow: "var(--shadow)", userSelect: "none", touchAction: "none" }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <img src={AFTER_IMG} alt="After transformation" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", top: 16, right: 16, zIndex: 3, padding: "7px 16px", borderRadius: 999, background: "rgba(20,17,13,.55)", color: "#F7F3EC", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", backdropFilter: "blur(6px)" }}>After</div>
            <div style={{ position: "absolute", inset: 0, width: `${baPos}%`, overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, width: "100cqw", height: "100%" }}>
                <img src={BEFORE_IMG} alt="Before transformation" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", top: 16, left: 16, zIndex: 3, padding: "7px 16px", borderRadius: 999, background: "rgba(20,17,13,.55)", color: "#F7F3EC", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", backdropFilter: "blur(6px)" }}>Before</div>
            </div>
            <div onPointerDown={onBaDown} style={{ position: "absolute", top: 0, bottom: 0, left: `${baPos}%`, zIndex: 4, width: 44, marginLeft: -22, cursor: "ew-resize", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, marginLeft: -1, background: "#F7F3EC" }} />
              <div style={{ position: "relative", width: 46, height: 46, borderRadius: "50%", background: "#F7F3EC", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,.32)" }}><Ico {...IC.drag} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
        <div className="sp-rise" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginBottom: 48 }}>
          <div>
            <span className="sp-eyebrow">Selected work</span>
            <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>Portfolio</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: "10px 20px", borderRadius: 999, border: `1px solid ${active ? "var(--ink)" : "var(--line)"}`, background: active ? "var(--ink)" : "transparent", color: active ? "var(--bg)" : "var(--ink2)", fontSize: 13, fontWeight: 500, letterSpacing: ".02em", cursor: "pointer", transition: "all .3s" }}>{f}</button>
              );
            })}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {visibleProjects.map((p) => (
            <a key={p.title} href="#contact" className="sp-pf sp-lift" style={{ display: "block", borderRadius: 10, overflow: "hidden", background: "var(--surface)", border: "1px solid var(--line)", color: "inherit" }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <div className="sp-pf-media" style={{ position: "absolute", inset: 0 }}>
                  <img src={p.img} alt={p.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span style={{ position: "absolute", top: 14, left: 14, padding: "6px 14px", borderRadius: 999, background: "rgba(20,17,13,.55)", color: "#F7F3EC", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", backdropFilter: "blur(6px)" }}>{p.cats[0]}</span>
              </div>
              <div style={{ padding: "24px 26px 28px" }}>
                <h3 className="sp-serif" style={{ fontSize: 24, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-.01em" }}>{p.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--ink2)" }}>
                  <span>{p.location}</span><span style={{ color: "var(--gold)" }}>•</span><span>{p.style}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="sp-rise" style={{ textAlign: "center", marginTop: 60 }}>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRadius: 999, border: "1px solid var(--ink)", color: "var(--ink)", fontSize: 14, fontWeight: 500, letterSpacing: ".03em" }}>View All Projects <Ico {...IC.arrow} /></a>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "var(--ink)", color: "#F1EBDF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
          <div className="sp-rise" style={{ maxWidth: 640, margin: "0 auto 70px", textAlign: "center" }}>
            <span style={{ fontSize: 12, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)" }}>How we work</span>
            <h2 className="sp-serif sp-h2" style={{ marginTop: 16, color: "#F5EFE3" }}>The design process</h2>
          </div>
          <div className="sp-rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 1, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 8, overflow: "hidden" }}>
            {PROCESS.map((st) => (
              <div key={st.n} style={{ background: "var(--ink)", padding: "38px 30px" }}>
                <div className="sp-serif" style={{ fontSize: 40, fontWeight: 500, color: "var(--gold)", lineHeight: 1 }}>{st.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "20px 0 10px", color: "#F5EFE3" }}>{st.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#B4AA98", margin: 0 }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
        <div className="sp-rise" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
          <span className="sp-eyebrow">Kind words</span>
          <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>What clients say</h2>
        </div>
        <div className="sp-rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="sp-lift" style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: "40px 34px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 4, color: "var(--gold)", marginBottom: 22 }}><Stars /></div>
              <p className="sp-serif" style={{ fontSize: 21, lineHeight: 1.55, color: "var(--ink)", margin: "0 0 30px", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 14 }}>
                <span className="sp-serif" style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--surface2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "var(--gold-deep)", fontWeight: 600 }}>{t.initial}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink3)", letterSpacing: ".02em" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,9vw,130px) clamp(20px,5vw,72px)" }}>
          <div className="sp-rise" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="sp-eyebrow">Follow along</span>
            <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>From the studio</h2>
          </div>
          <div className="sp-rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            {INSTAGRAM.map((src, i) => (
              <div key={i} className="sp-pf" style={{ position: "relative", aspectRatio: "1", borderRadius: 8, overflow: "hidden" }}>
                <div className="sp-pf-media" style={{ position: "absolute", inset: 0 }}>
                  <img src={src} alt="Spacera project" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            ))}
          </div>
          <div className="sp-rise" style={{ textAlign: "center", marginTop: 44 }}>
            <a href={site.social[0].url} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 30px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 14, fontWeight: 500, letterSpacing: ".03em" }}><IgIcon /> Follow @spacera.id</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(80px,9vw,140px) clamp(20px,5vw,72px)" }}>
        <div className="sp-rise" style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="sp-eyebrow">Good to know</span>
          <h2 className="sp-serif sp-h2" style={{ marginTop: 16 }}>Frequently asked questions</h2>
        </div>
        <div className="sp-rise" style={{ borderTop: "1px solid var(--line)" }}>
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, textAlign: "left", padding: "26px 4px", background: "transparent", border: "none", color: "var(--ink)", cursor: "pointer", font: "inherit" }}>
                  <span style={{ fontSize: 17, fontWeight: 500, letterSpacing: ".01em" }}>{f.q}</span>
                  <span style={{ flex: "none", color: "var(--gold)", transition: "transform .35s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}><Ico {...IC.plus} /></span>
                </button>
                <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows .4s cubic-bezier(.16,1,.3,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink2)", margin: 0, padding: "0 4px 28px" }}>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
        <img src={CTA_IMG} alt="Interior by Spacera" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,17,13,.7), rgba(20,17,13,.82))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto", textAlign: "center", padding: "clamp(90px,12vw,170px) clamp(20px,5vw,72px)", color: "#F7F3EC" }}>
          <div className="sp-rise">
            <span style={{ fontSize: 12, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--gold)" }}>Let&apos;s begin</span>
            <h2 className="sp-serif" style={{ fontWeight: 500, fontSize: "clamp(34px,5vw,68px)", lineHeight: 1.08, margin: "20px 0 22px", letterSpacing: "-.02em", textWrap: "balance" }}>Ready to transform your home?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#E7DCCB", maxWidth: "52ch", margin: "0 auto 40px" }}>Book a free consultation and let&apos;s design a space that fits the way you live — practical, beautiful and entirely yours.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <a href={waLink} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 36px", borderRadius: 999, background: "var(--gold-deep)", color: "#fff", fontSize: 15, fontWeight: 500, letterSpacing: ".03em" }}>Let&apos;s Discuss <Ico {...IC.arrow} /></a>
              <a href={`mailto:${site.email}`} style={{ display: "inline-flex", alignItems: "center", padding: "17px 36px", borderRadius: 999, border: "1px solid rgba(255,255,255,.5)", background: "rgba(255,255,255,.06)", color: "#fff", fontSize: 15, fontWeight: 500, letterSpacing: ".03em", backdropFilter: "blur(6px)" }}>Email Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--ink)", color: "#D8CFBF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px,7vw,96px) clamp(20px,5vw,72px) 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 48 }}>
          <div style={{ gridColumn: "1 / -1", maxWidth: 360 }}>
            <span style={{ display: "inline-flex", color: "#EDE3D2", marginBottom: 22 }}><Logo showText /></span>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "#A89F90", margin: 0 }}>Interior design studio for small spaces — Japandi, modern minimalist and functional living, made realistic.</p>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Explore</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} style={{ color: "#D8CFBF", fontSize: 14 }}>{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
              <a href={`mailto:${site.email}`} style={{ color: "#D8CFBF" }}>{site.email}</a>
              <a href={waLink} target="_blank" rel="noopener" style={{ color: "#D8CFBF" }}>{site.phone}</a>
              <span style={{ color: "#A89F90" }}>Mon–Sat · 09.00–18.00</span>
              <span style={{ color: "#A89F90" }}>Replies within 24 hours</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Social</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
              {site.social.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener" style={{ color: "#D8CFBF" }}>{s.name} · {s.handle}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px clamp(20px,5vw,72px)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontSize: 12, color: "#8A8171", letterSpacing: ".02em" }}>
            <span>© {new Date().getFullYear()} SPACERA Interior Design Studio. All rights reserved.</span>
            <span>Designing better spaces, creating better experiences.</span>
          </div>
        </div>
      </footer>

      {/* FLOATING: sticky consultation + whatsapp */}
      <a href="#contact" style={{ position: "fixed", zIndex: 90, left: 24, bottom: 26, display: scrolled ? "inline-flex" : "none", alignItems: "center", gap: 9, padding: "14px 22px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 13, fontWeight: 500, letterSpacing: ".02em", boxShadow: "var(--shadow)" }}><Ico {...IC.calendar} /> Book Free Consultation</a>
      <a href={waLink} target="_blank" rel="noopener" aria-label="WhatsApp" style={{ position: "fixed", zIndex: 90, right: 24, bottom: 26, width: 58, height: 58, borderRadius: "50%", background: "#25D366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 30px -8px rgba(37,211,102,.6)", animation: "sp-float 3.4s ease-in-out infinite" }}><WaIcon /></a>
    </div>
  );
}

// Scoped design-system CSS — everything is namespaced under [data-app] and the
// `sp-` prefix so it never collides with the rest of the site.
const CSS = `
[data-app]{
  --bg:#F7F3EC; --bg2:#EFE7D9; --surface:#FCFAF6; --surface2:#F2ECE1;
  --ink:#26241F; --ink2:#6A6355; --ink3:#928A7B; --line:rgba(38,36,31,.12);
  --gold:#B68C5A; --gold-deep:#8A6645; --taupe:#8A7663; --nav-scrolled:rgba(252,250,246,.82);
  --shadow:0 24px 60px -30px rgba(60,48,34,.35);
  --sp-serif:var(--font-cormorant),"Cormorant Garamond",Georgia,serif;
  background:var(--bg); color:var(--ink);
  font-family:var(--font-poppins),"Poppins",system-ui,sans-serif;
  -webkit-font-smoothing:antialiased;
  transition:background .5s ease,color .5s ease;
}
html.dark [data-app], [data-app][data-theme="dark"]{
  --bg:#171512; --bg2:#1E1B16; --surface:#221E19; --surface2:#2A251E;
  --ink:#F1EBDF; --ink2:#B4AA98; --ink3:#8A8171; --line:rgba(255,255,255,.11);
  --gold:#CBA66C; --gold-deep:#C0955E; --taupe:#B7A78D; --nav-scrolled:rgba(28,25,20,.78);
  --shadow:0 24px 60px -30px rgba(0,0,0,.7);
}
[data-app] a{ color:var(--gold-deep); text-decoration:none; }
[data-app] a:hover{ color:var(--gold); }
[data-app] .sp-serif{ font-family:var(--sp-serif); }
[data-app] .sp-eyebrow{ font-size:12px; letter-spacing:.28em; text-transform:uppercase; color:var(--ink3); }
[data-app] .sp-h2{ font-family:var(--sp-serif); font-weight:500; font-size:clamp(30px,3.6vw,48px); line-height:1.12; letter-spacing:-.01em; margin:0; }
[data-app] .sp-nav{
  position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center;
  justify-content:space-between; padding:22px clamp(20px,5vw,72px); color:#F7F3EC;
  transition:background .45s ease, box-shadow .45s ease, color .45s ease, padding .45s ease;
}
[data-app] .sp-nav[data-scrolled="1"]{
  background:var(--nav-scrolled); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
  box-shadow:0 1px 0 var(--line); color:var(--ink);
}
[data-app] .sp-navlink{ position:relative; }
[data-app] .sp-navlink::after{ content:""; position:absolute; left:0; bottom:-6px; height:1px; width:0; background:currentColor; transition:width .35s cubic-bezier(.16,1,.3,1); }
[data-app] .sp-navlink:hover::after{ width:100%; }
[data-app] .sp-lift{ transition:transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s ease, border-color .5s ease; }
[data-app] .sp-lift:hover{ transform:translateY(-6px); box-shadow:var(--shadow); }
[data-app] .sp-pf-media{ transition:transform .8s cubic-bezier(.16,1,.3,1); }
[data-app] .sp-pf:hover .sp-pf-media{ transform:scale(1.06); }
@keyframes sp-rise{ from{ opacity:0; transform:translateY(34px); } to{ opacity:1; transform:none; } }
@keyframes sp-fade{ from{ opacity:0; } to{ opacity:1; } }
@keyframes sp-float{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }
[data-app] .sp-rise{ animation:sp-rise .9s cubic-bezier(.16,1,.3,1) both; animation-timeline:view(); animation-range:entry 4% cover 26%; }
@media (max-width:760px){
  [data-app] .sp-navlinks{ display:none !important; }
}
@media (prefers-reduced-motion:reduce){
  [data-app] .sp-rise{ animation:none !important; opacity:1 !important; transform:none !important; }
}
`;
