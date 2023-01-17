import React from "react";
import "./AddCover.css";

function AddCover(props) {
  const { addCover } = props;

  return (
    <div className="add-cover">
      <img className="vector" src="/img/vector-20.svg" alt="Vector" />
      <div className="add-cover-1">{addCover}</div>
    </div>
  );
}

export default AddCover;
