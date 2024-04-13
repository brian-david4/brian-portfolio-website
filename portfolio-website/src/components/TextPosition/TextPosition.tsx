import styles from "./txtPos.module.css";

interface TextPositionProps {
  children: React.ReactNode;
  right?: boolean;
}

const TextPosition = ({ children, right }: TextPositionProps) => {
  const style = right ? styles.posRight : styles.posLeft;

  return <div className={style}>{children}</div>;
};

export default TextPosition;
