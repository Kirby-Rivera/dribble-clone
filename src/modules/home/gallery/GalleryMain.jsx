import GalleryCards from "./GalleryCards";
import styles from "./Gallery.module.scss";
import itemContent from "./item-content.json";

const GalleryMain = () => {
  return (
    <div className={styles["gal-main-grid"]}>
      {itemContent.map((item, index) => {
        return <GalleryCards key={index} props={{ ...item }} />;
      })}
    </div>
  );
};

export default GalleryMain;
