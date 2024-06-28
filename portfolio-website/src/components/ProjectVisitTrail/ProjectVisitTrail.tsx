import { MotionValue, motion } from "framer-motion";
import styles from "./projVT.module.css";

interface ProjectVisitTrailProps {
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
  hovered: boolean;
}

const ProjectVisitTrail = ({ mouse, hovered }: ProjectVisitTrailProps) => {
  const opacity: number = hovered ? 1 : 0;
  const scale: number = hovered ? 1 : 0.2;
  return (
    <>
      <motion.div
        animate={{ opacity, scale }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
        style={{ x: mouse.x, y: mouse.y }}
        className={styles.trail}
      />
    </>
  );
};

export default ProjectVisitTrail;
