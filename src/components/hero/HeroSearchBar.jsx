import React from "react";

const HeroSearchBar = ({ placeholder }) => {
  return (
    <div className="hero-search">
      <input className="hero-search-input" type="text" placeholder={placeholder}/>
      <span className="hero-search-dropdown">
        Shots{" "}
        <svg
          className="drpdwn"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
      <button className="hero-search-btn">
        <img className="icon" src="/asset 101.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default HeroSearchBar;
