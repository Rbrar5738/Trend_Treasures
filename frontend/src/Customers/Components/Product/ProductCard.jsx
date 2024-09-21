import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate("/products/${5}")} className="productCard md:w-[15rem] sm:w-[80%] cursor-pointer transition-all m-3" key={product.id}>
      <div className="h-[20rem]" >
        <img
          className="w-full h-full object-cover object-center-top"
          src={product.path}
          alt={product.alt}
        />
      </div>
      <div className="textPart bg-white mt-3">
        <div>
          <p className="font-bold m-0 p-0 opacity-70">{product.brand}</p>
          <p className="p-0 mb-0">{product.title}</p>
          {/* <p className="p-0 mb-2">Catagory Name</p> */}
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold"> {product.discountPersent}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
