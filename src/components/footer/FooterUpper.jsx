import styles from "./footer.module.scss";

const FooterUpper = () => {
  const links = [
    "For Designers",
    "Hire Talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];
  const socials = [
    "assets/twitter.svg",
    "assets/fb.svg",
    "assets/ig.svg",
    "assets/pinterest.svg",
  ];

  return (
    <div className={styles["footer-upper"]}>
      <img className={styles["main-svg"]} src="assets/dribbble.svg" alt="" />
      <div className={styles["links"]}>
        {links.map((item, index) => {
          return (
            <a key={index} href="blank">
              {item}
            </a>
          );
        })}
      </div>
      <div className={styles["socials"]}>
        {socials.map((item, index) => {
          return <img key={index} className="social" src={item} alt="test" />;
        })}
      </div>
    </div>
  );
};

export default FooterUpper;
