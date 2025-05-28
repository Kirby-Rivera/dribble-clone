import styles from "./Carousel.module.scss";

const CarouselItem = ({ props }) => {
  const { image, title, position } = props;
  
  const variable = {
    "--position": position,
  };

  return (
    <div className={styles["carousel-item"]} style={variable}>
      <img src={image} alt="carousel-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default CarouselItem;
