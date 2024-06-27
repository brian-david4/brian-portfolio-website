import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const useMousePosition = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const updateMousePosition = (e: MouseEvent) => {
    mouse.x.set(e.clientX);
    mouse.y.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return mouse;
};
