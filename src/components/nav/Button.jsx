import styles from "./Nav.module.scss";

const Button = ({ title, isLogInBtn = false }) => {
  return (
    <button className={isLogInBtn ? styles["nav-auth-login-btn"] : styles["nav-auth-btn"]}>
      {title}
    </button>
  );
};

export default Button;
