import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ imageUrl, onClose }) {
  return (
    <Modal
      className={css.modalWindow}
      isOpen={imageUrl}
      onRequestClose={onClose}
      contentLabel="Image Preview"
      overlayClassName={css.overlay}
    >
      <img src={imageUrl} alt="Large preview" className="modal-image" />
    </Modal>
  );
}
