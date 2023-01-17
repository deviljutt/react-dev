import React from "react";
import "./ToggleButton.css";

function ToggleButton(props) {
  const { className } = props;

  return (
    <div className={`toggle-button-1 ${className || ""}`}>
      <div className="button"></div>
    </div>
  );
}

export default ToggleButton;
