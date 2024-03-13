export const titleWordsAnim = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  enter: (n: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1.8, delay: n * 0.05, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: (n: number) => ({
    y: "-110%",
    transition: { duration: 0.3, delay: n * 0.05, ease: [0.76, 0, 0.24, 1] },
  }),
};

export const contactReveal = {
  initial: {
    scaleX: "100%",
  },
  enter: {
    scaleX: "0%",
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.9 },
  },
};
