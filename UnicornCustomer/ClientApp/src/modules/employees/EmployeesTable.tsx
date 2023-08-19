import React from "react";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEmployeesContext } from "./EmployeesContext";

const EmployeesTable = () => {
  const { employees } = useEmployeesContext();

  return (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default EmployeesTable;
