const easeInOutQuart = [0.76, 0, 0.24, 1];

export const background = {
  initial: {
    top: "100vh",
  },
  animate: {
    top: "0vh",
    transition: { duration: 1.4, ease: easeInOutQuart },
  },
  exit: {
    top: "100vh",
    transition: { duration: 0.6, ease: easeInOutQuart },
  },
};
export const navMenu = {
  animate: {
    top: "var(--header-height)",
    transition: { duration: 1, ease: easeInOutQuart },
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.5, ease: easeInOutQuart },
  },
};
