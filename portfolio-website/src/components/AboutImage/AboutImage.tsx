import styles from "./abtImg.module.css";

interface AboutImageProps {
  src: string;
}

const AboutImage = ({ src }: AboutImageProps) => {
  return (
    <div className={styles.imgWrapper}>
      <img
        className={`${styles.img}  ${styles.back}`}
        src={src}
        alt="hobby image"
      />
      <img
        className={`${styles.img} ${styles.front}`}
        src={src}
        alt="hobby image"
      />
    </div>
  );
};

export default AboutImage;
