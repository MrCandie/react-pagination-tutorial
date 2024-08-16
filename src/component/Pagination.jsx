import React from "react";

export default function Pagination({
  length,
  perPage,
  currentPage,
  setCurrentPage,
}) {
  const pages = length / perPage;
  const arr = Array.from({ length: pages });

  return (
    <div>
      {arr.map((el, i) => (
        <button
          style={{
            backgroundColor: currentPage === i + 1 ? "green" : "white",
          }}
          onClick={() => setCurrentPage(i + 1)}
          key={i}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
