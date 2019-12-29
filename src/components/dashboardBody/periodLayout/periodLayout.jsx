import React from "react";
import periodData from "../../../data/periodData";

import "./periodLayout.css";

function PeriodLayout() {
  const MapData = data => {
    return data.map((item, index) => {
      return (
        <div className="period" key={index}>
          <div className="periodLeft">
            <p className="title">{item.title}</p>
      <p className="value">{item.currency?<span className="currency">N</span>:""}{item.value}</p>
          </div>
          <div className="chart"></div>
          <img
            src={"./assets/img/chart.png"}
            alt="chart"
            className="chart"
            style={{ width: 60 }}
          />
        </div>
      );
    });
  };
  return <div className="periodFlex">{MapData(periodData.Data)}</div>;
}

export default PeriodLayout;
