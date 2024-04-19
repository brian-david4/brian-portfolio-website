import styles from "./aboutSection.module.css";

interface AboutPageSectionProps {
  children?: React.ReactNode;
}

const AboutPageSection = ({ children }: AboutPageSectionProps) => {
  return (
    <div className={`${styles.sectionWrapper} ${styles.blur}`}>{children}</div>
  );
};

export default AboutPageSection;
