import React from "react";
import "./MarketplaceIcon.css";

function MarketplaceIcon(props) {
  const { children } = props;

  return (
    <div className="marketplace-icon">
      <div className="place-2">{children}</div>
    </div>
  );
}

export default MarketplaceIcon;
