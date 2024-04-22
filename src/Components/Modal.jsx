import React from "react";
import "./Modal.css";

export default function Modal({ show, onClose, children, selectedVideo }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="content">
        {React.cloneElement(children, { selectedVideo })}
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
}
