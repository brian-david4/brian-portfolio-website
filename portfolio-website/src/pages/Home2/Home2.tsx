import HomeProject from "../../components/HomeProject/HomeProject";
import styles from "./home.module.css";
import { projects } from "../../data";
import { useSpring } from "framer-motion";
import ProjectVisitTrail from "../../components/ProjectVisitTrail/ProjectVisitTrail";
import { useState } from "react";
import HomeFooter from "../../components/HomeFooter/HomeFooter";

const Home2 = () => {
  const [hovered, setHovered] = useState(false);
  const [footerHovered, setFooterHovered] = useState(false);

  const handleFooterEnter = () => {
    setFooterHovered(true);
  };

  const handleFooterLeave = () => {
    setFooterHovered(false);
  };
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
          <h2 className={styles.nameTitle}>BRIAN DAVID</h2>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            pariatur ex, quae rem voluptatibus atque ipsam repudiandae ratione
            nemo repellat?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa pariatur ex, quae rem voluptatibus atque ipsam
            repudiandae ratione nemo repellat?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa pariatur ex, quae rem
            voluptatibus atque ipsam repudiandae ratione nemo repellat? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            <br />
            <br />
            pariatur ex, quae rem voluptatibus atque ipsam repudiandae ratione
            nemo repellat?
          </p>
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
      <div className={styles.pageTwo}>
        <HomeFooter
          handleMouseEnter={handleFooterEnter}
          handleMouseLeave={handleFooterLeave}
          footerHovered={footerHovered}
        />
      </div>
    </main>
  );
};

export default Home2;
