import React from "react";
import Title from "components/UI/Title";
import Table from "components/Library/Table";

// data
import data from "data/employees.json";
import dataSelectors from "data/selectors.json";

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

function ListEmployees() {
  return (
    <main className="f-container pt-6 pb-10 md:py-12">
      <Title text="List Employees" />

      <Table
        data={data.employees}
        columns={columns}
        selectDisplayItems={dataSelectors.selectItemsTable}
      />
    </main>
  );
}

export default ListEmployees;
