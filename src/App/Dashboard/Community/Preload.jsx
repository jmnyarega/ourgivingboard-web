import React from "react";

const Preload = () => {
  const handlePreload = () => {
    location.href = "/#/preload-gift";
    location.reload();
  };

  return (
    <div className="element-box">
      <h3 className="label title">Preload Gift</h3>
      <p className="element-description">Increase net pending</p>
      <button className="btn btn-outline-primary" onClick={handlePreload}>
        Preload
      </button>
    </div>
  );
};

export default Preload;
