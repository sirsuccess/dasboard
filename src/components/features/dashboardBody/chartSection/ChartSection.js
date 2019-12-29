import React from 'react';
import ProgressCard from "./progressCard/ProgressCard"
import Chart from "./chart/Chart"
import './ChartSection.css';


function ChartSection() {
  
  return (
    <div className="ChartSection">
    <div className="chart2">
    <Chart/>
    </div>
    <div className="progress">
    <ProgressCard/>
    </div>
    
    
    </div>
  );
}

export default ChartSection;
