import React from 'react';

import PeriodLayout from "./periodLayout/periodLayout"
import ChartSection from "./chartSection/chartSection"
import Table from "./table/table"
import TableCustome from "./tableCostume"
import './dashboardBody.css';

function DashboardBody() {
  return (
    <>
    <PeriodLayout/>
    <ChartSection/>
    <p className="paymentClass">Payments</p>
    {/* <div className="tableClass"><Table/></div>  */}
    <TableCustome/>
    </>
  );
}

export default DashboardBody;
