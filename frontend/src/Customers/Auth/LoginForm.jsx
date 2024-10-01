import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { getuser, login } from '../../State/Auth/Action';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    const email = formdata.get('email');
    const password = formdata.get('password');

    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getuser(auth.jwt));
    }
  }, [auth.jwt]);

  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }, [auth.error]);

  return (
    <div>
      <ToastContainer  limit={1}/>
      <h2 className="text-2xl text-center font-bold mb-5 bg-gray-200 p-2">Login Form</h2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              error={!!emailError}
              helperText={emailError}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id='password'
              name='password'
              label='Password'
              fullWidth
              type={showPassword ? 'text' : 'password'} // toggle between text and password
              autoComplete='new-password' // better practice for new password fields
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
              error={!!passwordError}
              helperText={passwordError}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className='bg-{#9155FD] w-full'
              type="submit"
              variant='contained'
              size='large'
              sx={{ padding: "1rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center items-center flex-col">
        <div className="py-4 flex justify-center">
          <p>Don't have an account?
            <Button onClick={() => { navigate("/register") }}
              className='="ml-6'
              size="small"
            >Register</Button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
