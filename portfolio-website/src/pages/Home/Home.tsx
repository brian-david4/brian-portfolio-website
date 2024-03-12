import styles from "./home.module.css";

const Home = () => {
  const title =
    "React developer with enthusiasm for design and creating simple yet beautiful websites.";
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
