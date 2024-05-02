import { motion } from "framer-motion";
import { useState } from "react";

import { projTitle } from "./anims";
import { projects } from "../../data";
import styles from "./projs.module.css";
import Project from "../../components/Project/Project";
import { InView } from "react-intersection-observer";

const Projects = () => {
  const [pageColour, setPageColour] = useState("#ffffe6");

  return (
    <>
      <motion.div
        initial={{ backgroundColor: pageColour }}
        animate={{ backgroundColor: pageColour }}
        transition={{ duration: 2.3, ease: [0.25, 1, 0.5, 1] }}
        className={styles.pageWrapper}
      >
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
              <InView
                onChange={() => setPageColour(project.colour)}
                threshold={0.9}
                triggerOnce={false}
                key={`pj_${idx}`}
              >
                <Project project={project} />
              </InView>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
