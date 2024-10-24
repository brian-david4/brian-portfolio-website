import { useState } from "react";
import { useSpring } from "framer-motion";

import styles from "./home.module.css";
import { projects } from "../../data";
import HomeProject from "../../components/HomeProject/HomeProject";
import ProjectVisitTrail from "../../components/ProjectVisitTrail/ProjectVisitTrail";

const Home2 = () => {
  const [hovered, setHovered] = useState(false);

  const springSettings = {
    stiffness: 150,
    damping: 40,
    mass: 0.5,
  };
  const mouse = {
    x: useSpring(0, springSettings),
    y: useSpring(0, springSettings),
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - 25;
    const targetY = clientY - 25;
    mouse.x.set(targetX);
    mouse.y.set(targetY);
  };
  return (
    <main onMouseMove={handleMouseMove} className={styles.page}>
      <ProjectVisitTrail hovered={hovered} mouse={mouse} />
      <div className={styles.pageOne}>
        <section className={styles.sectionLeft}>
          <h2 className={styles.nameTitle}>
            <span>Brian</span>
            <span>David</span>
          </h2>
          <p className={styles.about}>
            Front end <b>React Developer</b> with a focus on creating modern
            designs. I love the challenge of taking an idea and forming into an
            interactive experience and experimenting with effects.
            <br />
            <br />
            During other hours of life I like watching and playing football or
            my guitar, reading, or just creating.
            <br />
            <br />
          </p>
          <div className={styles.contact}>
            I want to work with you
            <span>
              <a href="mailto:bdavid1530@gmail.com">bdavid1530@gmail.com</a>
            </span>
          </div>
        </section>
        <section className={styles.sectionRight}>
          <section
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={styles.projects}
          >
            <div className={styles.projectTitle}>
              <div>selected works</div>
            </div>
            {projects.map((proj, idx) => (
              <HomeProject key={`hPj_${idx}`} project={proj} />
            ))}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Home2;
