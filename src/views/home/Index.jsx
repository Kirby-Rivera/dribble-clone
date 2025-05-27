import Nav from "../../modules/nav/Nav";
import Hero from "../../modules/hero/Hero";
import Gallery from "../../modules/gallery/Gallery";
import Carousel from "../../modules/carousel/Carousel";
import Layout from "../../pages/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Gallery />
        <Carousel />
      </Layout>
    </>
  );
};

export default index;
