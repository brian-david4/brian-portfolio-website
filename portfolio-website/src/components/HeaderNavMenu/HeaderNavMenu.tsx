import { motion } from "framer-motion";
import styles from "./navmenu.module.css";
import { background, navMenu } from "./navmenuAnim";

const HeaderNavMenu = () => {
  return (
    <>
      <motion.div
        className={styles.navMenu}
        variants={navMenu}
        animate="animate"
        exit="exit"
      >
        hi
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
