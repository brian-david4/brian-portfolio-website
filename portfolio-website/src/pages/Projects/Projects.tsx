import styles from "./projs.module.css";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    setTimeout(() => setIntroPlaying(false), 3000);
  }, []);
  return (
    <>
      <div className={styles.pageWrapper}>
        <AnimatePresence mode="wait">
          {introPlaying && <ProjectIntro title="projects" />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Projects;
