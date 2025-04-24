import { Images } from "../App/App.types";

export type PropsImageCard = {
  item: Images;
  onImageClick: (url: string) => void;
};
