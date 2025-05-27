import { HERO_ASSETS } from "../../../assets/hero-assets";

const HeroSearchBar = ({ placeholder, isScrolled }) => {
  return (
    <div className={isScrolled ? "hero-search-scrolled" : "hero-search"}>
      <input
        className="hero-search-input"
        type="text"
        placeholder={placeholder}
      />
      <span className="hero-search-dropdown">
        Shots
        {HERO_ASSETS["chevron-down"]}
      </span>
      <button className="hero-search-btn">
        <img className="icon" src="assets/asset 101.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default HeroSearchBar;
