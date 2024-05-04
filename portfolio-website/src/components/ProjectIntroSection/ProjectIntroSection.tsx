import { motion } from "framer-motion";
import styles from "./pjIntSec.module.css";

interface ProjectIntroSectionProps {
  title: string;
  bottom?: boolean;
}

const ProjectIntroSection = ({ title, bottom }: ProjectIntroSectionProps) => {
  const array = new Array(52);
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: bottom ? "100%" : "-100%" }}
      transition={{ duration: 8, ease: [0.83, 0, 0.17, 1], delay: 1 }}
      className={`${styles.sectionInner} ${bottom ? styles.bottom : ""}`}
    >
      {Array.from({ length: array.length }).map((_, idx) => {
        return (
          <h1
            key={`ti_${idx}`}
            className={`${styles.projectFont} ${
              idx % 2 === 0 ? styles.underline : ""
            }`}
          >
            {title}
          </h1>
        );
      })}
    </motion.div>
  );
};

export default ProjectIntroSection;
