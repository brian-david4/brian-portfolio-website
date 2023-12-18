import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.homeLogoLink}>
          <div className={styles.homeMenuLogo}>Brian David</div>
        </Link>
        <div
          onClick={() => setIsMenuActive(!isMenuActive)}
          className={styles.menuBurger}
        >
          <div
            className={`${styles.burger} ${
              isMenuActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.menu}>menu</div>
        </div>
      </div>
    </div>
  );
};

export default Header;