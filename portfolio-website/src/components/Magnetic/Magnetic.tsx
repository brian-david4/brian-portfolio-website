import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./magnetic.module.css";

interface MouseFollowTextProps {
  children: string | React.ReactNode;
}

const Magnetic = ({ children }: MouseFollowTextProps) => {
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
      animate={isHovered ? { x: position.x, y: position.y } : {}}
      transition={{ type: "spring", stiffness: 75, damping: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
