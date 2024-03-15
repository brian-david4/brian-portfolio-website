const ease = [0.83, 0, 0.17, 1];

export const enterRotateLeft = {
  initial: {
    y: "200%",
    rotate: 0,
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    rotate: -5,
    transition: { duration: 1, ease: ease, delay: 0.5 },
  },
};
export const enterRotateRight = {
  initial: {
    y: "200%",
    rotate: 0,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: "0%",
    x: "40%",
    rotate: 7,
    transition: { duration: 0.6, ease: ease, delay: 0.4 },
  },
};
