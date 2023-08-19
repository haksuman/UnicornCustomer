import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Employee } from "../../types/Employee";
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
