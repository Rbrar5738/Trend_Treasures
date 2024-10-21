import React from 'react'
import Grid from "@mui/material/Grid";
import AddressCard from '../AddressCard/AddressCard';
import { Button, Box, TextField } from '@mui/material';

const DeliveryAddressForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    const data=new FormData(event.currentTarget);
    const address={
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      address:data.get('address'),
      city:data.get('city'),
      state:data.get('state'),
      zip:data.get('zip'),
      phoneNumber:data.get('phoneNumber')
    }
    console.log(address);
  }
  return (
    <div>
      
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll ">
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard/>
            <Button sx={{mt:2, bgcolor:"rgb(145 85 253)"}} size="large" variant="contained">
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5 ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                
                  />
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="given-name"
                
                  />
                  
                </Grid>

                <Grid item xs={12}>
                  <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="given-name"
                  multiline
                  rows={4}
                
                  />
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="given-name"
                
                  />
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  autoComplete="given-name"
                
                  />
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip/Postal Code"
                  fullWidth
                  autoComplete="Shipping Postal-code"
                
                  />
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="given-name"
                
                  />
                  
                </Grid>

                <Grid item xs={12}>
                <Button sx={{py:2,mt:2, bgcolor:"rgb(145 85 253)"}} size="large" variant="contained" type="submit" fullWidth>
                    Deliver Here
              </Button>
                  
                </Grid>
                
              </Grid>
            </form>

          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default DeliveryAddressForm