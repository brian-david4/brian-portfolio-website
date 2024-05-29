import styles from "./hmFtFt.module.css";
import svgSrc from "/github-mark.svg";

const HomeFooterFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a className={styles.link} href="https://github.com/brian-david4/">
          <div className={styles.image}>
            <img src={svgSrc} alt="GitHub svg" />
          </div>
          GitHub
        </a>
      </footer>
    </>
  );
};

export default HomeFooterFooter;
