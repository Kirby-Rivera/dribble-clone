const Button = ({ title, isLogInBtn = false }) => {
  return (
    <button className={isLogInBtn ? "nav-auth-login-btn" : "nav-auth-btn"}>
      {title}
    </button>
  );
};

export default Button;
