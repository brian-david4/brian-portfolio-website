import { motion } from "framer-motion";
import { ProjectType } from "../../types";
import styles from "./projCont.module.css";

interface ProjectProps {
  project?: ProjectType;
  children: React.ReactNode;
}

const ProjectContainer = ({ children }: ProjectProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 4, ease: [0.76, 0, 0.24, 1], delay: 4 },
        }}
        className={styles.pageBackground}
      >
        <div className={styles.bubble}>{children}</div>
      </motion.div>
    </>
  );
};

export default ProjectContainer;
