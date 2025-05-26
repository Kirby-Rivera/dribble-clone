import Trending from "./Trending"

const HeroTrending = () => {
  return (
    <div className="hero-trending">
        <span className="hero-trending-head">Trending searches</span>
        <div className="hero-trending-items">
            <Trending title={"landing page"}/>
            <Trending title={"e-commerce"}/>
            <Trending title={"mobile app"}/>
            <Trending title={"logo design"}/>
            <Trending title={"dashboard"}/>
            <Trending title={"icons"}/>
        </div>
    </div>
  )
}

export default HeroTrending