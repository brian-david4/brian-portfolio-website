import styles from "./contact.module.css";
import ContactHello from "../../components/ContactHello/ContactHello";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";

const Contact = () => {
  return (
    <>
      <div className={styles.contactPage}>
        <ContactMouseEffect isTitleHovered={true} />

        <div className={styles.textFlex}>
          <div className={`${styles.text1Wrapper} ${styles.textWrapper}`}>
            <p className={styles.textInner}>I want to work with you!</p>
          </div>
          <div className={`${styles.text2Wrapper} ${styles.textWrapper}`}>
            <a
              className={`${styles.textInner} ${styles.email}`}
              href="mailto:bdavid1530@gmail.com"
            >
              bdavid1530@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.phrasesPosition}>
          <ContactHello />
        </div>
      </div>
    </>
  );
};

export default Contact;
