import React from "react";
import "./Badge.css";

function Badge(props) {
  const { label, xmark, className } = props;

  return (
    <div className={`badge ${className || ""}`}>
      <div className="frame-197">
        <div className="label">{label}</div>
      </div>
      <div className="xmark">{xmark}</div>
    </div>
  );
}

export default Badge;
