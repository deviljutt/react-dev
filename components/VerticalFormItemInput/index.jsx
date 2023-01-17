import React from "react";
import Input from "../Input";
import "./VerticalFormItemInput.css";

function VerticalFormItemInput(props) {
  const { title, message, inputProps } = props;

  return (
    <div className="vertical-form-item-input">
      <div className="label-1">
        <div className="title-1">{title}</div>
        <img className="info-circle" src="/img/infocircle-2.svg" alt="InfoCircle" />
      </div>
      <Input inputType={inputProps.inputType} inputPlaceholder={inputProps.inputPlaceholder} />
      <div className="message">
        <p className="message-1">{message}</p>
      </div>
    </div>
  );
}

export default VerticalFormItemInput;
