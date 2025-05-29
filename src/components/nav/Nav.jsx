import NavItems from "./NavItems";
import NavAuth from "./NavAuth";
import styles from "./Nav.module.scss";
import useNavScroll from "./useNavScroll";

const Nav = () => {
  const scrollY = useNavScroll();

  return (
    <nav className={scrollY < 400 ? styles["nav"] : styles["nav-scrolled"]}>
      <NavItems isScrolled={scrollY < 100 ? false : true} />
      <NavAuth isScrolled={scrollY < 100 ? true : false} />
    </nav>
  );
};

export default Nav;
