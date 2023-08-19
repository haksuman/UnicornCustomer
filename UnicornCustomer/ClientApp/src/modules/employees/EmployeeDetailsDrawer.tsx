import React from "react";
import { Drawer, Typography } from "@mui/material";
import { Employee } from "../../types/Employee";

interface EmployeeDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
}

const EmployeeDetailsDrawer: React.FC<EmployeeDetailsDrawerProps> = ({ isOpen, onClose, employee }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: "300px", padding: "16px" }}>
        <Typography variant="h6">Employee Details</Typography>
        <Typography>
          Name: {employee.first} {employee.lastname}
        </Typography>
        <Typography>Birthdate: {new Date(employee.birthdate).toLocaleDateString()}</Typography>
        <Typography>Phone: {employee.phone}</Typography>
      </div>
    </Drawer>
  );
};

export default EmployeeDetailsDrawer;
