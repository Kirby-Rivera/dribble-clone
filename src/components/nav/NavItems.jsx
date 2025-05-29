import HeroSearchBar from "../../modules/home/hero/HeroSearchBar";
import { VECTOR_ASSETS } from "../../assets/vector-assets";
import styles from "./Nav.module.scss";

const NavItems = ({ isScrolled }) => {
  const items = ["Explore", "Hire a Designer", "Find Jobs", "Blog"];

  return (
    <div className={styles["main"]}>
      <div className={styles["search-logo-section"]}>
        {VECTOR_ASSETS["dribbleLogo"]}
        {isScrolled && (
          <HeroSearchBar
            isScrolled={isScrolled}
            placeholder={"What are you looking for?"}
          />
        )}
      </div>
      <ul className={styles["main-item"]}>
        {items.map((item, index) => {
          return (
            <li className={styles["item"]}>
              {item}
              <div
                className={
                  index < 2 ? styles["item-show"] : styles["item-hide"]
                }
              >
                {VECTOR_ASSETS.downIcon}
              </div>
            </li>
          );
        })}
      </ul>
      <button className={styles["main-dd-md"]}>
        <hr />
        <hr />
        <hr />
      </button>
    </div>
  );
};

export default NavItems;
