// Portfolio projects. Each project is fully self-describing so the detail page,
// the grid cards, and the filters can all read from this single source.
// Adding a new project = appending one object here (admin/CMS-ready shape).
//
// Image URLs point at Unsplash interior photography as realistic placeholders.
// Replace the `img(...)` values with your own asset paths when ready.

const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  "All",
  "Workspace",
  "Bedroom",
  "Living Room",
  "Kitchen",
  "Apartment",
  "Small Space",
  "Residential",
  "Commercial",
];

export const projects = [
  {
    slug: "workspace-japandi",
    title: "Workspace Japandi",
    category: ["Workspace", "Small Space", "Residential"],
    location: "Jakarta, Indonesia",
    style: "Japandi Minimalist",
    area: "12 m²",
    year: "2025",
    featured: true,
    cover: img("1524758631624-e2822e304c36"),
    hero: img("1497366754035-f200968a6e72", 2000),
    excerpt:
      "A calm, focused home office that turns a narrow 12 m² corner into a productive Japandi retreat.",
    overview:
      "A compact work-from-home corner reimagined as a serene, distraction-free studio. Warm oak, soft linen, and a restrained palette keep the mind clear while smart storage hides the clutter of daily work.",
    challenges:
      "The room was long and narrow with a single window, leaving most of the space dim and awkward to furnish without feeling cramped.",
    solutions:
      "A slim full-height desk runs along the brightest wall, paired with floating shelves and concealed cable management. Light oak and warm white finishes bounce daylight deeper into the room.",
    materials: [
      { name: "Light Oak", hex: "#B68C5A" },
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Charcoal", hex: "#2E2E2E" },
    ],
    moodboard: [
      img("1616486338812-3dadae4b4ace", 800),
      img("1524758631624-e2822e304c36", 800),
      img("1531973576160-7125cd663d86", 800),
    ],
    gallery: [
      { src: img("1497366811353-6870744d04b2"), alt: "Japandi workspace desk with oak shelving" },
      { src: img("1497366754035-f200968a6e72"), alt: "Bright minimalist home office corner" },
      { src: img("1524758631624-e2822e304c36"), alt: "Neutral toned study nook with plants" },
    ],
    renders: [
      { src: img("1631679706909-1844bbd07221"), alt: "3D render of Japandi workspace — scene 1" },
      { src: img("1616137466211-f939a420be84"), alt: "3D render of Japandi workspace — scene 2" },
    ],
    beforeAfter: {
      before: img("1493809842364-78817add7ffb"),
      after: img("1497366754035-f200968a6e72"),
    },
    testimonial: {
      name: "Clara Santoso",
      role: "Freelancer",
      rating: 5,
      quote:
        "My tiny work-from-home corner became my favourite spot in the house. Functional, warm, and genuinely beautiful.",
    },
  },
  {
    slug: "living-room-warmth",
    title: "Warm Living Room",
    category: ["Living Room", "Apartment", "Residential"],
    location: "Bekasi, Indonesia",
    style: "Modern Japandi",
    area: "24 m²",
    year: "2025",
    featured: true,
    cover: img("1618221195710-dd6b41faaea6"),
    hero: img("1618221195710-dd6b41faaea6", 2000),
    excerpt:
      "A cramped apartment living room reborn as an airy, sociable heart of the home.",
    overview:
      "We opened up a dark, furniture-heavy living room into a light, flexible space for family and guests. A low-profile modular sofa and a floating media wall keep sightlines open and the floor visually larger.",
    challenges:
      "Bulky legacy furniture blocked circulation and made the room feel far smaller than its actual footprint.",
    solutions:
      "Right-sized, low furniture and a warm neutral palette create breathing room. A single accent of light oak grounds the space without overwhelming it.",
    materials: [
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Warm Taupe", hex: "#8A7663" },
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Soft Gray", hex: "#8C8C8C" },
    ],
    moodboard: [
      img("1586023492125-27b2c045efd7", 800),
      img("1616594039964-ae9021a400a0", 800),
      img("1567016432779-094069958ea5", 800),
    ],
    gallery: [
      { src: img("1618221195710-dd6b41faaea6"), alt: "Warm modern living room with modular sofa" },
      { src: img("1586023492125-27b2c045efd7"), alt: "Neutral living room with soft textiles" },
      { src: img("1567016432779-094069958ea5"), alt: "Open plan living area with natural light" },
    ],
    renders: [
      { src: img("1616594039964-ae9021a400a0"), alt: "3D render of warm living room" },
    ],
    beforeAfter: {
      before: img("1524758631624-e2822e304c36"),
      after: img("1618221195710-dd6b41faaea6"),
    },
    testimonial: {
      name: "Rizky Pratama",
      role: "Homeowner",
      rating: 5,
      quote:
        "The 3D renders were spot on — what we saw is exactly what we got. The process was transparent and completely stress-free.",
    },
  },
  {
    slug: "serene-bedroom",
    title: "Serene Bedroom Retreat",
    category: ["Bedroom", "Small Space", "Residential"],
    location: "Tangerang, Indonesia",
    style: "Japandi Calm",
    area: "14 m²",
    year: "2024",
    featured: true,
    cover: img("1615529182904-14819c35db37"),
    hero: img("1615529182904-14819c35db37", 2000),
    excerpt:
      "A restful, clutter-free bedroom designed around calm textures and soft daylight.",
    overview:
      "A small bedroom transformed into a spa-like retreat. A low platform bed, integrated storage, and a muted palette create a space that helps you truly switch off.",
    challenges:
      "Limited floor area with no room for a traditional wardrobe, and harsh overhead lighting that felt cold.",
    solutions:
      "Built-in storage runs floor-to-ceiling behind the bed, while layered warm lighting replaces the single harsh fixture for a softer mood.",
    materials: [
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Warm Taupe", hex: "#8A7663" },
      { name: "Charcoal", hex: "#2E2E2E" },
    ],
    moodboard: [
      img("1616486338812-3dadae4b4ace", 800),
      img("1618219908412-a29a1bb7b86e", 800),
      img("1615529182904-14819c35db37", 800),
    ],
    gallery: [
      { src: img("1615529182904-14819c35db37"), alt: "Calm Japandi bedroom with platform bed" },
      { src: img("1618219908412-a29a1bb7b86e"), alt: "Minimalist bedroom with warm lighting" },
      { src: img("1616486338812-3dadae4b4ace"), alt: "Neutral bedroom with integrated storage" },
    ],
    renders: [
      { src: img("1616137466211-f939a420be84"), alt: "3D render of serene bedroom" },
    ],
    beforeAfter: {
      before: img("1493809842364-78817add7ffb"),
      after: img("1615529182904-14819c35db37"),
    },
    testimonial: {
      name: "Larasati Putri",
      role: "Homeowner",
      rating: 5,
      quote:
        "The Japandi palette they chose is so soothing. I finally have a bedroom that helps me actually rest.",
    },
  },
  {
    slug: "functional-bedroom",
    title: "Functional Bedroom",
    category: ["Bedroom", "Apartment", "Small Space"],
    location: "Jakarta, Indonesia",
    style: "Functional Minimalist",
    area: "16 m²",
    year: "2024",
    featured: true,
    cover: img("1616594039964-ae9021a400a0"),
    hero: img("1616594039964-ae9021a400a0", 2000),
    excerpt:
      "Every square meter earns its place in this hard-working yet elegant bedroom.",
    overview:
      "A multi-functional bedroom that combines sleeping, storage, and a compact vanity without feeling busy. Careful zoning keeps each function distinct while the palette stays unified and calm.",
    challenges:
      "The client needed sleeping, working, and storage functions in one modest room without it feeling cramped.",
    solutions:
      "A raised bed platform hides deep drawers, while a slim wall-mounted vanity doubles as a desk. Top-view planning ensured comfortable clearances throughout.",
    materials: [
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Soft Gray", hex: "#8C8C8C" },
    ],
    moodboard: [
      img("1618219908412-a29a1bb7b86e", 800),
      img("1616594039964-ae9021a400a0", 800),
      img("1531973576160-7125cd663d86", 800),
    ],
    gallery: [
      { src: img("1616594039964-ae9021a400a0"), alt: "Functional bedroom top view layout" },
      { src: img("1618219908412-a29a1bb7b86e"), alt: "Bedroom perspective view with vanity" },
      { src: img("1531973576160-7125cd663d86"), alt: "Bedroom perspective view with storage" },
    ],
    renders: [
      { src: img("1616137466211-f939a420be84"), alt: "3D render of functional bedroom — top view" },
      { src: img("1618219908412-a29a1bb7b86e"), alt: "3D render of functional bedroom — perspective" },
    ],
    beforeAfter: {
      before: img("1493809842364-78817add7ffb"),
      after: img("1616594039964-ae9021a400a0"),
    },
    testimonial: {
      name: "Amanda Wijaya",
      role: "Apartment Owner",
      rating: 5,
      quote:
        "SPACERA turned our studio into a home that feels twice its size. Every corner has a purpose.",
    },
  },
  {
    slug: "compact-kitchen",
    title: "Compact Japandi Kitchen",
    category: ["Kitchen", "Small Space", "Residential"],
    location: "Depok, Indonesia",
    style: "Japandi Minimalist",
    area: "9 m²",
    year: "2024",
    featured: true,
    cover: img("1600585154340-be6161a56a0c"),
    hero: img("1600585154340-be6161a56a0c", 2000),
    excerpt:
      "A small galley kitchen made bright, efficient, and beautiful with warm wood and clean lines.",
    overview:
      "A tight galley kitchen reworked for smooth workflow and generous storage. Handleless cabinetry and a warm wood counter keep the space serene while maximising every centimetre.",
    challenges:
      "A narrow galley footprint with minimal counter space and dated, dark cabinetry.",
    solutions:
      "Full-height handleless cabinets and light finishes open the space visually, while an optimised work triangle makes cooking effortless.",
    materials: [
      { name: "Warm White", hex: "#F8F5EF" },
      { name: "Light Oak", hex: "#B9936C" },
      { name: "Charcoal", hex: "#2E2E2E" },
      { name: "Soft Gray", hex: "#8C8C8C" },
    ],
    moodboard: [
      img("1600566753086-00f18fb6b3ea", 800),
      img("1600585154340-be6161a56a0c", 800),
      img("1600607687939-ce8a6c25118c", 800),
    ],
    gallery: [
      { src: img("1600585154340-be6161a56a0c"), alt: "Compact Japandi kitchen with wood counter" },
      { src: img("1600566753086-00f18fb6b3ea"), alt: "Minimalist galley kitchen storage" },
      { src: img("1600607687939-ce8a6c25118c"), alt: "Bright small kitchen with clean lines" },
    ],
    renders: [
      { src: img("1600210492486-724fe5c67fb0"), alt: "3D render of compact kitchen" },
    ],
    beforeAfter: {
      before: img("1493809842364-78817add7ffb"),
      after: img("1600585154340-be6161a56a0c"),
    },
    testimonial: {
      name: "Dimas Nugroho",
      role: "Homeowner",
      rating: 5,
      quote:
        "Professional from start to finish. They respected our budget and still delivered a space we love.",
    },
  },
  {
    slug: "studio-apartment",
    title: "Open Studio Apartment",
    category: ["Apartment", "Living Room", "Small Space", "Residential"],
    location: "Jakarta, Indonesia",
    style: "Modern Japandi",
    area: "28 m²",
    year: "2025",
    featured: true,
    cover: img("1567016432779-094069958ea5"),
    hero: img("1567016432779-094069958ea5", 2000),
    excerpt:
      "A 28 m² studio zoned into living, sleeping, and working areas that flow as one calm space.",
    overview:
      "A single-room studio thoughtfully divided into distinct zones without a single wall. Furniture placement, rugs, and lighting define each area while keeping the whole apartment feeling open and connected.",
    challenges:
      "One open room needed to serve as bedroom, living room, and workspace at once, without feeling chaotic.",
    solutions:
      "A low shelf acts as a soft divider between sleeping and living zones, and a consistent warm palette ties everything together for a spacious, unified feel.",
    materials: [
      { name: "Soft Cream", hex: "#EFE6D8" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Warm Taupe", hex: "#8A7663" },
      { name: "Light Oak", hex: "#B9936C" },
    ],
    moodboard: [
      img("1586023492125-27b2c045efd7", 800),
      img("1567016432779-094069958ea5", 800),
      img("1618221195710-dd6b41faaea6", 800),
    ],
    gallery: [
      { src: img("1567016432779-094069958ea5"), alt: "Open studio apartment living zone" },
      { src: img("1586023492125-27b2c045efd7"), alt: "Studio apartment sleeping zone" },
      { src: img("1616594039964-ae9021a400a0"), alt: "Studio apartment workspace zone" },
    ],
    renders: [
      { src: img("1618221195710-dd6b41faaea6"), alt: "3D render of open studio apartment" },
    ],
    beforeAfter: {
      before: img("1493809842364-78817add7ffb"),
      after: img("1567016432779-094069958ea5"),
    },
    testimonial: {
      name: "Amanda Wijaya",
      role: "Apartment Owner",
      rating: 5,
      quote:
        "Every corner has a purpose and it still feels calm and open. Twice the space we thought we had.",
    },
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
