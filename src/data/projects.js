// ─────────────────────────────────────────────────────────────────────────
//  SPACERA PORTFOLIO DATA
// ─────────────────────────────────────────────────────────────────────────
//  Each project reads its images from  public/portfolio/<slug>/<file>.jpg
//  so you can drop your own photos in without touching this file.
//
//  👉  See  public/portfolio/README.md  for the full "where do the photos go"
//      tutorial (which filename goes where, recommended sizes, etc.).
//
//  To EDIT text (title, location, area, description): change the strings below.
//  To ADD a new project: copy one object, give it a new `slug`, and create a
//  matching folder in public/portfolio/.
// ─────────────────────────────────────────────────────────────────────────

// Build a public path to an image inside a project's folder.
const asset = (slug, file) => `/portfolio/${slug}/${file}`;

export const categories = [
  "All",
  "Workspace",
  "Bedroom",
  "Living Room",
  "Residential",
  "Small Space",
  "Apartment",
];

export const projects = [
  // 1 ── Workspace Japandi ────────────────────────────────────────────────
  {
    slug: "workspace-japandi",
    title: "Workspace Japandi",
    category: ["Workspace", "Small Space", "Residential"],
    location: "Jakarta, Indonesia",
    style: "Japandi Minimalist",
    area: "12 m²",
    year: "2025",
    featured: true,
    cover: asset("workspace-japandi", "cover.jpg"),
    hero: asset("workspace-japandi", "hero.jpg"),
    excerpt:
      "A calm, focused home office that turns a narrow corner into a productive Japandi retreat.",
    overview:
      "A compact work-from-home corner reimagined as a serene, distraction-free studio. Warm oak, soft linen, and a restrained palette keep the mind clear while smart storage hides the clutter of daily work.",
    challenges:
      "A long, narrow room with a single window left most of the space dim and hard to furnish without feeling cramped.",
    solutions:
      "A slim full-height desk runs along the brightest wall with floating shelves and hidden cable management. Light finishes bounce daylight deeper into the room.",
    materials: [
      { name: "Light Oak", hex: "#B68C5A" },
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Charcoal", hex: "#2E2E2E" },
    ],
    moodboard: [
      asset("workspace-japandi", "moodboard-1.jpg"),
      asset("workspace-japandi", "moodboard-2.jpg"),
      asset("workspace-japandi", "moodboard-3.jpg"),
    ],
    gallery: [
      { src: asset("workspace-japandi", "gallery-1.jpg"), alt: "Workspace Japandi — scene 1" },
      { src: asset("workspace-japandi", "gallery-2.jpg"), alt: "Workspace Japandi — scene 2" },
      { src: asset("workspace-japandi", "gallery-3.jpg"), alt: "Workspace Japandi — scene 3" },
    ],
    renders: [
      { src: asset("workspace-japandi", "render-1.jpg"), alt: "Workspace Japandi — 3D render 1" },
      { src: asset("workspace-japandi", "render-2.jpg"), alt: "Workspace Japandi — 3D render 2" },
    ],
    beforeAfter: {
      before: asset("workspace-japandi", "before.jpg"),
      after: asset("workspace-japandi", "after.jpg"),
    },
    testimonial: null,
  },

  // 2 ── Kamar (Kosambi Baru) ─────────────────────────────────────────────
  {
    slug: "kamar-kosambi-baru",
    title: "Kamar — Kosambi Baru",
    category: ["Bedroom", "Small Space", "Residential"],
    location: "Kosambi Baru, Jakarta Barat",
    style: "Japandi Calm",
    area: "—",
    year: "2025",
    featured: true,
    cover: asset("kamar-kosambi-baru", "cover.jpg"),
    hero: asset("kamar-kosambi-baru", "hero.jpg"),
    excerpt:
      "A restful, clutter-free bedroom designed around calm textures and soft daylight.",
    overview:
      "A bedroom in Kosambi Baru transformed into a spa-like retreat. A low platform bed, integrated storage, and a muted palette create a space that helps you truly switch off.",
    challenges:
      "Limited floor area with no room for a bulky wardrobe, and harsh overhead lighting that felt cold.",
    solutions:
      "Floor-to-ceiling built-in storage sits behind the bed, while layered warm lighting replaces the single harsh fixture for a softer mood.",
    materials: [
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Warm Taupe", hex: "#8A7663" },
      { name: "Charcoal", hex: "#2E2E2E" },
    ],
    moodboard: [],
    gallery: [
      { src: asset("kamar-kosambi-baru", "gallery-1.jpg"), alt: "Kamar Kosambi Baru — scene 1" },
      { src: asset("kamar-kosambi-baru", "gallery-2.jpg"), alt: "Kamar Kosambi Baru — scene 2" },
      { src: asset("kamar-kosambi-baru", "gallery-3.jpg"), alt: "Kamar Kosambi Baru — scene 3" },
    ],
    renders: [],
    beforeAfter: {
      before: asset("kamar-kosambi-baru", "before.jpg"),
      after: asset("kamar-kosambi-baru", "after.jpg"),
    },
    testimonial: null,
  },

  // 3 ── Kamar Fungsional ─────────────────────────────────────────────────
  {
    slug: "kamar-fungsional",
    title: "Kamar Fungsional",
    category: ["Bedroom", "Small Space"],
    location: "Jakarta, Indonesia",
    style: "Functional Minimalist",
    area: "16 m²",
    year: "2024",
    featured: true,
    cover: asset("kamar-fungsional", "cover.jpg"),
    hero: asset("kamar-fungsional", "hero.jpg"),
    excerpt:
      "Every square metre earns its place in this hard-working yet elegant bedroom.",
    overview:
      "A multi-functional bedroom that combines sleeping, storage, and a compact work area without feeling busy. Careful zoning keeps each function distinct while the palette stays unified and calm.",
    challenges:
      "The client needed sleeping, working, and storage in one modest room without it feeling cramped.",
    solutions:
      "A raised bed platform hides deep drawers, and a slim wall-mounted vanity doubles as a desk. Top-view planning ensured comfortable clearances throughout.",
    materials: [
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Soft Gray", hex: "#8C8C8C" },
    ],
    moodboard: [],
    gallery: [
      { src: asset("kamar-fungsional", "gallery-1.jpg"), alt: "Kamar Fungsional — scene 1" },
      { src: asset("kamar-fungsional", "gallery-2.jpg"), alt: "Kamar Fungsional — scene 2" },
      { src: asset("kamar-fungsional", "gallery-3.jpg"), alt: "Kamar Fungsional — scene 3" },
    ],
    renders: [
      { src: asset("kamar-fungsional", "render-1.jpg"), alt: "Kamar Fungsional — top view render" },
      { src: asset("kamar-fungsional", "render-2.jpg"), alt: "Kamar Fungsional — perspective render" },
    ],
    beforeAfter: null,
    testimonial: null,
  },

  // 4 ── Ruang Tamu (Greenlake City) ──────────────────────────────────────
  {
    slug: "ruang-tamu-greenlake",
    title: "Ruang Tamu — Greenlake City",
    category: ["Living Room", "Apartment", "Residential"],
    location: "Greenlake City, Tangerang",
    style: "Modern Japandi",
    area: "24 m²",
    year: "2025",
    featured: true,
    cover: asset("ruang-tamu-greenlake", "cover.jpg"),
    hero: asset("ruang-tamu-greenlake", "hero.jpg"),
    excerpt:
      "A cramped living room reborn as an airy, sociable heart of the home.",
    overview:
      "A living room in Greenlake City opened up into a light, flexible space for family and guests. A low-profile modular sofa and a floating media wall keep sightlines open and the floor visually larger.",
    challenges:
      "Bulky legacy furniture blocked circulation and made the room feel far smaller than its actual footprint.",
    solutions:
      "Right-sized, low furniture and a warm neutral palette create breathing room, with a single accent of light oak grounding the space.",
    materials: [
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Warm Taupe", hex: "#8A7663" },
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Soft Gray", hex: "#8C8C8C" },
    ],
    moodboard: [],
    gallery: [
      { src: asset("ruang-tamu-greenlake", "gallery-1.jpg"), alt: "Ruang Tamu Greenlake — scene 1" },
      { src: asset("ruang-tamu-greenlake", "gallery-2.jpg"), alt: "Ruang Tamu Greenlake — scene 2" },
      { src: asset("ruang-tamu-greenlake", "gallery-3.jpg"), alt: "Ruang Tamu Greenlake — scene 3" },
    ],
    renders: [],
    beforeAfter: {
      before: asset("ruang-tamu-greenlake", "before.jpg"),
      after: asset("ruang-tamu-greenlake", "after.jpg"),
    },
    testimonial: null,
  },

  // 5 ── Rumah 3.3 × 12m (Park Serpong) ───────────────────────────────────
  {
    slug: "rumah-park-serpong",
    title: "Rumah 3.3 × 12m — Park Serpong",
    category: ["Residential", "Small Space", "Living Room"],
    location: "Park Serpong, Tangerang",
    style: "Functional Japandi",
    area: "3.3 × 12 m",
    year: "2025",
    featured: true,
    cover: asset("rumah-park-serpong", "cover.jpg"),
    hero: asset("rumah-park-serpong", "hero.jpg"),
    excerpt:
      "A narrow 3.3-metre-wide house designed to feel open, bright, and complete from front to back.",
    overview:
      "A long, slim 3.3 × 12 m house planned end to end so every zone — living, dining, and rest — flows without wasted space. Consistent finishes and generous light make the narrow footprint feel calm and roomy.",
    challenges:
      "A very narrow 3.3-metre width risked dark, tunnel-like rooms with little natural light reaching the centre.",
    solutions:
      "An open, layered layout and a light, unified palette carry daylight through the home, while built-in storage keeps the slim floor plan clear and uncluttered.",
    materials: [
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Charcoal", hex: "#2E2E2E" },
    ],
    moodboard: [],
    gallery: [
      { src: asset("rumah-park-serpong", "gallery-1.jpg"), alt: "Rumah Park Serpong — scene 1" },
      { src: asset("rumah-park-serpong", "gallery-2.jpg"), alt: "Rumah Park Serpong — scene 2" },
      { src: asset("rumah-park-serpong", "gallery-3.jpg"), alt: "Rumah Park Serpong — scene 3" },
      { src: asset("rumah-park-serpong", "gallery-4.jpg"), alt: "Rumah Park Serpong — scene 4" },
    ],
    renders: [
      { src: asset("rumah-park-serpong", "render-1.jpg"), alt: "Rumah Park Serpong — 3D render 1" },
      { src: asset("rumah-park-serpong", "render-2.jpg"), alt: "Rumah Park Serpong — 3D render 2" },
    ],
    beforeAfter: null,
    testimonial: null,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug, limit = 3) {
  const current = projects.find((p) => p.slug === slug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const overlap = (p) =>
        p.category.filter((c) => current.category.includes(c)).length;
      return overlap(b) - overlap(a);
    })
    .slice(0, limit);
}
