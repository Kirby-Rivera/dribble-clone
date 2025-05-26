import HeroHeader from "../components/hero/HeroHeader";
import HeroSearchBar from "../components/hero/HeroSearchBar";
import HeroTrending from "../components/hero/HeroTrending";
import "../components/hero/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <HeroHeader />
      <HeroSearchBar placeholder={"What are you looking for?"} />
      <HeroTrending />
    </section>
  );
};

export default Hero;
