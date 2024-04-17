const ease = [0.39, 0.575, 0.565, 1];

export const aboutLinkEnter = {
  initial: {
    opacity: 0,
  },
  enter: (n: number) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: ease, delay: 0.8 + n * 0.25 },
  }),
};
