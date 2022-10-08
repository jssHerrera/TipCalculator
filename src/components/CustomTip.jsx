import React from "react";

const CustomTip = ({ tip, addTip }) => {
  return (
    <input
      type="number"
      placeholder="Custom"
      className="custom-btn"
      value={tip.active === "custom" ? tip.value : ""}
      onChange={(e) => addTip("custom", e.target.value)}
      onClick={() => addTip("custom", "NaN")}
    />
  );
};

export default CustomTip;
