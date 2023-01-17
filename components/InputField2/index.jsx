import React from "react";
import "./InputField2.css";

function InputField2(props) {
  const { storeAddressLine1, inputType, inputPlaceholder } = props;

  return (
    <div className="input-field-2">
      <div className="frame-185-2">
        <div className="store-address-line-1-2 inter-semi-bold-oxford-blue-14px">{storeAddressLine1}</div>
      </div>
      <div className="frame-183-3">
        <input
          className="address-line-1-2 inter-normal-santas-gray-14px"
          name="addressline1"
          placeholder={inputPlaceholder}
          type={inputType}
        />
      </div>
    </div>
  );
}

export default InputField2;
