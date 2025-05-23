import GalleryNav from "../components/gallery/GalleryNav";
import GalleryMain from "../components/gallery/GalleryMain";
import '../components/gallery/gallery.scss'

const Gallery = () => {
  return (
    <section className="gallery">
      <GalleryNav />
      <GalleryMain />
    </section>
  );
};

export default Gallery;
