import CarouselItem from "./CarouselItem";

const CarouselContainer = () => {
  return (
    <div className="carousel-cont">
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
      <CarouselItem image={"/carousel-test.png"} title={"Lorem ipsum"} />
    </div>
  );
};

export default CarouselContainer;
