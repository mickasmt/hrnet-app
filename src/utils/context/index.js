import { useState, createContext } from "react";
import data from "data/employees.json";

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data.employees);

  const newEmployee = (employee) => {
    setEmployees(employees.concat(employee));
  };

  return (
    <EmployeesContext.Provider value={{ employees, newEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};
