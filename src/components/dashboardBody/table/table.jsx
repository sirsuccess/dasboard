import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableData from "../../../data/transactionData";
import Button from "../../../commons/buttons";
import Circle from "../../../commons/circle";
import "./table.css";

const columns = [
  { id: "circle", label: "Item Type" },
  { id: "item", label: "" },
  {
    id: "price",
    label: "Price",
    minWidth: 70,
    format: value => value.toFixed(2)
  },
  {
    id: "transactionNo",
    label: "Transaction No",
    minWidth: 100,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "time",
    label: "Time",
    minWidth: 70,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "status",
    label: "",
    minWidth: 70,
    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "dropdown",
    label: "",
    minWidth: 10,
    align: "right",
    format: value => value.toFixed(2)
  }
];

function createData(
  circle,
  item,
  price,
  transactionNo,
  time,
  status,
  dropdown
) {
  return { circle, item, price, transactionNo, time, status, dropdown };
}

const dropdownArr = (
  <img
    src="./assets/icons/arrow.svg"
    alt="Bell icon"
    className="dropdownArr"
    style={{ width: 20 }}
  ></img>
);

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableData, setTableData] = useState(TableData.Payments);

  /**
   * handles table data in table row
   */
  const rows = tableData.map((dataItem, idex) => {
    let color;
    if (dataItem.status === "Pending") {
      color = "#EBC315";
    } else if (dataItem.status === "Reconciled") {
      color = "#27AE60";
    } else {
      color = "#C4C4C4";
    }
    return createData(
      <Circle
        circleProps={{ bgColor: "#7F8FA4", text: "VW", width: "30px", fontSize:"12px" }}
      />,
      dataItem.item,
      dataItem.price,
      dataItem.transactionNo,
      dataItem.time,
      <Button color={color} title={dataItem.status} />,
      dropdownArr
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const HandleSelectTableData = e => {
    const value = e.target.value;
    if (value === "all") {
      setTableData(TableData.Payments);
      return;
    }
    const filterData = TableData.Payments.filter(data => {
      return data.status === value;
    });
    setTableData(filterData);
  };
  const HandleSearchTableData = e => {
    const value = e.target.value;
    const filterData = TableData.Payments.filter(data => {
      return data.status.includes(value);
    });
    setTableData(filterData);
  };

  useEffect(() => {}, [tableData]);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <div className="headTable">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            className="pagination"
          />
          <div className="tableLookUp">
            <div className="searchTable">
              <img
                src={"./assets/icons/search.svg"}
                alt="search icon"
                style={{ width: 15 }}
              />{" "}
              <input
                type="text"
                placeholder="Search Payments...."
                onChange={HandleSearchTableData}
              />
            </div>
            <label htmlFor="SelectPayment">Show: {} </label>{" "}
            <select
              name="SelectPayment"
              id="SelectPayment"
              onChange={HandleSelectTableData}
            >
              <option value="all">All</option>
              <option value="Pending">Pending</option>
              <option value="Reconciled">Reconciled</option>
              <option value="un-reconciled">Un-reconciled</option>
              <option value="Settled">Settled</option>
              <option value="unSettled">unSettled</option>
            </select>
          </div>
        </div>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
