import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableData from "../../commons/transactionData";
import Button from "../../commons/buttons";

const columns = [
  { id: "item", label: "Item Type", minWidth: 70 },
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

function createData(item, price, transactionNo, time, status, dropdown) {
  return { item, price, transactionNo, time, status, dropdown };
}
const blackCircle = ""
const dropdownArr = (
  <img
    src="./assets/icons/arrow-down.svg"
    alt="Bell icon"
    className="dropdownArr"
    style={{ width: 20 }}
  ></img>
);

/**   
 * handles table data in table row
 */
const rows = TableData.Payments.map((dataItem, idex) => {
  let color;
  if (dataItem.status === "Pending") {
    color = "#EBC315";
  } else if (dataItem.status === "Reconciled") {
    color = "#27AE60";
  } else {
    color = "#C4C4C4";
  }
  return createData(
    `${blackCircle} ${dataItem.item}`,
    dataItem.price,
    dataItem.transactionNo,
    dataItem.time,
    <Button color={color} title={dataItem.status} />,
    dropdownArr
  );
});

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
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
        rowsPerPageOptions={[10, 25, 100]}
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
