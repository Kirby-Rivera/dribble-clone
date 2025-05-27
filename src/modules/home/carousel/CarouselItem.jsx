import styles from './Carousel.module.scss'

const CarouselItem = ({ image, title, position }) => {
  const variable = {
    "--position": position
  }

  return (
    <div className={styles["carousel-item"]} style={variable}>
      <img src={image} alt="carousel-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default CarouselItem;
