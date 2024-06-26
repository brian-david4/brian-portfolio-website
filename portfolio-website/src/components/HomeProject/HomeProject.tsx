import { useEffect, useState } from "react";
import styles from "./hmPr.module.css";

const HomeProject = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.project}
      >
        <div className={styles.projectTitle}>
          <div className={styles.titleText}>project title</div>
          <div
            className={`${styles.hoverFill} ${hovered ? styles.hovered : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default HomeProject;
