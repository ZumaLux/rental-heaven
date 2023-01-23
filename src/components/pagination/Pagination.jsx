import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  //Calculates the number of pages
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (currentPage > pageNumbers.length) {
      paginate(1);
    }
  }, [paginate]);

  return (
    <nav className="pagination">
      <div className="pagination__pages">
        <span
          className="pagination__ctrl"
          onClick={() => (currentPage > 1 ? paginate(currentPage - 1) : "")}
        >
          {"<<"}
        </span>

        {pageNumbers.map((number) => (
          <li key={number} className={`pagination__ctrl ${number == currentPage ? "active" : ""}`}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}

        <span
          className="pagination__ctrl"
          onClick={() => (currentPage < pageNumbers.length ? paginate(currentPage + 1) : "")}
        >
          {">>"}
        </span>
      </div>
    </nav>
  );
};

export default Pagination;
