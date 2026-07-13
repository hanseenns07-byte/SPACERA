/** @type {import('tailwindcss').Config} */
module.exports = {
  // Class-based dark mode so we can toggle it via a button + persist in localStorage.
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SPACERA brand palette (Japandi warm neutrals)
        primary: "#8A6645", // warm walnut
        secondary: "#D9C6B3", // soft sand
        accent: "#B68C5A", // light oak
        base: "#F8F6F3", // warm background
        ink: "#2C2C2C", // primary text
        // Dark mode surfaces
        "dark-base": "#171512",
        "dark-surface": "#211E1A",
        "dark-ink": "#EDE7DF",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(44, 44, 44, 0.12)",
        "soft-lg": "0 24px 60px -20px rgba(44, 44, 44, 0.18)",
        glow: "0 0 0 1px rgba(138, 102, 69, 0.08), 0 20px 50px -20px rgba(138, 102, 69, 0.25)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};
