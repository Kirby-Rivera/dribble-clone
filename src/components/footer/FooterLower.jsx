import Lists from "./FooterList";
import styles from "./Footer.module.scss";
import { FOOTER_DATA } from "./footer-data";

const FooterLower = () => {
  return (
    <div className={styles["footer-lower"]}>
      <Lists list={FOOTER_DATA.legal} />
      <Lists list={FOOTER_DATA.tags} />
    </div>
  );
};

export default FooterLower;
