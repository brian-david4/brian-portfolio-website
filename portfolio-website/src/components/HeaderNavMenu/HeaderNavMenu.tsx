import { motion } from "framer-motion";
import styles from "./navmenu.module.css";
import { background, navMenu } from "./navmenuAnim";
import { Link } from "react-router-dom";

const HeaderNavMenu = () => {
  return (
    <>
      <motion.div
        className={styles.navMenu}
        variants={navMenu}
        animate="animate"
        exit="exit"
      >
        <div className={styles.allLinks}>
          <div className={styles.linkRow1}>
            <Link to="/" className={styles.link}>
              <h1>Home</h1>
            </Link>
            <Link to="/projects" className={styles.link}>
              <h1>Projects</h1>
            </Link>
          </div>

          <div className={styles.linkRow2}>
            <Link to="/about" className={styles.link}>
              <h1>About</h1>
            </Link>
          </div>

          <div className={styles.linkRow3}>
            <Link to="/contact" className={styles.link}>
              <h1>Contact</h1>
            </Link>
            <Link to="/link" className={styles.link}>
              <h1>link</h1>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.background}
        variants={background}
        animate="animate"
        exit="exit"
      ></motion.div>
    </>
  );
};

export default HeaderNavMenu;
