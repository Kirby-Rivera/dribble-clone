import styles from "./gallery.module.scss";

const GalleryCards = ({ image, pfp, user, tag, heartTitle, viewTitle }) => {
  return (
    <div className={styles["gal-card-main"]}>
      <div className={styles["gal-card-main-img-container"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["gal-card-main-content-container"]}>
        <div className={styles["gal-card-user"]}>
          <img src={pfp} alt="" />
          <h4>{user}</h4>
          <span>{tag}</span>
        </div>
        <div className={styles["gal-card-stats"]}>
          <img src="assets/heart.svg" alt="" />
          <p className="hearts">{heartTitle}</p>
          <img src="assets/eye.svg" alt="" />
          <p className="views">{viewTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
