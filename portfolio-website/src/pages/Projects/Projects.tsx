import { motion } from "framer-motion";
import styles from "./projs.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <motion.h1
          className={styles.projectTitle}
          initial={{
            y: 250,
            scale: 4.5,
            letterSpacing: "0.5ch",
          }}
          animate={{
            y: "var(--header-height)",
            scale: 2,
            letterSpacing: "0.1ch",
          }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.2, 1], delay: 1 }}
        >
          projects
        </motion.h1>
      </div>
    </>
  );
};

export default Projects;
