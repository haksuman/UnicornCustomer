import React from "react";
import { EmployeesProvider } from "./EmployeesContext";
import EmployeesTable from "./EmployeesTable";

const EmployeesApp = () => {
  return (
    <EmployeesProvider>
      <EmployeesTable />
    </EmployeesProvider>
  );
};

export default EmployeesApp;
