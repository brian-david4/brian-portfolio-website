import { motion } from "framer-motion";
import styles from "./navmenu.module.css";
import { background, navMenu } from "./navmenuAnim";
import NavBody from "./NavBody/NavBody";
import { NavLink } from "../../types";

interface HeaderNavMenuProps {
  setMenuFalse: () => void;
}

const HeaderNavMenu = ({ setMenuFalse }: HeaderNavMenuProps) => {
  const links: NavLink[] = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
    { title: "About Me", to: "/about" },
    { title: "Link", to: "/link" },
  ];
  return (
    <>
      <motion.div
        className={styles.navMenu}
        variants={navMenu}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <NavBody setMenuFalse={() => setMenuFalse()} links={links} />
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
