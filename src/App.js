import "./App.scss";
import Nav from "./views/Nav";
import Hero from "./views/Hero";
import Gallery from "./views/Gallery";
import Carousel from "./views/Carousel";
import Footer from './views/Footer'

function App() {
  return (
    // <h1 className="heading">Hello World!</h1>
    <>
      <Nav />
      <Hero />
      <Gallery />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
