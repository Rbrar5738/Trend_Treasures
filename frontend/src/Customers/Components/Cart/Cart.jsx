import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);
  const [refresh, setRefresh] = useState(false); // Local state to trigger refresh

  // const handleCheckOut = () => {
  //   navigate("/checkout");
  // };

  const handleCartUpdate = () => {
    setRefresh((prev) => !prev); // Toggle state to trigger re-fetch
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, refresh]); // Depend on the refresh state

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems && cart.cart.cartItems.length > 0 ? (
            cart.cart.cartItems.map((item) => (
              <CartItem
                item={item}
                key={item._id}
                onCartUpdate={handleCartUpdate}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg font-semibold">
              Your cart is empty.
            </p>
          )}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase px-2 font-bold opacity-70 pb-4">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 px-2 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({cart.cart?.totalItem} item)</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart.cart?.totalPrice}</span>
              </div>
            </div>
            <Button
              onClick={() => navigate("/checkout?step=2")}
              color="secondary"
              variant="contained"
              className="w-full mt-5"
              sx={{ mt: "1rem", px: "2rem", py: "1rem" }}
            >
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
