export const projTitle = {
  initial: {
    y: 250,
    scale: 4.5,
    letterSpacing: "0.52ch",
  },
  animate: {
    y: "var(--header-height)",
    scale: 3.5,
    letterSpacing: "0.1ch",
    transition: { duration: 1.2, ease: [0.65, 0, 0.2, 1], delay: 1 },
  },
};
