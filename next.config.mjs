/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow remote demo imagery (Unsplash) used as interior placeholders.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
