export const titleAnim = {
  initial: {
    y: "-12.5%",
  },
  enter: (n: number) => ({
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.5 + n * 0.05,
    },
  }),
};
