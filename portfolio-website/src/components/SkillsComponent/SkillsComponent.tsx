import styles from "./skComp.module.css";

interface SkillsComponentProps {
  heading: string;
  body: string[];
}

const SkillsComponent = ({ heading, body }: SkillsComponentProps) => {
  return (
    <div className={styles.tool}>
      <h1 className={styles.heading}>{heading}</h1>
      <ul className={styles.toolBody}>
        {body.map((tool, idx) => (
          <li key={`$tool_${idx}`}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsComponent;
