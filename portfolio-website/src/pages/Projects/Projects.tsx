import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectContainer from "../../components/ProjectsContainer/ProjectContainer";
import styles from "./projs.module.css";
import Project from "../../components/Project/Project";

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

        <ProjectContainer>
          <Project title="hello" />
        </ProjectContainer>
      </div>
    </>
  );
};

export default Projects;
