import React from "react";
import "./progressBar.css"

const ProgressLine = ({width}) => {
    
  return <div className="outerLine"><div className="innerLine" style={{width:width}}></div></div>;
};

export default ProgressLine;
