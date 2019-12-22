import React from "react";
import "./progressBar.css"

const ProgressLine = ({width}) => {
  console.log("this is width",width);
  
  return <div className="outerLine"><div className="innerLine" style={{width:width}}></div></div>;
};

export default ProgressLine;
