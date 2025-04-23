import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <>
      <ul className={css.photoList}>
        {items.map((item) => (
          <li className={css.photoItem} key={item.id}>
            <ImageCard item={item} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
