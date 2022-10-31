import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Label from "../Label";
import Input from "../Input";
import Fieldset from "../Fieldset";
import Modal from "components/Library/Modal";
import Select from "components/Library/Select";
import SubmitButton from "components/Buttons/SubmitButton";

import {ReactComponent as Check} from "assets/icons/check.svg";

// data
import dataSelectors from "data/selectors.json";

/**
 * User Form Component
 * @param {Function} toggleUserForm Function for display/hide user form
 * @returns {React.ReactElement}
 */
function EmployeeForm() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

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
    setOpenModal(true);

    console.log("here");

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };
  };

  return (
    <>
      <form className="user-form" onSubmit={handleCreateUser}>
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
                placeholder="Picker"
              />
            </div>

            <div>
              <Label id="start-date" for="start-date" text="Start Date" />
              <Input
                id="start-date"
                name="startDate"
                type="text"
                placeholder="Picker"
              />
            </div>

            <div>
              <Label id="department" for="department" text="Department" />
              <Select
                name="department"
                options={dataSelectors.departments}
                selected=""
                placeholder="Select a department"
                styles="w-full mt-1 rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                <Select
                  name="state"
                  options={dataSelectors.states}
                  selected=""
                  placeholder="Select a state"
                  styles="w-full mt-1 rounded-md border-gray-200 shadow-sm sm:text-sm"
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
          <SubmitButton name="Save" loading={loading} />
        </div>
      </form>

      {openModal && (
        <Modal
          icon={<Check className="h-6 w-6 text-green-700" />}
          iconBgColor="#E7FCDC"
          overlayColor="#4b5563"
          overlayOpacity={0.75}
          title="Employee created !"
          description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
          onClose={() => closeModal()}
          buttons={[
            <button
              type="button"
              onClick={() => closeModal()}
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-lime-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-800 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>,
            <Link
              to="/employees"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              View all employees
            </Link>,
          ]}
        />
      )}
    </>
  );
}

export default EmployeeForm;
