import data from 'data/employees';
import { useState, createContext } from "react";

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data);

  const newEmployee = (employee) => {
    setEmployees(employees.concat(employee));
  };


  return (
    <EmployeesContext.Provider value={{ employees, newEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};
