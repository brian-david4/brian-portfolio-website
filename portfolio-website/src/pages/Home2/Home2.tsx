import styles from "./home.module.css";
import { projects } from "../../data";
import HomeProject from "../../components/HomeProject/HomeProject";
import { motion } from "framer-motion";

const Home2 = () => {
  const isMobile = window.innerWidth < 820;
  return (
    <main className={styles.page}>
      <div className={styles.pageOne}>
        <section className={styles.sectionLeft}>
          <h2 className={styles.nameTitle}>
            <span>Brian</span>
            <span>David</span>
          </h2>

          <div className={styles.contact}>
            <span>
              <a href="mailto:bdavid1530@gmail.com">bdavid1530@gmail.com</a>
            </span>
          </div>
        </section>
        <section className={styles.sectionRight}>
          <section className={styles.projects}>
            <div className={styles.projectTitle}>
              <div>selected works</div>
            </div>
            {projects.map((proj, idx) => (
              <HomeProject key={`hPj_${idx}`} project={proj} />
            ))}
          </section>
        </section>
      </div>

      {isMobile && (
        <motion.span
          style={{
            position: "absolute",
            bottom: "10px",
            left: "42.5%",
            fontFamily: "Neue Montreal Book",
            letterSpacing: "0.2ch",
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
        >
          scroll
        </motion.span>
      )}
    </main>
  );
};

export default Home2;
