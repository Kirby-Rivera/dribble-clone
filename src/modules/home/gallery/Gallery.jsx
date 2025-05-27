import GalleryNav from "./GalleryNav";
import GalleryMain from "./GalleryMain";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <>
      <section className={styles["gallery"]}>
        <GalleryNav />
      </section>
      <section className={styles["works"]}>
        <GalleryMain />
      </section>
    </>
  );
};

export default Gallery;
