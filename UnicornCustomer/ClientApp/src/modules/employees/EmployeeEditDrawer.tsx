import React from "react";
import { Drawer, Typography, TextField, Button, Grid } from "@mui/material";
import { Employee } from "../../types/Employee";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DesktopDatePicker } from "@mui/x-date-pickers";

interface EmployeeEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
  onSave: (updatedEmployee: Employee) => void;
}

const schema = yup.object().shape({
  name: yup.string(),
  first: yup.string().required(),
  lastname: yup.string().required(),
  birthdate: yup.date(),
  phone: yup.string(),
  address: yup.object().shape({
    city: yup.string(),
    zip: yup.string(),
    street: yup.string(),
    number: yup.string(),
  }),
});

// example employee:
//  {
//    "Address": {
//      "City": "New York",
//      "Zip": "10001",
//      "Street": "Broadway",
//      "Number": "123"
//    },
//    "Birthdate": "1985-05-15T00:00:00",
//    "First": "John",
//    "Id": 1,
//    "Lastname": "Doe",
//    "Name": "Smith",
//    "Phone": "555-123-4567"
//  },

const EmployeeEditDrawer: React.FC<EmployeeEditDrawerProps> = ({ isOpen, onClose, employee, onSave }) => {
  const [editedEmployee, setEditedEmployee] = React.useState(employee);
  const isMobile = window.innerWidth < 600;

  // react hook form methods
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const form = watch();

  const handleSave = () => {
    onSave(editedEmployee);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": { width: isMobile ? "100%" : "800px" },
      }}
    >
      <div style={{ padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Edit Employee</Typography>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Name"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  // error={!!errors.name}
                  // helperText={errors.name?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="first"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="First Name"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!errors.first}
                  // helperText={errors.first?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Last Name"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!errors.lastname}
                  // helperText={errors.lastname?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="birthdate"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Birthdate"
                  type="date"
                  error={!!errors.birthdate}
                  // helperText={errors.birthdate?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Phone"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!errors.phone}
                  // helperText={errors.phone?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="address.city"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="City"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  // error={!!errors.address?.city}
                  // helperText={errors.address?.city?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="address.zip"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Zip"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  // error={!!errors.address?.zip}
                  // helperText={errors.address?.zip?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="address.street"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Street"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  // error={!!errors.address?.street}
                  // helperText={errors.address?.street?.message}
                />
              )}
            />
          </Grid>
        </Grid>

        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </div>
    </Drawer>
  );
};

export default EmployeeEditDrawer;
