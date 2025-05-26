import NavItems from "../components/nav/NavItems";
import NavAuth from "../components/nav/NavAuth";
import "../components/nav/nav.scss";
import { useState, useEffect } from 'react'

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollY < 400 ? "nav" : "nav-scrolled"}>
      <NavItems isScrolled={scrollY < 100 ? false : true}/>
      <NavAuth isScrolled={scrollY < 100 ? true : false} />
    </nav>
  );
};

export default Nav;
