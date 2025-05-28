import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.scss";

const CarouselContainer = () => {
  const carouselItems = [
    {
      position: 1,
      image: "assets/productdesign.gif",
      title: "Product Design",
    },
    {
      position: 2,
      image: "assets/animation.webp",
      title: "Animation",
    },
    {
      position: 3,
      image: "assets/branding.webp",
      title: "Branding",
    },
    {
      position: 4,
      image: "assets/typography.webp",
      title: "Typography",
    },
    {
      position: 5,
      image: "assets/print.webp",
      title: "Print",
    },
    {
      position: 6,
      image: "assets/webdesign.webp",
      title: "Web Design",
    },
    {
      position: 7,
      image: "assets/illustration.webp",
      title: "Illustration",
    },
    {
      position: 8,
      image: "assets/mobile.webp",
      title: "Mobile",
    },
  ];

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-list"]}>
        {carouselItems.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              position={item.position}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselContainer;
