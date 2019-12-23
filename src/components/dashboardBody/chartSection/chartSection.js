import React from 'react';
import ProgressCard from "./progressCard/progressCard"
import Chart from "./chart/chart"
import './chartSection.css';


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
