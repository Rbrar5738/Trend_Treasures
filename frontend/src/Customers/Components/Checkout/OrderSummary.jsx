import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Box, TextField } from "@mui/material";
import { CartItem } from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order } = useSelector((state) => state);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  console.log("123", order.order?.shippingAddress);
  return (
    <div>
      <div className="p-5 shadow-sm rounded-md border ">
        {order.order?.shippingAddress ? (
          <AddressCard address={order.order?.shippingAddress} />
        ) : (
          <div>No Address Available</div>
        )}
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase px-2 font-bold opacity-70 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3  px-2 font-semibold ">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price</span>
                  <span>{order.order?.totalPrice}</span>
                </div>

                <div className="flex justify-between pt-3  ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    {order.order?.discount || 0}
                  </span>
                </div>

                <div className="flex justify-between pt-3  ">
                  <span>Delivery Changes</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    {order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                color="secondary"
                variant="contained"
                className="w-full mt-5"
                sx={{ mt: "1rem", px: "2rem", py: "1rem" }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
