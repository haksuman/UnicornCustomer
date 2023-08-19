import React, { useEffect } from "react";
import axios from "axios";

const EmployeesApp = () => {
  useEffect(() => {
    axios.get("/api/employees").then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div>EmployeesApp</div>;
};

export default EmployeesApp;
