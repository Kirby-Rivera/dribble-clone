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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
      <button className="hero-search-btn">
        <img className="icon" src="assets/asset 101.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default HeroSearchBar;
