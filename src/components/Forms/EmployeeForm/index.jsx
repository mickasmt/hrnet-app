import React, { useState } from "react";
import * as Yup from "yup";
import Label from "../Label";
import Input from "../Input";
import Fieldset from "../Fieldset";
import { HiArrowLongRight } from "react-icons/hi2";

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
          <div className="flex flex-col w-full space-y-4">
            <div>
              <Label for="firstname" text="Firstname" />
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Enter a firstname"
              />
            </div>

            <div>
              <Label for="lastname" text="Lastname" />
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter a firstname"
              />
            </div>

            <div>
              <Label for="date-of-birth" text="Date of Birth" />
              <Input
                id="date-of-birth"
                name="dateOfBirth"
                type="text"
                placeholder="Select a date"
              />
            </div>

            <div>
              <Label id="start-date" for="start-date" text="Start Date" />
              <Input
                id="start-date"
                name="startDate"
                type="text"
                placeholder="Select a date"
              />
            </div>

            <div>
              <Label id="department" for="department" text="Department" />
              <Input
                id="department"
                name="department"
                type="text"
                placeholder="Select a department"
              />
            </div>
          </div>

          {/* second column */}
          <div className="flex flex-col w-full">
            <Fieldset
              name="Address"
              classnames="flex flex-col w-full space-y-4 pb-6"
            >
              <div>
                <Label for="street" text="Street" />
                <Input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Enter a street"
                />
              </div>

              <div>
                <Label for="city" text="City" />
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter a city"
                />
              </div>

              <div>
                <Label for="state" text="State" />
                <Input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter a state"
                />
              </div>

              <div>
                <Label for="zip-code" text="Zip Code" />
                <Input
                  id="zip-code"
                  name="zipCode"
                  type="number"
                  placeholder="Enter a zip code"
                />
              </div>
            </Fieldset>
          </div>
        </div>

        <div className="mt-8 flex justify-end items-center">
          <button
            onClick={() => console.log("save")}
            className="inline-flex items-center rounded-md border border-lime-700 bg-lime-700 px-7 py-2.5 text-white hover:bg-transparent hover:text-lime-700 focus:outline-none focus:ring active:text-lime-500"
          >
            <span className="text-sm font-medium">Save</span>
            <HiArrowLongRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </form>
    </form>
  );
}

export default EmployeeForm;
