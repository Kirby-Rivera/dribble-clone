import Button from "./Button";
import styles from "./Nav.module.scss";

const NavAuth = ({ isScrolled }) => {
  return (
    <div className={styles["nav-auth"]}>
      <img
        className={isScrolled ? styles["hide"] : styles["show"]}
        src="assets/asset 101.svg"
        alt="search icon"
      />
      <Button title={"Sign up"} />
      <Button title={"Log in"} isLogInBtn={true} />
    </div>
  );
};

export default NavAuth;
