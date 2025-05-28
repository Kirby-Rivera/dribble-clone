import { useRef } from "react";
import { GALLERY_ASSETS } from "../../../assets/gallery-assets";
import useGalleryScroll from "./useGalleryScroll";
import styles from "./Gallery.module.scss";

function Button({ className, onClick, asset, forNav = false, title }) {
  return forNav ? (
    <button className={className} onClick={onClick}>
      <img src={asset} alt="nav-icon" />
    </button>
  ) : (
    <button className={className}>
      {title}
      {asset}
    </button>
  );
}

const GalleryNav = () => {
  const scrollContainerRef = useRef(null);
  const { hideLeftArrow, hideRightArrow, scrollLeft, scrollRight } =
    useGalleryScroll({ scrollContainerRef });

  const items = [
    "Discover",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Animation",
    "Web Design",
  ];

  return (
    <div className={styles["gallery-main"]}>
      <Button
        className={styles["gallery-main-title"]}
        title={"Popular"}
        asset={GALLERY_ASSETS["chevron-down"]}
      />
      <span className={styles["horizontal-line"]} />
      <div className={styles["gallery-main-navs"]}>
        {!hideLeftArrow && (
          <Button
            className={styles["gallery-main-navs-btn-right"]}
            onClick={scrollLeft}
            asset={"assets/chevron-left.svg"}
            forNav={true}
          />
        )}
        {!hideRightArrow && (
          <Button
            className={styles["gallery-main-navs-btn-left"]}
            onClick={scrollRight}
            asset={"assets/chevron-right.svg"}
            forNav={true}
          />
        )}
      </div>
      <div className={styles["gallery-main-items"]} ref={scrollContainerRef}>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles["gallery-main-items-item"]}>
              {item}
            </div>
          );
        })}
      </div>
      <Button
        className={styles["gallery-main-filter"]}
        title={"Filter"}
        asset={GALLERY_ASSETS.filter}
      />
    </div>
  );
};

export default GalleryNav;
