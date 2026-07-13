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
  phone: "+62 812-0000-0000",
  whatsapp: "6281200000000", // digits only, used for wa.me links
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
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.5!2d106.68!3d-6.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000",
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
