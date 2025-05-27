import styles from './Carousel.module.scss'
import CarouselContainer from './CarouselContainer'

const Carousel = () => {
  return (
    <section className={styles["carousel"]}>
        <CarouselContainer />
    </section>
  )
}

export default Carousel