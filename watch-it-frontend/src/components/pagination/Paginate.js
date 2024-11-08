import React, { useState } from "react";

const Paginate = ({ items, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {/* Render current page items */}
      {currentItems.map((item, index) => renderItem(item, index))}

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <p className="text-gray-700">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginate;
