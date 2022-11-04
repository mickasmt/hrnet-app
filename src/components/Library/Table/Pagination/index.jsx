// import React from "react";

// function Pagination() {
//   return (
//     <nav
//       className="flex justify-between items-center pt-3"
//       aria-label="Table navigation"
//     >
//       <span className="text-gray-500">
//         Showing{" "}
//         <span className="font-semibold text-gray-900">1 to 10</span> of{" "}
//         <span className="font-semibold text-gray-900">11</span>
//         {" "}entries
//       </span>

//       {/* <span className="text-gray-700">Showing 1 to 10 of 11 entries</span> */}

//       {/* buttons */}
//       <ul className="inline-flex items-center -space-x-px">
//         <li className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
//           <span className="sr-only">Previous</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </li>
//         <li className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
//           1
//         </li>
//         <li className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
//           2
//         </li>
//         <li
//           aria-current="page"
//           className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700"
//         >
//           3
//         </li>

//         <li className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
//           <span className="sr-only">Next</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Pagination;

import classNames from "classnames";
import React, { useEffect, useState, useMemo } from "react";

const Pagination = ({
  total = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          className={classNames(
            "py-2 px-3 leading-tight border cursor-pointer",
            i === currentPage
              ? "text-blue-600 bg-blue-100 border-blue-300 hover:bg-blue-200 hover:text-blue-700"
              : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          )}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pages;
  }, [totalPages, currentPage]);

  if (totalPages === 0) return null;

  return (
    <nav className="flex justify-between items-center pt-3">
      <span className="text-gray-500">
        Showing <span className="font-semibold text-gray-900">1 to 10</span> of{" "}
        <span className="font-semibold text-gray-900">{total}</span> entries
      </span>

      {/* buttons */}
      <ul className="inline-flex items-center -space-x-px">
        <li
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="block py-2 px-3 ml-0 cursor-pointer leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>

        {paginationItems}

        <li
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="block py-2 px-3 leading-tight cursor-pointer text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
