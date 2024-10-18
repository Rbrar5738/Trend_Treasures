import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Box, TextField } from '@mui/material';
import { CartItem } from '../Cart/CartItem';

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-large rounded-s-md border'>
        <AddressCard/>

      </div>

      <div>
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
          {[1,1,1,1].map((item)=><CartItem />)}
                 
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className='uppercase px-2 font-bold opacity-70 pb-4'>Price Details</p>
              <hr />
              <div className="space-y-3  px-2 font-semibold ">
                <div className='flex justify-between pt-3 text-black '>
                  <span>Price</span>
                  <span>$100</span>

                </div>

                <div className='flex justify-between pt-3  '>
                  <span>Discount</span>
                  <span className="text-green-600">$100</span>

                </div>

                <div className='flex justify-between pt-3  '>
                  <span>Delivery Changes</span>
                  <span className="text-green-600">Free</span>

                </div>

                <div className='flex justify-between pt-3 font-bold'>
                  <span>Total Amount</span>
                  <span className="text-green-600">$100</span>

                </div>

              </div>
              <Button  color="secondary" variant="contained" className="w-full mt-5" sx={{mt:"1rem",px:"2rem", py:"1rem"}}>Payment</Button>
            </div>
      </div>
     

      </div>
    
    </div>
    </div>
  )
}

export default OrderSummary