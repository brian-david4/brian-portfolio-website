import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import Project from "../../components/ProjectsContainer/ProjectContainer";
import styles from "./projs.module.css";

const Projects = () => {
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIntroPlaying(false), 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={styles.pageWrapper}>
        <AnimatePresence mode="wait">
          {introPlaying && <ProjectIntro title="projects" />}
        </AnimatePresence>

        <Project />
      </div>
    </>
  );
};

export default Projects;
