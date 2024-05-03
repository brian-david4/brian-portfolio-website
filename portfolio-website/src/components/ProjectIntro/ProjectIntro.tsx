import styles from "./prjIntro.module.css";
import ProjectIntroSection from "../ProjectIntroSection/ProjectIntroSection";

interface ProjectIntroProps {
  title: string;
}

const ProjectIntro = ({ title }: ProjectIntroProps) => {
  return (
    <>
      <div className={styles.introWrapper}>
        <div className={styles.introSection}>
          <ProjectIntroSection title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection bottom title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection title={title} />
        </div>

        <div className={styles.introSection}>
          <ProjectIntroSection bottom title={title} />
        </div>
      </div>
    </>
  );
};

export default ProjectIntro;
