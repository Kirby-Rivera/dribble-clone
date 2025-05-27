import styles from "./Hero.module.scss";
import { HERO_ASSETS } from "../../../assets/hero-assets";

const HeroSearchBar = ({ placeholder, isScrolled }) => {
  return (
    <div className={isScrolled ? styles["hero-search-scrolled"] : styles["hero-search"]}>
      <input
        className={styles["hero-search-input"]}
        type="text"
        placeholder={placeholder}
      />
      <span className={styles["hero-search-dropdown"]}>
        Shots
        {HERO_ASSETS["chevron-down"]}
      </span>
      <button className={styles["hero-search-btn"]}>
        <img className={styles["icon"]} src="assets/asset 101.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default HeroSearchBar;
