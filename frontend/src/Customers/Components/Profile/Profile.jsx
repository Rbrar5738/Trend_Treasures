import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { updateProfile } from "../../../State/Auth/Action";

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data) => {
    // dispatch(updateProfile(data));
    setEditMode(false);
  };

  return (
    <Box className="p-5">
      <Typography variant="h4" className="mb-5">
        Profile
      </Typography>
      {!editMode ? (
        <Box>
          <Typography variant="body1" className="mb-2">
            Name: {auth.user.firstName} {auth.user.lastName}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Email: {auth.user.email}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Phone: {auth.user.phone}
          </Typography>{" "}
          {/* Add phone to your auth data */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </Button>
        </Box>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                defaultValue={auth.user.firstName}
                {...register("firstName", { required: true })}
                error={!!errors.firstName}
                helperText={errors.firstName && "First name is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                defaultValue={auth.user.lastName}
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                helperText={errors.lastName && "Last name is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                defaultValue={auth.user.email}
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors.email && "Email is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                defaultValue={auth.user.phone}
                {...register("phone", { required: true })}
                error={!!errors.phone}
                helperText={errors.phone && "Phone number is required"}
              />
            </Grid>
          </Grid>
          <Box className="space-x-2 mt-4">
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default Profile;
