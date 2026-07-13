// Web App Manifest — enables installable PWA-style metadata + theming.
export default function manifest() {
  return {
    name: "SPACERA | Interior Design Studio",
    short_name: "SPACERA",
    description:
      "Interior Design for Small Spaces. Japandi, Modern Minimalist, Functional Interior Design.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F6F3",
    theme_color: "#8A6645",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
