import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";
Modal.setAppElement("#root");

export const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  onClose,
}) => {
  return (
    <Modal
      className={css.modalWindow}
      isOpen={Boolean(imageUrl)}
      onRequestClose={onClose}
      contentLabel="Image Preview"
      overlayClassName={css.overlay}
    >
      <img
        src={imageUrl || undefined}
        alt="Large preview"
        className="modal-image"
      />
    </Modal>
  );
};
