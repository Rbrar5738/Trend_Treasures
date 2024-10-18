import React from 'react'

const AddressCard = () => {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>Ravinder Singh</p>
        <p>32 Kent Street, Cambridge, ON N1S 5B2</p>
        
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>548-577-8444</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard