import styles from "./pScrTtl.module.css";

interface ProjectScrollTitle {
  title: string;
}

const ProjectScrollTitle = ({ title }: ProjectScrollTitle) => {
  return (
    <div className={styles.titleWrapper}>
      <span className={styles.title}>{title}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default ProjectScrollTitle;
