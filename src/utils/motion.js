// Shared Framer Motion variants so animations feel consistent site-wide.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger container — children reveal one after another.
export const stagger = (delay = 0.12) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
});

// Sensible defaults for whileInView reveals.
export const viewport = { once: true, amount: 0.2 };
