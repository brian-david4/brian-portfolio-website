import styles from "./aboutFoot.module.css";

const AboutFooter = () => {
  const links = [
    { title: "home", href: "/" },
    { title: "projects", href: "/projects" },
    { title: "contact", href: "/contact" },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.links}>
          {links.map((link, idx) => {
            return (
              <a className={styles.link} href={link.href} key={`aboutL_${idx}`}>
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutFooter;
