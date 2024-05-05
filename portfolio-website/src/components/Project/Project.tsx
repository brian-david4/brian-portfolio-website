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
        <Link to={project.link} className={styles.linkBtn}>
          <button>visit</button>
        </Link>
      </div>
    </>
  );
};

export default Project;
