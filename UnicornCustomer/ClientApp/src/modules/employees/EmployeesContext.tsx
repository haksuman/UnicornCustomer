import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "../../types/Employee";

// const employees = [
//   {
//     Address: {
//       City: "New York",
//       Zip: "10001",
//       Street: "Broadway",
//       Number: "123",
//     },
//     Birthdate: "1985-05-15T00:00:00",
//     First: "John",
//     Id: 1,
//     Lastname: "Doe",
//     Name: "Smith",
//     Phone: "555-123-4567",
//   },
//   {
//     Id: 2,
//     First: "Emily",
//     Name: "Johnson",
//     Lastname: "Williams",
//     Birthdate: "1990-10-08T00:00:00",
//     Address: {
//       City: "Los Angeles",
//       Zip: "90001",
//       Street: "Sunset Blvd",
//       Number: "456",
//     },
//     Phone: "555-987-6543",
//   },
// ];

interface EmployeesContextType {
  employees: Employee[];
  fetchEmployees: () => void;
}

const EmployeesContext = createContext<EmployeesContextType | undefined>(undefined);

export const EmployeesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = () => {
    axios.get("/api/employees").then((response) => {
      setEmployees(response.data);
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return <EmployeesContext.Provider value={{ employees, fetchEmployees }}>{children}</EmployeesContext.Provider>;
};

export const useEmployeesContext = () => {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error("useEmployeesContext must be used within an EmployeesProvider");
  }
  return context;
};
