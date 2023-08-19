import React from "react";
import { Drawer, Typography, TextField, Button } from "@mui/material";
import { Employee } from "../../types/Employee";

interface EmployeeEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
  onSave: (updatedEmployee: Employee) => void;
}

const EmployeeEditDrawer: React.FC<EmployeeEditDrawerProps> = ({ isOpen, onClose, employee, onSave }) => {
  const [editedEmployee, setEditedEmployee] = React.useState(employee);

  const handleFieldChange = (field: keyof Employee, value: any) => {
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedEmployee);
    onClose();
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: "300px", padding: "16px" }}>
        <Typography variant="h6">Edit Employee</Typography>
        <TextField
          label="First Name"
          value={editedEmployee.first}
          onChange={(e) => handleFieldChange("first", e.target.value)}
        />
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </div>
    </Drawer>
  );
};

export default EmployeeEditDrawer;
