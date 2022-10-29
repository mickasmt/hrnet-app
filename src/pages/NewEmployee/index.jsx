import React from "react";
import Title from "components/UI/Title";
import EmployeeForm from "components/Forms/EmployeeForm";
import Modal from "components/Library/Modal";

function NewEmployee() {
  return (
    <main className="f-container pt-6 pb-10 md:py-12">
      <Title text="Create Employee" />
      <EmployeeForm />

      <Modal
        icon="jjj"
        overlayColor="#4b5563"
        overlayOpacity={0.75}
        title="Employee created !"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        buttons={[
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Deactivate
          </button>,
          // <button
          //   type="button"
          //   className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          // >
          //   Cancel
          // </button>
        ]}
      />
    </main>
  );
}

export default NewEmployee;
