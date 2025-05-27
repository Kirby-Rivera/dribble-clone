import styles from "./footer.module.scss";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <FooterUpper />
      <FooterLower />
    </footer>
  );
};

export default Footer;
