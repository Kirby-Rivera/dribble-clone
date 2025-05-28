import Item from "./Item";
import HeroSearchBar from "../../modules/home/hero/HeroSearchBar";
import { NAV_ASSETS } from "../../assets/nav-assets";
import styles from "./Nav.module.scss";

const NavItems = ({ isScrolled }) => {
  const items = ["Explore", "Hire a Designer", "Find Jobs", "Blog"];

  return (
    <div className={styles["main"]}>
      <div className={styles["search-logo-section"]}>
        {NAV_ASSETS["dribbleLogo"]}
        {isScrolled && (
          <HeroSearchBar
            isScrolled={isScrolled}
            placeholder={"What are you looking for?"}
          />
        )}
      </div>
      <ul className={styles["main-item"]}>
        {items.map((item, index) => {
          return <Item key={index} title={item} isDropdown={index < 2} />;
        })}
      </ul>
      <button className={styles["main-dd-md"]}>
        {/* {NAV_ASSETS.burgerMenu} */}
        <hr />
        <hr />
        <hr />
      </button>
    </div>
  );
};

export default NavItems;
