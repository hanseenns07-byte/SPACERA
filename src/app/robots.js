import { site } from "@/data/site";

// Generates /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
