import React from "react";
import "./ProgressBar.css"

const ProgressLine = ({width}) => {
    
  return <div className="outerLine"><div className="innerLine" style={{width:width}}></div></div>;
};

export default ProgressLine;
