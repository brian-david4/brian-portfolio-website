import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./MouseTrail.module.css";

const MouseTrail = () => {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      className={styles.mouseTrail}
      animate={{ left: x - 50 / 2, top: y - 50 / 2 }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      hello
    </motion.div>
  );
};

export default MouseTrail;
