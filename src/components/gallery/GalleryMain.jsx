import GalleryCards from "./GalleryCards";

const GalleryMain = () => {
  return (
    <div className="gal-main-grid">
      <GalleryCards
        image={"assets/test-img.png"}
        pfp={"assets/pfp.png"}
        user={"John Doe"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-2.png"}
        pfp={"assets/pfp.png"}
        user={"Jane Doe"}
        tag={"TEAM"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-3.png"}
        pfp={"assets/pfp.png"}
        user={"Kirby Rivera"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-4.png"}
        pfp={"assets/pfp.png"}
        user={"Johnny Po"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
    </div>
  );
};

export default GalleryMain;
