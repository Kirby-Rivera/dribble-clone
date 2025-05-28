import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.scss";
import carouselItems from "./carousel-content.json";

const CarouselContainer = () => {
  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-list"]}>
        {carouselItems.map((item, index) => {
          return <CarouselItem key={index} props={{ ...item }} />;
        })}
      </div>
    </div>
  );
};

export default CarouselContainer;
