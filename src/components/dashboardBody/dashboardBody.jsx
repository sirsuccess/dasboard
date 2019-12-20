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
    <h3>Payments</h3>
    <div className="tableClass"><Table/></div> 
    </>
  );
}

export default DashboardBody;
