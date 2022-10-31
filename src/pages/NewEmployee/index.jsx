import React from "react";
import Title from "components/UI/Title";
import EmployeeForm from "components/Forms/EmployeeForm";
// import Modal from "components/Library/Modal";

function NewEmployee() {
  return (
    <main className="f-container pt-6 pb-10 md:py-12">
      <Title text="Create Employee" />
      <EmployeeForm />
    </main>
  );
}

export default NewEmployee;
