import { motion } from "framer-motion";
import styles from "./pjIntSec.module.css";

interface ProjectIntroSectionProps {
  title: string;
  bottom?: boolean;
}

const ProjectIntroSection = ({ title, bottom }: ProjectIntroSectionProps) => {
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: bottom ? "100%" : "-100%" }}
      transition={{ duration: 7, ease: [0.83, 0, 0.17, 1], delay: 1 }}
      className={`${styles.sectionInner} ${bottom ? styles.bottom : ""}`}
    >
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
      <h1 className={styles.projectFont}>{title}</h1>
    </motion.div>
  );
};

export default ProjectIntroSection;
