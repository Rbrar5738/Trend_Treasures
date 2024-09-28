import React from 'react'
import {Grid, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault();

    const formdata=new FormData(event.currentTarget);
    const userData={
      firstName:formdata.get('firstName'),
      lastName:formdata.get('lastName'),
      email:formdata.get('email'),
      password:formdata.get('password'),
    }
    dispatch(login(userData));
    // console.log(userData);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>



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
                   Login
              </Button>
            </Grid>

          </Grid>
        </form>


        <div className="flex justify-center items-center flex-col"> 
          <div  className="py-4 flex justify-center">
            <p>Don't have an account? 
              <Button onClick={() => {navigate("/register")}}
                className='="ml-6'
                size="small"

              >Register</Button></p>
          </div>
        </div>
    </div>
  )
}

export default LoginForm