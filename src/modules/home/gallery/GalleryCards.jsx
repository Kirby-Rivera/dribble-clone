import styles from "./Gallery.module.scss";

function OverlayBtn(props) {
  const { svgIcon } = props;

  return (
    <button className={styles["content-btn"]}>
      <img src={svgIcon} alt="overlay-icon" />
    </button>
  );
}

const GalleryCards = (props) => {
  const { image, profileImg, user, tag, likes, views } = props;

  return (
    <div className={styles["gal-card-main"]}>
      <div className={styles["gal-card-main-img-container"]}>
        <img src={image} alt="gallery canvas" />
        <div className={styles["gal-card-main-overlay"]}>
          <div className={styles["content"]}>{user}</div>
          <div className={styles["content-container"]}>
            <OverlayBtn svgIcon={"assets/save-icon.svg"} />
            <OverlayBtn svgIcon={"assets/heart.svg"} />
          </div>
        </div>
      </div>
      <div className={styles["gal-card-main-content-container"]}>
        <div className={styles["gal-card-user"]}>
          <img src={profileImg} alt="profile icon" />
          <h4>{user}</h4>
          <span>{tag}</span>
        </div>
        <div className={styles["gal-card-stats"]}>
          <img src="assets/heart.svg" alt="heart icon" />
          <p className="hearts">{likes}</p>
          <img src="assets/eye.svg" alt="view icon" />
          <p className="views">{views}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
