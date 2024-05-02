import { motion } from "framer-motion";

import { projTitle } from "./anims";
import { projects } from "../../data";
import styles from "./projs.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <motion.h1
          className={styles.projectTitle}
          variants={projTitle}
          initial="initial"
          animate="animate"
        >
          projects
        </motion.h1>

        <div className={styles.pages}>
          {projects.map((project, idx) => {
            return (
              <div
                style={{ backgroundColor: project.colour }}
                key={`pj_${idx}`}
                className={styles.page}
              >
                {project.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
