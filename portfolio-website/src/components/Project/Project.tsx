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

        <div
          className={`${styles.sideSection} ${!inView ? styles.outOfView : ""}`}
        >
          <div className={styles.techStack}>
            <div className={styles.heading}>
              Tech stack
              <img className={styles.arrow} src="/arrow-svg.svg" alt="arrow" />
            </div>
            <div className={styles.content}>
              {project.techstack.map((tech, idx) => (
                <span className={styles.listItem} key={`t_${idx}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a
            target="_blank"
            className={styles.sourceCode}
            href={project.codeLink}
          >
            View code
          </a>
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
