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
    threshold: 0.4,
    triggerOnce: false,
  });
  const imageArr = project.images ? project.images : [""];
  return (
    <>
      <motion.div
        animate={{ backgroundColor: inView ? "#ebe4d8" : "#00000" }}
        transition={{ duration: 1, ease: "linear" }}
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

        <div className={`${styles.images} ${!inView ? styles.outOfView : ""}`}>
          {imageArr.map((src, idx) => (
            <div key={`pjIm_${idx}`} className={styles.img}>
              <img src={src} />
            </div>
          ))}
        </div>

        <Link target="_blank" to={project.link} className={styles.linkBtn}>
          <div
            className={`${styles.button} ${!inView ? styles.outOfView : ""}`}
          >
            <div className={styles.btnHeading}>Visit</div>
            <div className={styles.hoverFill} />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Project;
