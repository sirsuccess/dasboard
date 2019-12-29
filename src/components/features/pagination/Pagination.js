import React from "react";
import "./Pagination.css";

const Pagination = ({ dataPerPage, totaltableData, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalNumberOfpage = Math.ceil(totaltableData / dataPerPage);
  for (let i = 1; i <= totalNumberOfpage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginate">
      <div>
        Showing {currentPage} to {totalNumberOfpage} of {totaltableData} entries
      </div>
      <ul className="pagination">
        <div
          className="tableNext"
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
          disabled
        >
          Previous
        </div>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <div onClick={() => paginate(number)} className="page-number">
              {number}
            </div>
          </li>
        ))}
        <div
          className="tableNext"
          onClick={() => {
            if (currentPage < totalNumberOfpage) {
              paginate(currentPage + 1);
            }
          }}
        >
          Next
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
