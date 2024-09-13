import React from 'react'
import {Grid,Typography,Box,Button} from '@mui/material'

function Footer() {
  return (
    <div>
     <Box
    className="br-black text-white text-center mt-10"
    sx={{
      bgcolor: 'black',
      color: 'white',
      py: 3
    }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" className='pb-3'>Company</Typography>
        <div>
        <Button variant="h6"  >About</Button>
        </div>
        <div>
        <Button variant="h6"  >Contact</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" className='pb-3'>Men</Typography>
        <div>
        <Button variant="h6"  >Shirts</Button>
        </div>
        <div>
        <Button variant="h6"  >T-Shirts</Button>
        </div>

        <div>
        <Button variant="h6"  >Paints</Button>
        </div>

        <div>
        <Button variant="h6"  >Belts</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" className='pb-3'>Women</Typography>
        <div>
        <Button variant="h6"  >About</Button>
        </div>
        <div>
        <Button variant="h6"  >Contact</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" className='pb-3'>Brands</Typography>
        <div>
        <Button variant="h6"  >About</Button>
        </div>
        <div>
        <Button variant="h6"  >Contact</Button>
        </div>
      </Grid>

      <Grid className="text-center pt-20" item xs={12}>
        <Typography variant="body2" className='pb-3'>&copy; 2024 Group 11, All right reserved.</Typography>

      </Grid>
    </Grid>
  </Box>
    </div>
  )
}

export default Footer