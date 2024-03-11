import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./MouseTrail.module.css";

const MouseTrail = () => {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      className={styles.mouseTrail}
      animate={{ left: x - 10 / 2, top: y - 10 / 2 }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      <div className={styles.trailInner}></div>
    </motion.div>
  );
};

export default MouseTrail;
