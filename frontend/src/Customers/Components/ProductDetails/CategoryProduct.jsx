import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductReviewCard from "./ProductReviewCard";
import "./ProductDetail.css";
import LinearProgress from "@mui/material/LinearProgress";
import HomeCarouselImages from "../HomeCarousel/HomeCarouselImages";
import ProductCard from "../Product/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import img from "./5.avif";
import img1 from "./2.avif";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../State/Product/Action.js";
import { addItemToCart } from "../../../State/Cart/Action.js";

const CategoryProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const { customersProduct } = useSelector((store) => store);
  const { customersProduct } = useSelector((store) => store);
  useEffect(() => {
    dispatch(findProductById(product?.name));
    // dispatch(getAllReviews(productId));
  }, [product?.name]);
  // console.log("here", prod

  console.log(customersProduct);

  return (
    <>
      <div className="flex flex-wrap space-y-5">
        {customersProduct.products.content?.map((product) => (
          <div
            onClick={() => navigate(`/products/${product._id}`)}
            className="productCard md:w-[15rem] sm:w-[80%] cursor-pointer transition-all m-3"
            // key={product.id}
          >
            <div className="h-[20rem]">
              <img
                className="w-full h-full object-cover object-center-top"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="textPart bg-white mt-3">
              <div>
                <p className="font-bold m-0 p-0 opacity-70">{product.brand}</p>
                <p className="p-0 mb-0">{product.title}</p>
                <p className="p-0 mb-2">Catagory Name</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="font-semibold">{product.discountedPrice}</p>
                <p className="line-through opacity-50">{product.price}</p>
                <p className="text-green-600 font-semibold">
                  {" "}
                  {product.discountPersent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryProduct;
