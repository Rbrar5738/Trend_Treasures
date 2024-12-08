import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { updateProfile } from "../../../State/User/Action";

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [editMode, setEditMode] = useState(false);

  // Listen to changes in the auth state and update local state
  const [localUserData, setLocalUserData] = useState(auth?.user);
  // use effect hook

  useEffect(() => {
    // Update local state when auth.user changes
    if (auth?.user) {
      setLocalUserData(auth.user);
    }
  }, [auth?.user]); // Ensure the effect runs when auth.user changes

  const onSubmit = (data) => {
    // Ensure passwords match if provided
    if (data.newPassword && data.newPassword !== data.confirmPassword) {
      alert("New password and confirmation do not match");
      return;
    }

    // Dispatch the updateProfile action
    dispatch(updateProfile(data));

    // Update the local state immediately to reflect the changes
    setLocalUserData({ ...localUserData, ...data });

    // Exit edit mode
    setEditMode(false);
  };

  return (
    <Box className="p-5">
      <Typography variant="h4" className="mt-5 pt-5">
        Profile
      </Typography>
      {!editMode ? (
        <Box className="m-6 pb-5">
          <Typography variant="body1" className="mb-2">
            Name: {localUserData?.firstName} {localUserData?.lastName}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Email: {localUserData?.email}
          </Typography>
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
                defaultValue={localUserData?.firstName}
                {...register("firstName", { required: true })}
                error={!!errors.firstName}
                helperText={errors.firstName && "First name is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                defaultValue={localUserData?.lastName}
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
                defaultValue={localUserData?.email}
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors.email && "Email is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                {...register("newPassword")}
                error={!!errors.newPassword}
                helperText={errors.newPassword && "New password is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword && "Passwords must match"}
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
