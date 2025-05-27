const HeroTrending = () => {
  const items = [
    "landing page",
    "e-commercce",
    "mobile app",
    "logo design",
    "dashboard",
    "icons",
  ];

  return (
    <div className="hero-trending">
      <span className="hero-trending-head">Trending searches</span>
      <div className="hero-trending-items">
        {items.map((items, index) => {
          return (
            <div key={index} className="item">
              {items}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTrending;
