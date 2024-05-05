import { motion } from "framer-motion";
import { ProjectType } from "../../types";
import styles from "./prj.module.css";

interface ProjectProps {
  project?: ProjectType;
}

const Project = ({}: ProjectProps) => {
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
        <div className={styles.bubble}>
          <div className={styles.divvie}>
            <h1>heloooo</h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
