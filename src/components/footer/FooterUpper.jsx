import styles from "./Footer.module.scss";
import { FOOTER_DATA } from "./footer-data";

const FooterUpper = () => {
  return (
    <div className={styles["footer-upper"]}>
      <img className={styles["main-svg"]} src="assets/dribbble.svg" alt="" />
      <div className={styles["links"]}>
        {FOOTER_DATA.links.map((item, index) => {
          return (
            <a key={index} href="blank">
              {item}
            </a>
          );
        })}
      </div>
      <div className={styles["socials"]}>
        {FOOTER_DATA.socials.map((item, index) => {
          return <img key={index} className="social" src={item} alt="test" />;
        })}
      </div>
    </div>
  );
};

export default FooterUpper;
