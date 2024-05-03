import styles from "./projs.module.css";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";

const Projects = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        {/* <motion.h1
          className={styles.projectTitle}
          variants={projTitle}
          initial="initial"
          animate="animate"
        >
          projects
        </motion.h1> */}
        <ProjectIntro title="projects" />
      </div>
    </>
  );
};

export default Projects;
