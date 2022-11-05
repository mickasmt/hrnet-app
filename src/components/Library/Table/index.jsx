import React, { useState } from "react";
import Select from "../Select";
import Pagination from "./Pagination";
import Search from "./Search";


function Table({ data = 0, columns, selectDisplayItems }) {
  // const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(selectDisplayItems[0].value);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {/* Select | Search */}
      <div className="flex justify-between items-center pb-3">
        <div className="flex space-x-1.5 items-center text-gray-700">
          <span>Show</span>
          <Select
            selected={selectDisplayItems[0].value}
            options={selectDisplayItems}
            onChange={value => setItemsPerPage(value)}
            styles="w-16 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1"
            
          />
          <span>entries</span>
        </div>

        <Search />
      </div>

      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                  <tr>
                    {columns.map((column) => {
                      return (
                        <th
                        key={column.title}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-5 py-3 border-r"
                        >
                          {column.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((obj, idx) => {
                    return (
                      <tr key={idx} className="border-b">
                        {columns.map((column, idx) => {
                          return (
                            <td key={idx} className="text-sm text-gray-700 px-5 py-3 whitespace-nowrap border-r">
                              {obj[column.data]}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Text | Pagination */}
      <Pagination
        total={data.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Table;
