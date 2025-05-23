const CarouselItem = ({ image, title }) => {
  return (
    <div className="carousel-item">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default CarouselItem;
