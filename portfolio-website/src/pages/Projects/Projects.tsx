import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectContainer from "../../components/ProjectsContainer/ProjectContainer";
import styles from "./projs.module.css";
import Project from "../../components/Project/Project";
import { projects } from "../../data";

const Projects = () => {
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIntroPlaying(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.035, wheelMultiplier: 0.65 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className={styles.pageWrapper}>
        <AnimatePresence mode="wait">
          {introPlaying && <ProjectIntro title="projects" />}
        </AnimatePresence>

        <ProjectContainer>
          {projects.map((prj, idx) => {
            return <Project project={prj} key={`prj_${idx}`} />;
          })}
        </ProjectContainer>
      </div>
    </>
  );
};

export default Projects;
