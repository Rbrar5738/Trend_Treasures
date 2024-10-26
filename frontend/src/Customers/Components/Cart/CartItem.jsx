import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../../State/Cart/Action";
import { useDispatch } from "react-redux";

export const CartItem = ({ item, onCartUpdate }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const newQuantity = item.quantity + num;
    if (newQuantity < 1) return; // Prevent negative quantity

    const data = {
      data: { quantity: newQuantity },
      cartItemId: item._id,
    };

    dispatch(updateCartItem(data)).then(() => {
      onCartUpdate(); // Trigger parent update
    });
  };

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item._id, jwt: localStorage.getItem("jwt") };
    dispatch(removeCartItem(data)).then(() => {
      onCartUpdate(); // Trigger parent update
    });
  };

  // Check if cart item is valid
  if (!item) {
    return null; // Return null if no item
  }

  return (
    <div className="p-5 shadow-md border border-gray-200 rounded-md mt-3">
      <div className="flex items-center">
        <div className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[11rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt={item.product.title}
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">
            <b>Size:</b> {item.size}
          </p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-2">
            <p className="font-semibold">${item.product.discountedPrice}</p>
            <p className="font-semibold opacity-50 line-through">
              ${item.product.price}
            </p>
            <p className="font-bold text-green-600">
              {item.product.discountPersent}%
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
            color="primary"
            aria-label="decrease quantity"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sx">{item.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            color="primary"
            aria-label="increase quantity"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
