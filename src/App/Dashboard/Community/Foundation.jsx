import React from "react";

const Foundation = () => {
  const handleFundationGift = () => {
    location.href = "/#/foundation-gift";
    location.reload();
  };

  return (
    <div className="element-box">
      <h3 className="label title">Foundation Gifting</h3>
      <p className="element-description">Foundation gifting</p>
      <button className="btn btn-outline-primary" onClick={handleFundationGift}>
        Gift
      </button>
    </div>
  );
};

export default Foundation;
