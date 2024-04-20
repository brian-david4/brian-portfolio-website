import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./followText.module.css";

interface MouseFollowTextProps {
  children: string;
}

const MouseFollowText = ({ children }: MouseFollowTextProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      ref.current?.getBoundingClientRect() as DOMRect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseEnter = () => {
    setIsHovered(true);
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={styles.followText}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      animate={
        isHovered
          ? { x: position.x, y: position.y }
          : {
              opacity: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }
      }
      transition={{ type: "spring", stiffness: 150, damping: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default MouseFollowText;
