import { motion } from "framer-motion";
import styles from "./navmenu.module.css";
import { background, navMenu } from "./navmenuAnim";
import HeaderNavLink from "../HeaderNavLink/HeaderNavLink";

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
            <HeaderNavLink to="/" title="Home" />
            <HeaderNavLink to="/projects" title="Projects" />
          </div>

          <div className={styles.linkRow2}>
            <HeaderNavLink to="/about" title="About" />
          </div>

          <div className={styles.linkRow3}>
            <HeaderNavLink to="/contact" title="Contact" />
            <HeaderNavLink to="/" title="Link" />
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
