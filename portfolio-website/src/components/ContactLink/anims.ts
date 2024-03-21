export const contactLinkEnter = {
  initial: {
    y: "110%",
  },
  enter: (n: number) => ({
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5 + n * 0.007,
    },
  }),
};
