import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";

const Modal = () => {
  const appCtx = useContext(AppContext);

  const modalHandler = () => {
    appCtx.closeModal();
  };

  return (
    <div
      className={`modal-overlay ${appCtx.isModalOpen && "show-modal"}`}
      onClick={modalHandler}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={modalHandler}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
