import React from "react";
import Circle from "./Circle";

function Button({ color, title }) {
  return (
    <button
      className="btnDot"
      style={{ backgroundColor: "transperant", color: color }}
    >
      <Circle
        circleProps={{
          bgColor: color,
          text: "",
          width: "10px",
          fontSize: "12px"
        }}
      />
      {title}
    </button>
  );
}

export default Button;
