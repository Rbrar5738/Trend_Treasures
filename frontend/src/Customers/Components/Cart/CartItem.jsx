import React from 'react';
import HomeCarouselImages from "../HomeCarouselImages";
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
export const CartItem = () => {
  return (
    <div className="p-5 shadow-md border border-gray-200 rounded-md mt-3">
      <div className='flex items-center'>
        <div className='w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[11rem]'>
          <img
            className="w-full h-full object-cover object-top"
            src={HomeCarouselImages.images[0].path}
            alt={HomeCarouselImages.images[0].alt}
          />
        </div>
        <div className='ml-5 space-y-1'>
          <p className="font-semibold">Title</p>
          <p className="opacity-70">Size M, White</p>      
          <p className="opacity-70 mt-1">Brand</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-2">
            <p className="font-semibold">$100</p>
            <p className="font-semibold opacity-50 line-through">$200</p>
            <p className="font-bold text-green-600">50%</p>
          </div>
        </div>

      
      </div>

      <div className='lg:flex items-center lg:space-x-10'>
          <div className="flex items-center space-x-2">
            <IconButton color="secondary">
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className='py-1  px-7 bordernrounded-sx'>3 </span>
            <IconButton color="secondary">
              <AddCircleOutlineIcon />
            </IconButton>
           
         
          </div>

          <div>
            <Button className='font-bold' color="secondary">Remove</Button>
          </div>
        </div>
    </div>
  );
};
