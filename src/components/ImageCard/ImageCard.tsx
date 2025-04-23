import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImageClick }) {
  return (
    <div>
      <img
        className={css.img}
        src={item.urls.small}
        alt=""
        width={360}
        height={100}
        onClick={() => onImageClick(item.urls.full)}
      />
    </div>
  );
}
