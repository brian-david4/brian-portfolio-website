import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./hps.module.css";
import { useRef } from "react";
import ProjectScrollTitle from "../ProjectScrollTitle/ProjectScrollTitle";

interface HomeProjectScroll {
  title: string;
  link: string;
}

const HomeProjectScroll = ({ title, link }: HomeProjectScroll) => {
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start 0.95", "start -0.1"],
  });
  const position = useTransform(scrollYProgress, [0, 1], ["-40%", "-10%"]);

  return (
    <>
      <a target="_blank" className={styles.projectLink} href={link}>
        <div ref={projectRef} className={styles.project}>
          <motion.div
            style={{ x: position }}
            className={styles.titlesContainer}
          >
            <ProjectScrollTitle title={title} />
            <ProjectScrollTitle title={title} />
            <ProjectScrollTitle title={title} />
          </motion.div>
        </div>
      </a>
    </>
  );
};

export default HomeProjectScroll;
