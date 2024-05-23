import { useState } from "react";
import ContactMouseEffect from "../ContactMouseEffect/ContactMouseEffect";
import styles from "./hmFt.module.css";

const HomeFooter = () => {
  const [contactHovered, setMouseHovered] = useState(false);
  return (
    <div className={styles.footer}>
      <ContactMouseEffect isTitleHovered={contactHovered} />
      <h1 className={styles.title}>{`Get in Touch ...`}</h1>
      <div className={styles.desc}>
        Talk to me to get to know more about me!
      </div>
      <div
        onMouseEnter={() => setMouseHovered(true)}
        onMouseLeave={() => setMouseHovered(false)}
        className={styles.contact}
      >
        <a href="mailto:bdavid1530@gmail.com">bdavid1530@gmail</a>
      </div>
    </div>
  );
};

export default HomeFooter;
