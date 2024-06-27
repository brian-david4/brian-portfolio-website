import { MotionValue, motion } from "framer-motion";
import styles from "./projVT.module.css";

interface ProjectVisitTrailProps {
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
}

const ProjectVisitTrail = ({ mouse }: ProjectVisitTrailProps) => {
  return (
    <>
      <motion.div style={{ x: mouse.x, y: mouse.y }} className={styles.trail} />
    </>
  );
};

export default ProjectVisitTrail;
