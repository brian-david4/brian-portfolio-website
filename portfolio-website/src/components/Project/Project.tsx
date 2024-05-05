import { Link } from "react-router-dom";
import { ProjectType } from "../../types";
import styles from "./proj.module.css";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <div className={styles.projectWrapper}>
        <div className={styles.title}>{project.title}</div>

        <div className={styles.mainDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          aliquid perspiciatis sed dolore! Sequi tempore, dicta eum similique
          harum unde nesciunt, excepturi quaerat aliquid omnis explicabo quae
          eaque commodi fugit?
        </div>

        <Link to={project.link} className={styles.linkBtn}>
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
