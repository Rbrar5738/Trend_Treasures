import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, getuser } from '../../State/Auth/Action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jwt } = localStorage.getItem('jwt');
  const { auth } = useSelector(store => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getuser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    setErrorMessage('');
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = (userData) => {
    const errors = {};

    if (!userData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!userData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!userData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!userData.password) {
      errors.password = 'Password is required';
    } else if (userData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/[a-z]/.test(userData.password) || !/[A-Z]/.test(userData.password) || !/[0-9]/.test(userData.password) || !/[!@#$%^&*]/.test(userData.password)) {
      errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
    }
    if (userData.password !== userData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    const userData = {
      firstName: formdata.get('firstName'),
      lastName: formdata.get('lastName'),
      email: formdata.get('email'),
      password: formdata.get('password'),
      confirmPassword: formdata.get('confirmPassword'),
    };

    if (validateForm(userData)) {
      dispatch(register(userData));
      
    }
  };

  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [auth.error]);

  useEffect(() => {
    if (auth.successmessage) {
      toast.success("Registered successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      document.querySelector('form').reset();
    }
  }, [auth.successmessage]);

  return (
    <div>
      <ToastContainer limit={1}/>
      <h2 className="text-2xl text-center font-bold mb-5 bg-gray-200 p-2">Registration Form</h2>
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded relative" role="alert">
          <span className="block sm:inline">{errorMessage}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button className="text-red-500 hover:text-red-700" onClick={() => setErrorMessage('')} aria-label="Close">
              &times;
            </button>
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='family-name'
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              
              id='password'
              name='password'
              label='Password'
              fullWidth
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
              error={!!formErrors.password}
              helperText={formErrors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              
              id='confirmPassword'
              name='confirmPassword'
              label='Confirm Password'
              fullWidth
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
              error={!!formErrors.confirmPassword}
              helperText={formErrors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className='bg-[#9155FD] w-full'
              type="submit"
              variant='contained'
              size='large'
              sx={{ padding: "1rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center items-center flex-col">
        <div className="py-4 flex justify-center">
          <p>Already have an account?
            <Button onClick={() => { navigate("/login") }}
              className='ml-6'
              size="small"
            >Login</Button></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
