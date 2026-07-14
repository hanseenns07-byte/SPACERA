// Central company / site configuration.
// Kept as a plain JS module (exporting JSON-shaped objects) so it is trivial to
// swap for a CMS or API endpoint later without touching component code.

export const site = {
  name: "SPACERA",
  tagline: "Interior Design Studio",
  domain: "https://spacera.id",
  description:
    "Interior Design for Small Spaces. Japandi, Modern Minimalist, Functional Interior Design.",
  email: "idspacera@gmail.com",
  phone: "+62 851-5904-7718",
  whatsapp: "6285159047718", // digits only, used for wa.me chat links
  whatsappMessage:
    "Hi SPACERA, I'd like to discuss my interior design project.",
  location: "Jakarta, Indonesia",
  address: "Jakarta, Indonesia — serving nationwide",
  businessHours: [
    { day: "Monday – Friday", hours: "09:00 – 18:00" },
    { day: "Saturday", hours: "10:00 – 15:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  responseTime: "Within 24 hours",
  social: [
    {
      name: "Instagram",
      handle: "@spacera.id",
      url: "https://www.instagram.com/spacera.id/",
      icon: "instagram",
    },
    {
      name: "TikTok",
      handle: "@spacera.id",
      url: "https://www.tiktok.com/@spacera.id",
      icon: "tiktok",
    },
    {
      name: "YouTube",
      handle: "@SpaceraID-EH",
      url: "https://www.youtube.com/@SpaceraID-EH",
      icon: "youtube",
    },
  ],
};

// Animated statistics for the "Company Statistics" section.
export const stats = [
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Custom Design" },
  { value: 100, suffix: "%", label: "3D Visualization Included" },
];

export default site;
