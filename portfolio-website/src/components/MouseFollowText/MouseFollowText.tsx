import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./followText.module.css";

interface MouseFollowTextProps {
  children: string;
  // isHovered: boolean;
}

const MouseFollowText = ({ children }: MouseFollowTextProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      ref.current?.getBoundingClientRect() as DOMRect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={styles.followText}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 50, damping: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default MouseFollowText;
