import React, { useEffect } from "react";
import Title from "components/UI/Title";
import EmployeeForm from "components/Forms/EmployeeForm";

/**
 * New Employee Page
 * @returns {React.ReactElement}
 */
function NewEmployee() {
  useEffect(() => {
    document.title = "New employee | Wealth Health";
  }, []);

  return (
    <main className="f-container pt-6 pb-10 md:py-12">
      <Title text="Create Employee" />
      <EmployeeForm />
    </main>
  );
}

export default NewEmployee;
