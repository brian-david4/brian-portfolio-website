export const background = {
  initial: {
    top: "100vh",
  },
  animate: {
    top: "0vh",
    transition: { duration: 1.8, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    top: "100vh",
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
  },
};
export const navMenu = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    height: "0",
    transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
  },
};
