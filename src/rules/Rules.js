import React from "react";
import "./Rules.css";

export const Rules = () => {
  return (
    <div className="rules-container modal" id="rules-modal">
      <div className="rules-modal-content">
        <span className="rules-close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};
