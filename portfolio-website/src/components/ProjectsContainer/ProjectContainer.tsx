import { ProjectType } from "../../types";
import styles from "./projCont.module.css";

interface ProjectProps {
  project?: ProjectType;
  children: React.ReactNode;
}

const ProjectContainer = ({ children }: ProjectProps) => {
  return (
    <>
      <div className={styles.bubble}>{children}</div>
    </>
  );
};

export default ProjectContainer;
