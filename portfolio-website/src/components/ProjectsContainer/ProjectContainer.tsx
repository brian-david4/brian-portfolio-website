import { ProjectType } from "../../types";
import styles from "./prj.module.css";

interface ProjectProps {
  project?: ProjectType;
}

const Project = ({}: ProjectProps) => {
  return (
    <>
      <div className={styles.pageBackground}>
        <div className={styles.bubble}>
          <div className={styles.bubbleInner}>
            <div className={styles.divvie}>
              <h1>heloooo</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
