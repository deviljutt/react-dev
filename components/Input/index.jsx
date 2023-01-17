import React from "react";
import "./Input.css";

function Input(props) {
  const { inputType, inputPlaceholder } = props;

  return (
    <div className="field">
      <div className="frame-90">
        <div className="placeholder">
          <input className="placeholder-1" name="placeholder" placeholder={inputPlaceholder} type={inputType} />
        </div>
      </div>
    </div>
  );
}

export default Input;
