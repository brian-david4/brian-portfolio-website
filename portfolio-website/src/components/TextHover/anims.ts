export const textHoverImage = {
  initial: (n: number) => ({
    top: "30%",
    opacity: 0.5,
    left: "20%",
    rotate: n * 2 - 5,
  }),
  enter: (n: number) => ({
    top: `${n * 2 + 20}%`,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.025 * n, ease: [0.22, 1, 0.36, 1] },
    rotate: n * 10 - 10,
    left: `${n * 3 + 15}%`,
  }),
};
