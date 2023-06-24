import React, { useContext, useEffect } from "react";
import Title from "components/UI/Title";
import { Table } from "react-hrnet-plugins";

// data
import dataSelectors from "data/selectors.json";
import { EmployeesContext } from "utils/context";

// columns infos for table
const columns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

/**
 * List Employees Page
 * @returns {React.ReactElement}
 */
function ListEmployees() {
  const { employees } = useContext(EmployeesContext);

  useEffect(() => {
    document.title = "List employees | Wealth Health";
  }, []);

  return (
    <main className="f-container pt-6 pb-10 md:py-12" data-testid="list-employee-main">
      <Title text="List Employees" />

      <Table
        items={employees}
        columns={columns}
        selectDisplayItems={dataSelectors.selectItemsTable}
      />
    </main>
  );
}

export default ListEmployees;
