import GalleryCards from "./GalleryCards";
import styles from "./Gallery.module.scss"

const GalleryMain = () => {
  return (
    <div className={styles["gal-main-grid"]}>
      <GalleryCards
        image={"assets/test-img-1.jpeg"}
        pfp={"assets/pfp.png"}
        user={"John Doe"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-2.jpeg"}
        pfp={"assets/pfp.png"}
        user={"Jane Doe"}
        tag={"TEAM"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-3.jpeg"}
        pfp={"assets/pfp.png"}
        user={"Kirby Rivera"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-4.jpeg"}
        pfp={"assets/pfp.png"}
        user={"Johnny Po"}
        tag={"PRO"}
        heartTitle={"123"}
        viewTitle={"13.4k"}
      />
      <GalleryCards
        image={"assets/test-img-5.jpeg"}
        pfp={"assets/pfp.png"}
        user={"LAIN DESIGN AGENCY"}
        tag={"TEAM"}
        heartTitle={"123"}
        viewTitle={"12.4k"}
      />
      <GalleryCards
        image={"assets/test-img-6.png"}
        pfp={"assets/pfp.png"}
        user={"HALO LAB"}
        tag={"TEAM"}
        heartTitle={"485"}
        viewTitle={"17.3k"}
      />
      <GalleryCards
        image={"assets/test-img-7.jpeg"}
        pfp={"assets/pfp.png"}
        user={"Seative Digital"}
        tag={"TEAM"}
        heartTitle={"1032"}
        viewTitle={"100.4k"}
      />
      <GalleryCards
        image={"assets/test-img-8.png"}
        pfp={"assets/pfp.png"}
        user={"Nixtio"}
        tag={"TEAM"}
        heartTitle={"212"}
        viewTitle={"13.5k"}
      />
      <GalleryCards
        image={"assets/test-img-9.png"}
        pfp={"assets/pfp.png"}
        user={"Ronas IT | UI/UX Team"}
        tag={"TEAM"}
        heartTitle={"145"}
        viewTitle={"9.4k"}
      />
      <GalleryCards
        image={"assets/test-img-10.png"}
        pfp={"assets/pfp.png"}
        user={"DIpa Inhouse"}
        tag={"TEAM"}
        heartTitle={"108"}
        viewTitle={"15.5k"}
      />
      <GalleryCards
        image={"assets/test-img-11.png"}
        pfp={"assets/pfp.png"}
        user={"DigiCo"}
        tag={"PRO"}
        heartTitle={"72"}
        viewTitle={"10.5k"}
      />
      <GalleryCards
        image={"assets/test-img-12.png"}
        pfp={"assets/pfp.png"}
        user={"Emote"}
        tag={"TEAM"}
        heartTitle={"116"}
        viewTitle={"10.5k"}
      />
    </div>
  );
};

export default GalleryMain;
