import React from "react";
import Button from "./Button";
import CustomTip from "./CustomTip";

const TipButtons = ({ tip, addTip , setReset }) => {
  console.log(tip);
  return (
    <div className="btn-wrapper">
      <Button
        value={5}
        addTip={addTip}
        setReset={setReset}
        selected={tip.active === "5"}
      />

      <Button
        value={10}
        addTip={addTip}
        setReset={setReset}
        selected={tip.active === "10"}
      />
      <Button
        value={15}
        addTip={addTip}
        setReset={setReset}
        selected={tip.active === "15"}
      />
      <Button
        value={25}
        addTip={addTip}
        setReset={setReset}
        selected={tip.active === "25"}
      />
      <Button
        value={50}
        addTip={addTip}
        setReset={setReset}
        selected={tip.active === "50"}
      />
      <CustomTip tip={tip} addTip={addTip}/>
    </div>
  );
};

export default TipButtons;
