import GalleryCards from "./GalleryCards";

const GalleryMain = () => {
  return (
    <div className="gal-main-grid">
      <GalleryCards
        image={"/test-img.png"}
        pfp={"/pfp.png"}
        user={"John Doe"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"/test-img-2.png"}
        pfp={"/pfp.png"}
        user={"Jane Doe"}
        tag={"TEAM"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"/test-img-3.png"}
        pfp={"/pfp.png"}
        user={"Kirby Rivera"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"/test-img-4.png"}
        pfp={"/pfp.png"}
        user={"Johnny Po"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
    </div>
  );
};

export default GalleryMain;
