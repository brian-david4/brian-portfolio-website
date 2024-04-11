const ease = [0.22, 1, 0.36, 1];

export const textHoverImage = {
  initial: (n: number) => ({
    top: "40%",
    opacity: 0,
    left: "20%",
    rotate: n * 2 - 5,
  }),
  enter: (n: number) => ({
    top: `${n * 2 + 20}%`,
    opacity: 1,
    transition: { duration: 0.6, ease: ease, delay: 0.025 * n + 0.1 },
    rotate: -10 + n * 10,
    left: `${n * 4 + 10}%`,
  }),
  exit: (n: number) => ({
    opacity: 0,
    top: "40%",
    transition: { duration: 0.6, ease: ease, delay: 0.025 * n + 0.1 },
    rotate: n * 2,
    left: "20%",
  }),
};
