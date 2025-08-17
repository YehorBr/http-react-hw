import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <>
      <GalleryItem>
        <GalleryImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => openModal(image.largeImageURL)}
        />
      </GalleryItem>
    </>
  );
};
