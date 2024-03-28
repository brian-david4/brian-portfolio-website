import { motion } from "framer-motion";
import { headingAnim } from "./anims";
import styles from "./projHeading.module.css";
import { useInView } from "react-intersection-observer";

interface ProjectHeadingProps {
  title: string;
}

const ProjectHeading = ({ title }: ProjectHeadingProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <h1 ref={ref} className={styles.headingWrapper}>
      <motion.span
        variants={headingAnim}
        animate={inView ? "show" : "hidden"}
        className={styles.heading}
      >
        {title}
      </motion.span>
    </h1>
  );
};

export default ProjectHeading;
