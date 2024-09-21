import React from 'react'
import { CartItem } from './CartItem'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate=useNavigate()
  const handleCheckOut=()=>{
      navigate("/checkout")
  }
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
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
              <Button onClick={()=>{handleCheckOut()}} color="secondary" variant="contained" className="w-full mt-5" sx={{mt:"1rem",px:"2rem", py:"1rem"}}>CheckOut</Button>
            </div>
      </div>
     

      </div>
    
    </div>
  )
}

export default Cart