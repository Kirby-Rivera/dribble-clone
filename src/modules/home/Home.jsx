import Layout from "components/layout/Layout";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
import Carousel from "./carousel/Carousel";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Carousel />
    </Layout>
  );
};

export default Home;
