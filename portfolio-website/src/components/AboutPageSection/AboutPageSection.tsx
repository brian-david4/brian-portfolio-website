import { useState } from "react";
import styles from "./aboutSection.module.css";

interface AboutPageSectionProps {
  children?: React.ReactNode;
  title?: string;
}

const AboutPageSection = ({ children, title }: AboutPageSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1 className={`${styles.title} ${isHovered ? styles.hovered : ""}`}>
        {title}
      </h1>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.sectionWrapper} ${styles.blur}`}
      >
        {children}
      </div>
    </>
  );
};

export default AboutPageSection;
