import { useState, useEffect } from "react";

const useGalleryScroll = ({ scrollContainerRef }) => {
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        setHideLeftArrow(container.scrollLeft === 0);
        setHideRightArrow(
          container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 10
        );
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return { hideLeftArrow, hideRightArrow, scrollLeft, scrollRight };
};

export default useGalleryScroll;
