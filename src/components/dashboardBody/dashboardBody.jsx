import React from 'react';

import PeriodLayout from "./periodLayout/periodLayout"
import ChartSection from "./chartSection/chartSection"
import Table from "./table"
import './dashboardBody.css';

function DashboardBody() {
  return (
    <>
    <PeriodLayout/>
    <ChartSection/>
    <h3 style={{fontSize:"36px", marginLeft:"0.5em", marginBottom:"1em"}}>Payments</h3>
    <div className="tableClass"><Table/></div> 
    </>
  );
}

export default DashboardBody;
