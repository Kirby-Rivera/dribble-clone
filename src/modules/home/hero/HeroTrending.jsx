import styles from "./Hero.module.scss";

const HeroTrending = () => {
  const items = [
    "landing page",
    "e-commercce",
    "mobile app",
    "logo design",
    "dashboard",
    "icons",
  ];

  return (
    <div className={styles["hero-trending"]}>
      <span className={styles["hero-trending-head"]}>Trending searches</span>
      <div className={styles["hero-trending-items"]}>
        {items.map((items, index) => {
          return (
            <div key={index} className={styles["item"]}>
              {items}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTrending;
