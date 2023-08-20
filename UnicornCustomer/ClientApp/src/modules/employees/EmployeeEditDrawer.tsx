import React, { useEffect } from "react";
import { Drawer, Typography, TextField, Button, Grid, Box, Divider } from "@mui/material";
import { Employee } from "../../types/Employee";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EmployeeEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee | undefined;
  onSave: (updatedEmployee: Employee) => void;
}

const schema = yup.object().shape({
  name: yup.string().required("Username is a required field."),
  first: yup.string().required("First name is a required field."),
  lastname: yup.string().required("Last name is a required field."),
  birthdate: yup.string(),
  phone:
    yup.string().required("Phone number is a required field.") &&
    yup.string().matches(/^\d+$/, "Phone number must be a number"),
  address: yup.object().shape({
    city: yup.string(),
    zip: yup.string(),
    street: yup.string(),
    number: yup.string(),
  }),
});
const EmployeeEditDrawer: React.FC<EmployeeEditDrawerProps> = ({ isOpen, onClose, employee, onSave }) => {
  const isMobile = window.innerWidth < 600;

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Employee>({
    resolver: yupResolver(schema) as any,
  });

  // const form = watch();

  const handleSave = (data: Employee) => {
    onSave(data);
    onClose();
  };

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [employee]);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": { width: isMobile ? "100%" : "600px", height: "100vh" },
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <Grid container spacing={3} className="p-8">
          <Grid item xs={12}>
            <Typography variant="h5">{employee ? "Edit Employee" : "Add Employee"}</Typography>
            <Divider className="mt-2" />
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
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : null}
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
                  helperText={errors.first ? errors.first.message : null}
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
                  helperText={errors.lastname ? errors.lastname.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="birthdate"
              control={control}
              defaultValue={new Date().toISOString().split("T")[0]}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Birthdate"
                  type="date"
                  error={!!errors.birthdate}
                  helperText={errors.birthdate ? errors.birthdate.message : null}
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
                  helperText={errors.phone ? errors.phone.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
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
                  error={!!errors.address && !!errors.address.city}
                  helperText={errors.address && errors.address.city ? errors.address.city.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
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
                  error={!!errors.address && !!errors.address.zip}
                  helperText={errors.address && errors.address.zip ? errors.address.zip.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="address.street"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Street Name"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!errors.address && !!errors.address.street}
                  helperText={errors.address && errors.address.street ? errors.address.street.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="address.number"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Street Number"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!errors.address && !!errors.address.number}
                  helperText={errors.address && errors.address.number ? errors.address.number.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box
          className="sticky bottom-0 left-0 right-0 p-4 flex justify-end gap-4"
          style={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <Button onClick={onClose} variant="outlined" color="secondary" sx={{ borderRadius: "20px", width: "100px" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(handleSave)}
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", width: "100px" }}
          >
            Save
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default EmployeeEditDrawer;
