import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";
import HeaderNavMenu from "../HeaderNavMenu/HeaderNavMenu";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "./anims";
import { fadeIn, fadeInMenu } from "./headerAnims";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.homeLogoLink}>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="enter"
            className={styles.homeMenuLogo}
          >
            brian david
          </motion.div>
        </Link>

        <motion.div
          variants={fadeInMenu}
          initial="initial"
          animate="enter"
          onClick={() => setIsMenuActive(!isMenuActive)}
          className={styles.menuBurger}
        >
          <div
            className={`${styles.burger} ${
              isMenuActive ? styles.burgerActive : ""
            }`}
          ></div>

          <div className={styles.menu}>
            <motion.p
              variants={opacity}
              animate={isMenuActive ? "closed" : "open"}
            >
              menu
            </motion.p>
            <motion.p
              animate={!isMenuActive ? "closed" : "open"}
              variants={opacity}
            >
              close
            </motion.p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isMenuActive && (
          <HeaderNavMenu setMenuFalse={() => setIsMenuActive(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
