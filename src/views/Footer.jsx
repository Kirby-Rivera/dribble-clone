import "../components/footer/footer.scss";
import FooterUpper from "../components/footer/FooterUpper";
import FooterLower from "../components/footer/FooterLower";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterUpper />
      <FooterLower />
    </footer>
  );
};

export default Footer;
