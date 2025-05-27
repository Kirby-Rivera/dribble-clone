import Button from "./Button";

const NavAuth = ({ isScrolled }) => {
  return (
    <div className="nav-auth">
      <img
        className={isScrolled ? "hide" : "show"}
        src="assets/asset 101.svg"
        alt="search icon"
      />
      <Button title={"Sign up"} />
      <Button title={"Log in"} isLogInBtn={true} />
    </div>
  );
};

export default NavAuth;
