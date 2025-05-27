import { useRef } from "react";
import { GALLERY_ASSETS } from "../../assets/gallery-assets";
import useGalleryScroll from "./hoooks/useGalleryScroll";
import styles from "./gallery.module.scss";

const GalleryNav = () => {
  const scrollContainerRef = useRef(null);
  const { hideLeftArrow, hideRightArrow, scrollLeft, scrollRight } =
    useGalleryScroll({ scrollContainerRef });

  function NavButtons({ className, onClick, asset }) {
    return (
      <button className={className} onClick={onClick}>
        <img src={asset} alt=":>" />
      </button>
    );
  }

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
      <button className={styles["gallery-main-title"]}>
        Popular {GALLERY_ASSETS["chevron-down"]}
      </button>
      <div className={styles["gallery-main-navs"]}>
        {!hideLeftArrow && (
          <NavButtons
            className={"gallery-main-navs-btn-right"}
            onClick={scrollLeft}
            asset={"assets/chevron-left.svg"}
          />
        )}
        {!hideRightArrow && (
          <NavButtons
            className={"gallery-main-navs-btn-left"}
            onClick={scrollRight}
            asset={"assets/chevron-right.svg"}
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
      <button className={styles["gallery-main-filter"]}>
        Filter
        {GALLERY_ASSETS.filter}
      </button>
    </div>
  );
};

export default GalleryNav;
