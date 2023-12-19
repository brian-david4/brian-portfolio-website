export const char_enter = {
  initial: {
    y: "100%",
  },
  enter: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.02 * i,
    },
  }),
};
