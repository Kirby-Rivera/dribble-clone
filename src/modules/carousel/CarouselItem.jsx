import styles from './carousel.module.scss'

const CarouselItem = ({ image, title, position }) => {
  const variable = {
    "--position": position
  }

  return (
    <div className={styles["carousel-item"]} style={variable}>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default CarouselItem;
