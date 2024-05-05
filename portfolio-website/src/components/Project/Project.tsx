import styles from "./proj.module.css";

interface ProjectProps {
  title: string;
}

const Project = ({ title }: ProjectProps) => {
  return (
    <>
      <div className={styles.projectWrapper}>{title}</div>
    </>
  );
};

export default Project;
