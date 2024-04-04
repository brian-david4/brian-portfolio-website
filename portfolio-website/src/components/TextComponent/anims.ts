export const textEnter = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  enter: (n: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: n * 0.005 },
  }),
};
