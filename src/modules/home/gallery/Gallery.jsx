import GalleryNav from "./GalleryNav";
import GalleryMain from "./GalleryMain";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <>
      <section className={styles["gallery"]}>
        <GalleryNav />
        <GalleryMain />
        <button className={styles["gallery-signup-btn"]}>Sign up to continue</button>
      </section>
    </>
  );
};

export default Gallery;
