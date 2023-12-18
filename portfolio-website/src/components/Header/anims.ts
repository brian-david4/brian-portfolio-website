const ease_in_out_circ = [0.61, 1, 0.88, 1];

export const opacity = {
  open: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease_in_out_circ },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.6, ease: ease_in_out_circ },
  },
};
