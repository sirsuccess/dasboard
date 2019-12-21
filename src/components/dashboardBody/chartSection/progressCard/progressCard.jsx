import React from "react";
import Data from "../../../../commons/progressData";
import ProgressLine from "../../../../commons/progressBar"

import "./progressCard.css";

function ProgressCard() {
  const MapData = data => {
    return data.map((item, index) => {
      return (
        <div className="cardLayout" key={index}>
          <div className="cardTitle">{item.title}</div>
          <div className="ProgressBar"><ProgressLine/></div>
          <div className="Pending">{item.Pending} : <span>{item.PendingValue}</span></div>
          <div className="Reconciled">{item.Reconciled} : <span>{item.ReconciledValue}</span></div>
      <div className="Total">{item.Total}:  <span>{item.PendingValue+item.ReconciledValue}</span></div>
        </div>
      );
    });
  };
  return (
    <div className="ProgressCard">
      {MapData(Data.Orders)}
      {MapData(Data.Payments)}
    </div>
  );
}

export default ProgressCard;
