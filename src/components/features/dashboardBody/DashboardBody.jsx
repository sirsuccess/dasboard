import React from 'react';

import PeriodLayout from "./periodLayout/PeriodLayout"
import ChartSection from "./chartSection/ChartSection"
import TableCustome from "./table/TableCostume"
import './DashboardBody.css';

function DashboardBody() {
  return (
    <>
    <PeriodLayout/>
    <ChartSection/>
    <p className="paymentClass">Payments</p>
    <TableCustome/>
    </>
  );
}

export default DashboardBody;
