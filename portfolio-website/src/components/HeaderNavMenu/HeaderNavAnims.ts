export const char_enter = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  enter: (i: number[]) => ({
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: i[0],
    },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    x: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
