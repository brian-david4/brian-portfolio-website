import styles from "./abtPos.module.css";

interface AboutPositionProps {
  children: React.ReactNode;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width?: number;
  height?: number;
  minimum?: boolean;
  px?: boolean;
}

const AboutPosition = ({
  children,
  left,
  right,
  top,
  bottom,
  width,
  height,
  minimum,
  px,
}: AboutPositionProps) => {
  return (
    <div
      style={{
        right: `${right}%`,
        left: `${left}%`,
        top: `${top}%`,
        bottom: `${bottom}%`,
        height: `${px ? `${height}px` : `${height}%`}`,
        width: `${px ? `${width}px` : `${width}%`}`,
      }}
      className={`${styles.position} ${minimum ? styles.min : ""}`}
    >
      {children}
    </div>
  );
};

export default AboutPosition;
