import HeroSearchBar from "./HeroSearchBar";
import HeroTrending from "./HeroTrending";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-main">
        <h1 className="hero-main-head">Discover the world's top designers</h1>
        <h2 className="hero-main-subhead">
          Explore work from the most talented and accomplished designers ready
          to take on your next project
        </h2>
      </div>
      <HeroSearchBar placeholder={"What are you looking for?"} />
      <HeroTrending />
    </section>
  );
};

export default Hero;
