import { Link } from "react-router-dom";
import { ProjectType } from "../../types";
import styles from "./proj.module.css";
import Carousel from "../Carousel/Carousel";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const imageArr = project.images ? project.images : [""];
  return (
    <>
      <div className={styles.projectWrapper}>
        <Carousel items={[project.title, project.title, project.title]} />

        <div className={styles.mainDesc}>{project.desc}</div>

        <div className={styles.imagesBoth}>
          <div className={styles.imagesSide}>
            {imageArr.map(
              (img, idx) =>
                idx < 2 && (
                  <div className={styles.img} key={`img_${idx}`}>
                    <img src={img} />
                  </div>
                )
            )}
          </div>
          <div className={styles.imagesBttm}>
            {imageArr.map(
              (img, idx) =>
                idx > 1 && (
                  <div className={styles.img} key={`img_${idx}`}>
                    <img src={img} />
                  </div>
                )
            )}
          </div>
        </div>

        <Link target="_blank" to={project.link} className={styles.linkBtn}>
          <div className={styles.button}>
            <div className={styles.btnHeading}>Visit</div>
            <div className={styles.hoverFill} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Project;
