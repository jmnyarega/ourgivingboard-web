import React from "react";

const EnterGift = () => {
  const handleGift = () => {
    location.href = "/#/gift-order";
    location.reload();
  };

  return (
    <div className="element-box">
      <h3 className="label title">Enter Gift</h3>
      <p className="element-description">Gift to board</p>
      <button onClick={handleGift} className="btn btn-outline-primary">
        Enter
      </button>
    </div>
  );
};

export default EnterGift;
