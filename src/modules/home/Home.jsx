import Layout from "../../components/layout/Layout";
import Hero from "../home/hero/Hero";
import Gallery from "../home/gallery/Gallery";
import Carousel from "../home/carousel/Carousel";

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
