import React, { useEffect, useState } from 'react'
import {Grid, TextField, Button} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../../State/Auth/Action';
import { getuser} from '../../State/Auth/Action';


const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {jwt}=localStorage.getItem('jwt')

  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    if(jwt){
      dispatch(getuser(jwt))
    }},[jwt,auth.jwt]
  )


  const handleSubmit=(event)=>{
    event.preventDefault();

    const formdata=new FormData(event.currentTarget);
    const userData={
      firstName:formdata.get('firstName'),
      lastName:formdata.get('lastName'),
      email:formdata.get('email'),
      password:formdata.get('password'),
    }
    dispatch(register(userData));
 
  }
  useEffect(() => {
    if (auth.error) {
      setErrorMessage(auth.error);
    }
  }, [auth.error]);

  // useEffect(() => {
  //   if (auth.User) {
  //     setSuccessMessage(auth.user.message);
  //   }
  // }, [auth.User]);

  return (
    <div>
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

{successMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button className="text-green-500 hover:text-green-700" onClick={() => setSuccessMessage('')} aria-label="Close">
              &times;
            </button>
          </span>
        </div>
      )}
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>  
              <TextField 
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              // variant='standard'
              />
            </Grid>

            <Grid item xs={12} sm={6}>  
              <TextField 
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='given-name'
              // variant='standard'
              />
            </Grid>


            <Grid item xs={12}>  
              <TextField 
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              // variant='standard'
              />
            </Grid>
            
            <Grid item xs={12}>  
              <TextField 
              required
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password'
              // variant='standard'
              />
            </Grid>


            <Grid item xs={12}>  
              <Button 
              className='bg-{#9155FD] w-full'
              type="submit"
              variant='contained'
              size='large'
              sx={{padding: "1rem 0"}}
              >
                   Register
              </Button>
            </Grid>

          </Grid>
        </form>
        <div className="flex justify-center items-center flex-col"> 
          <div  className="py-4 flex justify-center">
            <p>Already have an account? 
              <Button onClick={() => {navigate("/login")}}
                className='="ml-6'
                size="small"

              >Login</Button></p>
          </div>
        </div>
    </div>
  )
}

export default RegisterForm