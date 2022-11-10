import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { format, subYears } from "date-fns";
import { yupErrorToErrorObject } from "utils/yup";

import Label from "../Label";
import Input from "../Input";
import Fieldset from "../Fieldset";

import DatePicker from "react-datepicker";
import Modal from "components/Library/Modal";
import Select from "components/Library/Select";
import SubmitButton from "components/Buttons/SubmitButton";

import { ReactComponent as Check } from "assets/icons/check.svg";
import { ReactComponent as HiChevronLeft } from "assets/icons/chevron-left.svg";
import { ReactComponent as HiChevronRight } from "assets/icons/chevron-right.svg";

// data
import dataSelectors from "data/selectors.json";
import ErrorMessage from "../ErrorMessage";

/**
 * User Form Component
 * @param {Function} toggleUserForm Function for display/hide user form
 * @returns {React.ReactElement}
 */
function EmployeeForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(subYears(new Date(), 16));

  const closeModal = () => {
    setOpenModal(false);
  };

  const resetUserForm = () => {
    document.getElementById("user-form").reset();
    setStartDate(new Date());
    setBirthDate(subYears(new Date(), 16));
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Firstname must be at least 2 characters")
      .required("Firstname required !"),
    lastName: Yup.string()
      .min(2, "Lastname must be at least 2 characters")
      .required("Lastname required !"),
    // startDate: format(startDate, "dd/MM/yyyy"),
    // dateOfBirth: format(birthDate, "dd/MM/yyyy"),
    department: Yup.mixed()
      .oneOf(
        dataSelectors.departments.map((dp) => dp.value),
        "Select one department !"
      )
      .required(),
    street: Yup.string()
      .min(2, "Street must be at least 2 characters")
      .required("Street required !"),
    city: Yup.string()
      .min(2, "City must be at least 2 characters")
      .required("City required !"),
    state: Yup.mixed()
      .oneOf(
        dataSelectors.states.map((state) => state.value),
        "Select one state !"
      )
      .required(),
    zipCode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      startDate: format(startDate, "dd/MM/yyyy"),
      dateOfBirth: format(birthDate, "dd/MM/yyyy"),
      department: e.target.department.value,
      street: e.target.street.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipCode: e.target.zipCode.value,
    };

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // insert date in json file
        setOpenModal(true);
        resetUserForm();
      })
      .catch((err) => {
        setLoading(false);
        setErrors(yupErrorToErrorObject(err));
      });
  };

  useEffect(() => {
    if (errors) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [errors]);

  return (
    <>
      <form id="user-form" onSubmit={handleCreateUser}>
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
              {errors.firstName && <ErrorMessage errors={errors.firstName} />}
            </div>

            <div>
              <Label for="lastname" text="Lastname" />
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter a firstname"
              />
              {errors.lastName && <ErrorMessage errors={errors.lastName} />}
            </div>

            <div>
              <Label for="date-of-birth" text="Date of Birth" />
              <DatePicker
                name="dateOfBirth"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
                nextMonthButtonLabel={
                  <HiChevronRight className="text-gray-700 w-6 h-6" />
                }
                previousMonthButtonLabel={
                  <HiChevronLeft className="text-gray-700 w-6 h-6" />
                }
                minDate={subYears(new Date(), 70)}
                maxDate={subYears(new Date(), 16)} // remove 16 years from now for the security (adult or intern only)
              />
              {errors.dateOfBirth && (
                <ErrorMessage errors={errors.dateOfBirth} />
              )}
            </div>

            <div>
              <Label id="start-date" for="start-date" text="Start Date" />
              <DatePicker
                name="startDate"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
                nextMonthButtonLabel={
                  <HiChevronRight className="text-gray-700 w-6 h-6" />
                }
                previousMonthButtonLabel={
                  <HiChevronLeft className="text-gray-700 w-6 h-6" />
                }
                maxDate={new Date()}
              />
              {errors.startDate && <ErrorMessage errors={errors.startDate} />}
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
              {errors.department && <ErrorMessage errors={errors.department} />}
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
                {errors.street && <ErrorMessage errors={errors.street} />}
              </div>

              <div>
                <Label for="city" text="City" />
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter a city"
                />
                {errors.city && <ErrorMessage errors={errors.city} />}
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
                {errors.state && <ErrorMessage errors={errors.state} />}
              </div>

              <div>
                <Label for="zip-code" text="Zip Code" />
                <Input
                  id="zip-code"
                  name="zipCode"
                  type="number"
                  placeholder="Enter a zip code"
                />
                {errors.zipCode && <ErrorMessage errors={errors.zipCode} />}
              </div>
            </Fieldset>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-8 flex justify-end items-center">
          <SubmitButton name="Save" loading={loading} disabled={false} />
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
