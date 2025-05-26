const CarouselItem = ({ image, title, position }) => {
  const styles = {
    "--position": position
  }

  return (
    <div className="carousel-item" style={styles}>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default CarouselItem;
