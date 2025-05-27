import GalleryCards from "./GalleryCards";
import styles from "./Gallery.module.scss";

const GalleryMain = () => {
  const itemContent = [
    {
      image: "assets/test-img-1.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-2.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-3.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-4.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-5.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-6.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-7.jpeg",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-8.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-9.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-10.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-11.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
    {
      image: "assets/test-img-12.png",
      profileImg: "assets/pfp.png",
      user: "Lorem Ipsum",
      tag: "PRO",
      likes: "100",
      views: "1.0k",
    },
  ];

  return (
    <div className={styles["gal-main-grid"]}>
      {itemContent.map((item, index) => {
        return (
          <GalleryCards
            key={index}
            image={item.image}
            profileImg={item.profileImg}
            user={item.user}
            tag={item.tag}
            likes={item.likes}
            views={item.views}
          />
        );
      })}
    </div>
  );
};

export default GalleryMain;
