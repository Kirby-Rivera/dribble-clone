import FooterLinks from "./FooterLinks";

const FooterUpper = () => {
  return (
    <div className="footer-upper">
      <img className="main-svg" src="assets/dribbble.svg" alt="" />
      <div className="links">
        <FooterLinks title={"For designers"} />
        <FooterLinks title={"Hire talent"} />
        <FooterLinks title={"Inspiration"} />
        <FooterLinks title={"Advertisng"} />
        <FooterLinks title={"Blog"} />
        <FooterLinks title={"About"} />
        <FooterLinks title={"Careers"} />
        <FooterLinks title={"Support"} />
      </div>
      <div className="socials">
        <img className="social" src="assets/twitter.svg" alt="test" />
        <img className="social"  src="assets/fb.svg" alt="" />
        <img className="social"  src="assets/ig.svg" alt="" />
        <img className="social"  src="assets/pinterest.svg" alt="" />
      </div>
    </div>
  );
};

export default FooterUpper;
