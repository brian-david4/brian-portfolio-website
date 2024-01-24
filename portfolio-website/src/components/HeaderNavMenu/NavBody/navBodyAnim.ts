const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export const hoveredAnim = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
    transform: "scale(1)",
  },
  hovered: {
    filter: "blur(2.5px)",
    transform: "scale(0.9)",
    opacity: 0.7,
    transition: transition,
  },
  inactive: {
    filter: "blur(0px)",
    transform: "scale(1)",
    opacity: 1,
    transition: transition,
  },
};
