import { useState } from "react";
import GalleryItems from "./GalleryItems";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "./Modal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const viewImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid md:grid-cols-4">
      {GalleryItems.map((image, key) => {
        return (
          <div
            key={key}
            onClick={() => viewImage(image)}
            className="hover:border-2 hover:border-red-600"
          >
            <LazyLoadImage
              height={"100%"}
              effect="blur"
              src={image}
              className="h-full cursor-pointer"
              alt="Gallery Image"
              placeholderSrc={image}
            />
          </div>
        );
      })}
      {selectedImage && (
        <Modal imageUrl={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
}
