import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Carousel from "../Carousel/Carousel";

import { ProjectType } from "../../types";
import styles from "./proj.module.css";
import { motion } from "framer-motion";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const [projectRef, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });
  const imageArr = project.images ? project.images : [""];
  return (
    <>
      <motion.div
        animate={{ backgroundColor: inView ? "#ebe4d8" : "#00000" }}
        transition={{ duration: 1.2, ease: [0.5, 1, 0.89, 1] }}
        ref={projectRef}
        className={styles.projectWrapper}
      >
        <Carousel
          inView={inView}
          items={[project.title, project.title, project.title]}
        />

        <div
          className={`${styles.mainDesc} ${!inView ? styles.outOfView : ""}`}
        >
          {project.desc}
        </div>

        <Link target="_blank" to={project.link} className={styles.linkBtn}>
          <div className={styles.button}>
            <div className={styles.btnHeading}>Visit</div>
            <div className={styles.hoverFill} />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Project;
