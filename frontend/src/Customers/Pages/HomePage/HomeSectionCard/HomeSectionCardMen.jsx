import React from 'react'

function HomeSectionCardMen({item})  {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden 2xl:w-[15rem] lg:w-[15rem] md:w-[16rem] mx-3 sm:w-[20rem] " style={{ boxShadow:"0 0 5px rgba(0,0,0,0.5)" }}>
      <div className='h-[13rem] w-[10rem] overfloew-hidden' >
        <img className="object-cover object-top w-full h-full mt-3 transform hover:scale-110 transition duration-500 ease-in-out"  src={item.path}alt=""/>
      </div>
      <div className="p-4 ">
        <h3 className='text-lg font-medium text-gray-900'>Men Shirt</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Stylish Shirt</p>
      </div>
    </div>
  )
}

export default HomeSectionCardMen