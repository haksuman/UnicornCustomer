import React, { useState } from "react";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DetailsIcon from "@mui/icons-material/Details";
import { useEmployeesContext } from "./EmployeesContext";
import axios from "axios";
import { Employee } from "../../types/Employee";
import EmployeeDetailsDrawer from "./EmployeeDetailsDrawer";
import EmployeeEditDrawer from "./EmployeeEditDrawer";

const EmployeesTable = () => {
  const { employees, fetchEmployees } = useEmployeesContext();
  const [detailEmployee, setDetailEmployee] = useState<Employee | null>(null);
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState<Employee | null>(null);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const deleteEmployee = (id: number) => {
    axios.delete(`/api/employees/${id}`).then(() => {
      fetchEmployees();
    });
  };

  const openDetailDrawer = (employee: Employee) => {
    setDetailEmployee(employee);
    setIsDetailDrawerOpen(true);
  };

  const closeDetailDrawer = () => {
    setDetailEmployee(null);
    setIsDetailDrawerOpen(false);
  };

  const openEditDrawer = (employee: Employee) => {
    setEditedEmployee(employee);
    setIsEditDrawerOpen(true);
  };

  const closeEditDrawer = () => {
    setEditedEmployee(null);
    setIsEditDrawerOpen(false);
  };

  const handleEditSave = (updatedEmployee: Employee) => {
    axios.put(`/api/employees/${updatedEmployee.id}`, updatedEmployee).then(() => {
      fetchEmployees();
    });
    closeEditDrawer();
  };

  return (
    <>
      <Card variant="outlined" className="p-4">
        <TableContainer className="w-full">
          <Table className="min-w-sm" stickyHeader>
            <TableHead className=" border-solid border-1" style={{ backgroundColor: "#F5F5F5" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Birthdate</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell component="th" scope="row">
                    {employee.first}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {employee.lastname}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {new Date(employee.birthdate).toLocaleDateString()}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {employee.phone}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {employee.address.city}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <IconButton
                      aria-label="details"
                      size="small"
                      onClick={() => {
                        openDetailDrawer(employee);
                      }}
                    >
                      <DetailsIcon />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      size="small"
                      onClick={() => {
                        openEditDrawer(employee);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => {
                        deleteEmployee(employee.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {detailEmployee !== null && (
        <EmployeeDetailsDrawer isOpen={isDetailDrawerOpen} onClose={closeDetailDrawer} employee={detailEmployee} />
      )}
      {editedEmployee !== null && (
        <EmployeeEditDrawer
          isOpen={isEditDrawerOpen}
          onClose={closeEditDrawer}
          employee={editedEmployee}
          onSave={handleEditSave}
        />
      )}
    </>
  );
};

export default EmployeesTable;
