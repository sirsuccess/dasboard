import React from "react";
import color from "@material-ui/core/colors/amber";

function Button({color, title}) {
    console.log("this is color",color);
    
  return (
    <button
      className="btnDot"
      style={{ backgroundColor: "transperant", color: color  }}
    >
      <div className="dot" style={{ backgroundColor: color, width: "10px",height:"10px", top: "2px", right:"-2px"}}></div>
      {title}
    </button>
  );
}

export default Button;
