import Item from "./Item";
import HeroSearchBar from "../hero/HeroSearchBar";
import { NAV_ASSETS } from "../../assets/nav-assets";

const NavItems = ({ isScrolled }) => {
  const items = ["Explore", "Hire a Designer", "Find Jobs", "Blog"];

  return (
    <div className="main">
      <div className="search-logo-section">
        {NAV_ASSETS["dribble-logo"]}
        {isScrolled && (
          <HeroSearchBar
            isScrolled={isScrolled}
            placeholder={"What are you looking for?"}
          />
        )}
      </div>
      <ul className="main-item">
        {items.map((item, index) => {
          return <Item key={index} title={item} isDropdown={index < 2} />;
        })}
      </ul>
      <button className="main-dd-md">{NAV_ASSETS.ewan}</button>
    </div>
  );
};

export default NavItems;
