import styles from "./home.module.css";

const Home2 = () => {
  return (
    <main className={styles.page}>
      <div className={styles.pageOne}>
        <section className={styles.sectionLeft}>
          <h2 className={styles.nameTitle}>BRIAN DAVID</h2>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            pariatur ex, quae rem voluptatibus atque ipsam repudiandae ratione
            nemo repellat?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa pariatur ex, quae rem voluptatibus atque ipsam
            repudiandae ratione nemo repellat?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa pariatur ex, quae rem
            voluptatibus atque ipsam repudiandae ratione nemo repellat? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            <br />
            <br />
            pariatur ex, quae rem voluptatibus atque ipsam repudiandae ratione
            nemo repellat?
          </p>
        </section>
        <section className={styles.sectionRight}></section>
      </div>
    </main>
  );
};

export default Home2;
