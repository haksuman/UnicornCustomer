import React from "react";
import { Drawer, Typography, Box, Button, Grid, Icon, IconButton, Divider } from "@mui/material";
import { Employee } from "../../types/Employee";
import CloseIcon from "@mui/icons-material/Close";

interface EmployeeDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
}

const EmployeeDetailsDrawer: React.FC<EmployeeDetailsDrawerProps> = ({ isOpen, onClose, employee }) => {
  const isMobile = window.innerWidth < 600;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: isMobile ? "100%" : "600px", height: "100vh" },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>

      <div className="w-full h-full flex flex-col justify-between ">
        <Grid container spacing={3} className="p-8">
          <Grid item xs={12}>
            <Typography variant="h5">Employee Details</Typography>
            <Divider className="mt-2" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Username:</b> {employee.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Name:</b> {employee.first} {employee.lastname}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Birthdate:</b> {new Date(employee.birthdate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Phone:</b> {employee.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Address: </b>
              {employee.address.street} {employee.address.number}, {employee.address.zip} {employee.address.city}
            </Typography>
          </Grid>
        </Grid>
        {/* <Box
          className="sticky bottom-0 left-0 right-0 p-4 flex justify-end gap-4"
          style={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <Button onClick={onClose} variant="outlined" color="secondary" sx={{ borderRadius: "20px", width: "100px" }}>
            Cancel
          </Button>
        </Box> */}
      </div>
    </Drawer>
  );
};

export default EmployeeDetailsDrawer;
