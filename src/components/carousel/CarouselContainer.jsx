import CarouselItem from "./CarouselItem";

const CarouselContainer = () => {
  const styles = {
    "--width": "200px",
    "--height": "194px",
    "--quantity": "8"
  };

  return (
    <div className="carousel-container" style={styles}>
      <div className="carousel-list">
        <CarouselItem position={1} image={"assets/productdesign.gif"} title={"Product Design"} />
        <CarouselItem position={2} image={"assets/animation.webp"} title={"Animation"} />
        <CarouselItem position={3} image={"assets/branding.webp"} title={"Branding"} />
        <CarouselItem position={4} image={"assets/typography.webp"} title={"Typography"} />
        <CarouselItem position={5} image={"assets/print.webp"} title={"Print"} />
        <CarouselItem position={6} image={"assets/webdesign.webp"} title={"Web Design"} />
        <CarouselItem position={7} image={"assets/illustration.webp"} title={"Illustration"} />
        <CarouselItem position={8} image={"assets/mobile.webp"} title={"Mobile"} />
      </div>
    </div>
  );
};

export default CarouselContainer;
