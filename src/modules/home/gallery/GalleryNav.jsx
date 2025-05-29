import { useRef } from "react";
import { VECTOR_ASSETS } from "../../../assets/vector-assets";
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
    <div className={styles["gallery-nav"]}>
      <Button
        className={styles["gallery-nav-title"]}
        title={"Popular"}
        asset={VECTOR_ASSETS["downIcon"]}
      />
      <span className={styles["horizontal-line"]} />
      <div className={styles["gallery-nav-navs"]}>
        {!hideLeftArrow && (
          <Button
            className={styles["gallery-nav-navs-btn-right"]}
            onClick={scrollLeft}
            asset={"assets/chevron-left.svg"}
            forNav={true}
          />
        )}
        {!hideRightArrow && (
          <Button
            className={styles["gallery-nav-navs-btn-left"]}
            onClick={scrollRight}
            asset={"assets/chevron-right.svg"}
            forNav={true}
          />
        )}
      </div>
      <div className={styles["gallery-nav-items"]} ref={scrollContainerRef}>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles["gallery-nav-items-item"]}>
              {item}
            </div>
          );
        })}
      </div>
      <Button
        className={styles["gallery-nav-filter"]}
        title={"Filter"}
        asset={VECTOR_ASSETS.filter}
      />
    </div>
  );
};

export default GalleryNav;
