import React, { useState } from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";

/**
 * User Form Component
 * @param {Function} toggleUserForm Function for display/hide user form
 * @returns {React.ReactElement}
 */
function EmployeeForm() {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Firstname must be at least 2 characters")
      .required("Firstname required !"),
    lastname: Yup.string()
      .min(2, "Lastname must be at least 2 characters")
      .required("Lastname required !"),
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };
  };

  return (
    <form className="user-form" onSubmit={handleCreateUser}>
      <form action="#" id="create-employee">
        <div className="flex flex-col md:flex-row gap-10">
          {/* first colunmn */}
          <div className="flex flex-col w-full">
            <div>
              <label
                for="UserEmail"
                class="block text-md font-medium text-gray-700"
              >
                Firstname
              </label>

              <input
                type="text"
                id="UserEmail"
                placeholder="john@rhcp.com"
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <label for="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label for="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" />

            <label for="start-date">Start Date</label>
            <input id="start-date" type="text" />
          </div>

          {/* second column */}
          <div className="flex flex-col w-full">
            <fieldset className="flex flex-col w-full">
              <legend>Address</legend>

              <label for="street">Street</label>
              <input id="street" type="text" />

              <label for="city">City</label>
              <input id="city" type="text" />

              <label for="state">State</label>
              <select name="state" id="state"></select>

              <label for="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <label for="department">Department</label>
            <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>

          <button
            onClick={() => console.log("save")}
            className="inline-flex items-center rounded border border-lime-700 bg-lime-700 px-7 py-3 text-white hover:bg-transparent hover:text-lime-700 focus:outline-none focus:ring active:text-lime-500"
          >
            <span className="text-sm font-medium">Save</span>

            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </form>
  );
}

export default EmployeeForm;
