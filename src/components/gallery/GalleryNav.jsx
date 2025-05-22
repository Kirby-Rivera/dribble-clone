import GalleryItem from "./GalleryItem";
import { useRef, useEffect, useState } from "react";

const GalleryNav = () => {
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        setHideLeftArrow(container.scrollLeft === 0);
        setHideRightArrow(
          container.scrollLeft + container.clientWidth >= container.scrollWidth
        );
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="gallery-main">
      <button className="gallery-main-title">
        Popular{" "}
        <svg
          className="drpdwn"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="gallery-main-navs">
        {!hideLeftArrow && (
          <button className="gallery-main-navs-btn-right" onClick={scrollLeft}>
            <img src="/chevron-left.svg" alt="" />
          </button>
        )}
        {!hideRightArrow && (
          <button className="gallery-main-navs-btn-left" onClick={scrollRight}>
            <img src="/chevron-right.svg" alt="" />
          </button>
        )}
      </div>
      <div className="gallery-main-items" ref={scrollContainerRef}>
        <GalleryItem title={"Discover"} />
        <GalleryItem title={"Branding"} />
        <GalleryItem title={"Illustration"} />
        <GalleryItem title={"Mobile"} />
        <GalleryItem title={"Print"} />
        <GalleryItem title={"Product Design"} />
        <GalleryItem title={"Typography"} />
        <GalleryItem title={"Animation"} />
        <GalleryItem title={"Web Design"} />
      </div>
      <button className="gallery-main-filter">
        Filter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="black"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"
            datalabel="path"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default GalleryNav;
