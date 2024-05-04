import styles from "./prjIntro.module.css";
import ProjectIntroSection from "../ProjectIntroSection/ProjectIntroSection";
import { motion } from "framer-motion";

interface ProjectIntroProps {
  title: string;
}

const ProjectIntro = ({ title }: ProjectIntroProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        className={styles.introWrapper}
      >
        <div className={styles.introSection}>
          <ProjectIntroSection title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection bottom title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection bottom title={title} />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectIntro;
