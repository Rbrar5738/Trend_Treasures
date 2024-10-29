import React from "react";
import { useNavigate } from "react-router-dom";

function HomeSectionCardMen({ item }) {
  // console.log(item);
  const navigate = useNavigate();
  return (
    <div
      // onClick={() => navigate(`/products/${item._id}`)}
      // key={item.id}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden 2xl:w-[15rem] lg:w-[15rem] md:w-[16rem] mx-3 sm:w-[20rem] "
      style={{ boxShadow: "0 0 5px rgba(0,0,0,0.5)" }}
    >
      <div className="h-[13rem] w-[10rem] overfloew-hidden">
        <img
          className="object-cover object-top w-full h-full mt-3 transform hover:scale-110 transition duration-500 ease-in-out"
          // src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 ">
        {/* <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{item.brand}</p>
        <p className="mt-2 text-sm text-gray-500">$: {item.discountedPrice}</p> */}
      </div>
    </div>
  );
}

export default HomeSectionCardMen;
