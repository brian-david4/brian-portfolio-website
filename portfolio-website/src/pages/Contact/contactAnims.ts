export const wordEnter = {
  initial: {
    y: "25%",
    opacity: 0,
  },
  enter: (n: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.85, 0, 0.15, 1],
      delay: 0.5 + n * 0.05,
    },
  }),
};
