import EmployeeForm from "components/Forms/EmployeeForm";
import React from "react";

function NewEmployee() {
  return (
    <main className="f-container">
      <h2 className="text-2xl font-bold py-12">Create Employee</h2>

      <EmployeeForm />
    </main>
  );
}

export default NewEmployee;
