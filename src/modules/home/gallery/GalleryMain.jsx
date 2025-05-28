import GalleryCards from "./GalleryCards";
import styles from "./Gallery.module.scss";
import itemContent from "./item-content.json"

const GalleryMain = () => {
  return (
    <div className={styles["gal-main-grid"]}>
      {itemContent.map((item, index) => {
        return (
          <GalleryCards
            key={index}
            image={item.image}
            profileImg={item.profileImg}
            user={item.user}
            tag={item.tag}
            likes={item.likes}
            views={item.views}
          />
        );
      })}
    </div>
  );
};

export default GalleryMain;
