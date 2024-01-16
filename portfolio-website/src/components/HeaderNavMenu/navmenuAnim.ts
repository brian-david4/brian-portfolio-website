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
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: { duration: 0.8, ease: easeInOutQuart },
  },
  exit: {
    height: "0",
    transition: { duration: 1.2, ease: easeInOutQuart },
  },
};
