import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <nav className="flex justify-between font-semibold mt-4">
      <button
        className={`px-4 py-2 bg-blue-600 text-white border rounded-md ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
         Previous
      </button>
      <button
        className={`px-4 py-2 bg-blue-600 text-white border rounded-md ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
       ..Next
      </button>
    </nav>
  );
};

export default Pagination;
