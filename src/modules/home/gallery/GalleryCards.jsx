import styles from "./Gallery.module.scss";

const GalleryCards = ({ image, pfp, user, tag, heartTitle, viewTitle }) => {
  return (
    <div className={styles["gal-card-main"]}>
      <div className={styles["gal-card-main-img-container"]}>
        <img src={image} alt="gallery image" />
      </div>
      <div className={styles["gal-card-main-content-container"]}>
        <div className={styles["gal-card-user"]}>
          <img src={pfp} alt="profile image" />
          <h4>{user}</h4>
          <span>{tag}</span>
        </div>
        <div className={styles["gal-card-stats"]}>
          <img src="assets/heart.svg" alt="heart icon" />
          <p className="hearts">{heartTitle}</p>
          <img src="assets/eye.svg" alt="view icon" />
          <p className="views">{viewTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
