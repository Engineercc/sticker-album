import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Sticker packs</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
