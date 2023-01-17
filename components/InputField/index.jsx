import React from "react";
import "./InputField.css";

function InputField(props) {
  const { storeAddressLine1, inputType, inputPlaceholder } = props;

  return (
    <div className="input-field-1">
      <div className="frame-185-1">
        <div className="store-address-line-1-1 inter-semi-bold-oxford-blue-14px">{storeAddressLine1}</div>
        <img className="frame-2" src="/img/frame-31.svg" alt="Frame" />
      </div>
      <div className="frame-183-2">
        <input
          className="address-line-1-1 inter-normal-santas-gray-14px"
          name="addressline1"
          placeholder={inputPlaceholder}
          type={inputType}
          required
        />
      </div>
    </div>
  );
}

export default InputField;
