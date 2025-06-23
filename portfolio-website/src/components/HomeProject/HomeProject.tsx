import { useState } from "react";
import styles from "./hmPr.module.css";
import { ProjectType } from "../../types";
import Carousel from "../Carousel/Carousel";

interface HomeProjectProps {
  project: ProjectType;
}

const HomeProject = ({ project }: HomeProjectProps) => {
  const [hovered, setHovered] = useState(false);

  const isMobile = window.innerWidth <= 820;

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.project}
      >
        <div className={styles.projectTitle}>
          <Carousel
            items={[
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
            ]}
          />
          <div
            className={`${styles.hoverFill} ${hovered ? styles.hovered : ""} ${
              isMobile ? styles.hovered : ""
            }`}
            style={{ backgroundColor: project.colour }}
          />
        </div>

        <div className={styles.projectBody}>
          <div className={styles.description}>
            <div className={styles.heading}>
              <div className={styles.headingTxt}>description</div>
            </div>
            <div className={styles.descBox}>
              {project.desc}
              <span>* {project.contrib}</span>
            </div>
          </div>

          <div className={styles.techStack}>
            <div className={styles.heading}>
              <div className={styles.headingTxt}>techstack</div>
            </div>
            <div className={styles.techBox}>
              {project.techstack.map((tech, idx) => (
                <span className={styles.span} key={`t_${idx}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.source}>
            <div className={styles.heading}>
              <div className={styles.headingTxt}>source</div>
            </div>
            <div className={styles.visitCode}>
              <a
                target="_blank"
                className={styles.code}
                href={project.codeLink}
              >
                source code
              </a>
              <a target="_blank" className={styles.demo} href={project.link}>
                demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProject;
