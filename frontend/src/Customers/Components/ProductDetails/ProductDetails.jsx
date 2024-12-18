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
import { getAllReviews } from "../../../State/Review/Action";
import CategoryProduct from "./CategoryProduct.jsx";
import RateProduct from "../ReviewProduct/RateProduct.jsx";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { customersProduct, review } = useSelector((store) => store);

  const [selectedSize, setSelectedSize] = useState(
    customersProduct.product?.sizes?.[0] || null
  );
  const handleAddToCart = () => {
    const data = { productId: productId, size: selectedSize.name };
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: productId };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
  }, [productId]);

  useEffect(() => {
    if (customersProduct.product?.sizes) {
      setSelectedSize(customersProduct.product?.sizes[0]);
    }
  }, [customersProduct.product?.sizes]);
  // console.log("here", customersProduct);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <h3
                // href={product.href}
                aria-current="page"
                className="text-3xl text-blue-900 hover:text-blue-800 decoration-none uppercase font-bold text-shadow-sm"
              >
                {customersProduct.product?.title}
              </h3>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 bg-gray-100 p-10 mb-10 shadow-xl">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] mainImage">
              <img
                alt={customersProduct.product?.title}
                src={customersProduct.product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center ">
              {/* {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 otherImage">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))} */}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-xl lg:text-xl font-semibold text-blue-900">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="text-xl lg:text-xl text-blue-900 opacity-70 pt-1">
                {customersProduct.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">
                  {" "}
                  ${customersProduct.product?.discountedPrice}
                </p>
                <p className="font-semibold opacity-50 line-through">
                  {" "}
                  ${customersProduct.product?.price}
                </p>
                <p className="font-bold text-green-600 ">
                  {" "}
                  {customersProduct.product?.discountPersent}%
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  {/* <Rating
                    name="read-only"
                    value={3.5}
                    readOnly
                    precision={0.5}
                  /> */}
                  {/* <p className="opacity-50 text-sm pt-3">5000 Ratings</p>
                  <p className="ml-3 text-sm font-medium pt-3 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    {reviews.totalCount} Reviews
                  </p> */}
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {customersProduct.product?.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.quantity}
                          className={classNames(
                            size.quantity
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm hover:bg-gray-500"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.quantity ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <Button
                  onClick={handleAddToCart}
                  color="secondary"
                  variant="contained"
                  sx={{ mt: "1rem", px: "2rem", py: "1rem" }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <h2 className="text-xl font-medium text-blue-900">Details</h2>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 text-justify">
                    {customersProduct.product?.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              <div className="mt-10">
                <div className="mt-4 space-y-6">
                  {/* <p className="text-sm text-gray-600">{product.details}</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Ratings and review */}
        <section className="px-6">
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={8}>
                <Box>
                  <RateProduct />
                  <h1 className="font-semibold text-lg pb-4">Recent Reviews</h1>
                </Box>
                <div className="space-y-5">
                  {review.reviews?.map((item, i) => (
                    <ProductReviewCard item={item} />
                  ))}
                </div>
              </Grid>
              {/* <Grid item xs={5}>
                <h1 className="text-sl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-2">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />
                  <p className=" mt-3 opacity-60">5000 Ratings</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={50}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Avarage</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="warning"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid> */}
            </Grid>
          </div>
        </section>

        {/*Similar Products */}

        <section className="pt-10 px-5">
          <h1 className="py-5 text-4xl font-bold">Similar Products</h1>

          <CategoryProduct product={customersProduct.product?.category} />
        </section>
      </div>
    </div>
  );
}
