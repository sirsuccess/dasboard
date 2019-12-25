import React from "react";
import Data from "../../../../data/progressData";
import ProgressLine from "../../../../commons/progressBar/progressBar"

import "./progressCard.css";

function ProgressCard() {
  const MapData = data => {
    return data.map((item, index) => {
      const totalItem = item.PendingValue+item.ReconciledValue
      const progressValue = item.ReconciledValue/totalItem*100
      return (
        <div className="cardLayout" key={index}>
          <div className="cardTitle">{item.title}</div>
          <div className="ProgressBar"><ProgressLine width={`${progressValue}%`}/></div>
          <div className="Pending">{item.Pending}: <span>{item.PendingValue}</span></div>
          <div className="Reconciled">{item.Reconciled}: <span>{item.ReconciledValue}</span></div>
      <div className="Total">{item.Total}:  <span>{totalItem}</span></div>
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
