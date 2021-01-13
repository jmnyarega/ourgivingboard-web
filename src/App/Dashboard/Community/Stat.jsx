import React from "react";

const Stat = () => {
  const handleCommunityStats = () => {
    location.href = "/#/community-stats";
    location.reload();
  };

  return (
    <div className="element-box">
      <h3 className="label title">Community Stats</h3>
      <p className="element-description">&nbsp;</p>
      <button
        className="btn btn-outline-primary"
        onClick={handleCommunityStats}
      >
        View Stats
      </button>
    </div>
  );
};

export default Stat;
