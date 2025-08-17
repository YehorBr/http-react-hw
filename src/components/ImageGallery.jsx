import { ImageGalleryItem } from './ImageGalleryItem';
import { GalleryListStl } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <GalleryListStl>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </GalleryListStl>
    </>
  );
};
