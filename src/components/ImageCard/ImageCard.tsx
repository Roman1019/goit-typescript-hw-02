import css from "./ImageCard.module.css";
import { PropsImageCard } from "./ImageCard.types";

export const ImageCard: React.FC<PropsImageCard> = ({ item, onImageClick }) => {
  return (
    <div>
      <img
        className={css.img}
        src={item.urls.small}
        alt=""
        width={360}
        height={100}
        onClick={(event: React.MouseEvent<HTMLImageElement>) =>
          onImageClick(item.urls.full)
        }
      />
    </div>
  );
};
