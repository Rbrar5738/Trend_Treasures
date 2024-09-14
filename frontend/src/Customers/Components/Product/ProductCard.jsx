import React from "react";
import "./ProductCard.css";

function ProductCard({product}) {
  return (
    <div className="productCard w-[15rem] cursor-pointer transition-all m-3">
      <div className="h-[20rem]">
        <img
          className="w-full h-full object-cover object-center-top"
          src={product.path}
          alt="product image"
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
