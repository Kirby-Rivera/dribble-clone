import Nav from "../modules/nav/Nav";
import Footer from "../modules/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
