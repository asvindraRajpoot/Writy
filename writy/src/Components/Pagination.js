import React from "react";

function Pagination(props) {
  const { articlesCount, articlesPerPage, activePage, updateCurrentPage } =
    props;
  // console.log(activePage, 'activePage')
  let numberOfPages = Math.ceil(articlesCount / articlesPerPage);
  let count = [];
  for (let i = 1; i <= numberOfPages; i++) {
    count.push(i);
  }
  return (
    <div className="pagination-box">
      <div>
        <h5
          onClick={() =>
            updateCurrentPage(activePage - 1 < 1 ? 1 : activePage - 1)
          }
        >
          Prev
        </h5>
      </div>
      <div className="flex wrap space-between button-box">
        {count.map((p) => {
          return (
            <button
              className={activePage === p ? "active-Page" : ""}
              onClick={() => updateCurrentPage(p)}
            >
              {p}
            </button>
          );
        })}
      </div>
      <div>
        <h5
          onClick={() =>
            updateCurrentPage(
              activePage + 1 > numberOfPages ? numberOfPages : activePage + 1
            )
          }
        >
          Next
        </h5>
      </div>
    </div>
  );
}

export default Pagination;
