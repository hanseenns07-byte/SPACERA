// Reusable content collections: features, services, process, testimonials, FAQs.
// Icon names map to a lookup table in src/utils/icons.js so the JSON stays
// framework-agnostic (no React imports in the data layer).

export const features = [
  {
    icon: "consult",
    title: "Free Consultation",
    description:
      "Share your space and goals — we start every project with a no-cost conversation about how to make it work harder for you.",
  },
  {
    icon: "survey",
    title: "Free Survey",
    description:
      "We measure and study your room in person so every layout decision is grounded in your real dimensions.",
  },
  {
    icon: "budget",
    title: "Budget Planning",
    description:
      "Beautiful spaces on any budget. We plan spending transparently so there are no surprises later.",
  },
  {
    icon: "custom",
    title: "Customized Design",
    description:
      "Every design is tailored to how you actually live — no templates, no generic solutions.",
  },
  {
    icon: "process",
    title: "Transparent Process",
    description:
      "From concept to installation, you always know exactly where your project stands.",
  },
];

export const services = [
  {
    icon: "interior",
    title: "Interior Design",
    description:
      "Full-service interior design that balances beauty, comfort, and everyday function.",
  },
  {
    icon: "furniture",
    title: "Furniture Planning",
    description:
      "Proportional, multi-functional furniture selected and arranged to fit your space perfectly.",
  },
  {
    icon: "space",
    title: "Space Optimization",
    description:
      "Smart layouts that turn tight square meters into open, breathable living areas.",
  },
  {
    icon: "render",
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders so you can see and feel your space before a single change is made.",
  },
  {
    icon: "material",
    title: "Material Recommendation",
    description:
      "Curated, harmonious material and finish palettes tuned to your style and budget.",
  },
  {
    icon: "budget",
    title: "Budget Planning",
    description:
      "Clear, itemised budgeting that keeps your project realistic from day one.",
  },
];

// Design Process Timeline
export const processSteps = [
  { num: "01", icon: "consult", title: "Free Consultation", description: "We listen to your needs, lifestyle, and vision for the space." },
  { num: "02", icon: "survey", title: "Site Survey", description: "On-site measurement and analysis of your existing conditions." },
  { num: "03", icon: "concept", title: "Concept Design", description: "Mood, layout, and direction — the creative foundation of your space." },
  { num: "04", icon: "render", title: "3D Visualization", description: "Photorealistic renders that bring the concept to life." },
  { num: "05", icon: "revision", title: "Design Revision", description: "We refine every detail together until it feels exactly right." },
  { num: "06", icon: "production", title: "Production", description: "Custom furniture and finishes crafted with trusted makers." },
  { num: "07", icon: "install", title: "Installation", description: "Careful on-site installation and the final reveal of your space." },
];

export const testimonials = [
  {
    name: "Amanda Wijaya",
    role: "Apartment Owner, Jakarta",
    rating: 5,
    quote:
      "SPACERA turned our 28 m² studio into a home that feels twice its size. Every corner has a purpose and it still feels calm and open.",
  },
  {
    name: "Rizky Pratama",
    role: "Homeowner, Bekasi",
    rating: 5,
    quote:
      "The 3D renders were spot on — what we saw is exactly what we got. The process was transparent and completely stress-free.",
  },
  {
    name: "Clara Santoso",
    role: "Freelancer, Tangerang",
    rating: 5,
    quote:
      "My tiny work-from-home corner became my favourite spot in the house. Functional, warm, and genuinely beautiful.",
  },
  {
    name: "Dimas Nugroho",
    role: "Café Owner, Depok",
    rating: 5,
    quote:
      "Professional from start to finish. They respected our budget and still delivered a space our customers love.",
  },
  {
    name: "Larasati Putri",
    role: "Bedroom Makeover, Jakarta",
    rating: 5,
    quote:
      "The Japandi palette they chose is so soothing. I finally have a bedroom that helps me actually rest.",
  },
];

export const faqs = [
  {
    q: "How much does an interior design project cost?",
    a: "Every project is unique, so cost depends on scope, area size, and material choices. After a free consultation and survey, we prepare a transparent budget plan tailored to your priorities — you always approve the numbers before we begin.",
  },
  {
    q: "How long does a project usually take?",
    a: "Design typically takes 2–4 weeks depending on complexity, with production and installation added afterward. We share a clear timeline during the concept stage so you know what to expect at each step.",
  },
  {
    q: "Can I request design service only?",
    a: "Absolutely. Many clients choose design-only packages that include layouts, 3D visualization, and a material palette they can execute with their own contractor.",
  },
  {
    q: "Do you also build custom furniture?",
    a: "Yes. We design and produce proportional, multi-functional custom furniture with trusted makers — ideal for maximising small spaces.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes, the initial consultation and site survey are completely free with no obligation. It helps us understand your space and helps you decide if we're the right fit.",
  },
  {
    q: "Do you work outside Jakarta?",
    a: "We're based in Jakarta but work with clients nationwide. For projects outside the city we handle survey and coordination remotely with occasional on-site visits.",
  },
];

// Mission points for the About page.
export const mission = [
  "Focus on small-space interior solutions",
  "Educate people about interior design",
  "Recommend curated interior products",
  "Make interior design easier to understand",
  "Connect design inspiration with real products",
];
