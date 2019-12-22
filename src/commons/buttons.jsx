import React from "react";

function Button({ color, title }) {
  return (
    <button
      className="btnDot"
      style={{ backgroundColor: "transperant", color: color }}
    >
      <div
        className="dot"
        style={{
          backgroundColor: color,
          width: "10px",
          height: "10px",
          top: "2px",
          right: "-2px"
        }}
      ></div>
      {title}
    </button>
  );
}

export default Button;
