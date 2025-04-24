import { Images } from "../App/App.types";

export type ImageGalleryProps = {
  items: Images[];
  onImageClick: (url: string) => void;
};
