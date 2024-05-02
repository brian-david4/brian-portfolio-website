import { ProjectType } from "../../types";
import styles from "./prj.module.css";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <div className={styles.page}>{project.title}</div>
    </>
  );
};

export default Project;
