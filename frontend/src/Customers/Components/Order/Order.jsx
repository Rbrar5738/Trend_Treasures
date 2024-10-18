import React from "react";
import Grid from "@mui/material/Grid";
import { OrderCard } from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "On The Way" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Returned", value: "Returned" },
];
const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-md bg-white p-5 sticky top-5">
            <h1 className="font-bold text-xl">Filter</h1>

            <div className="space-y-4 mt-5">
              <h1 className="font-semibold text-xl">Order Status</h1>

              {orderStatus.map((option) => (
                <div className="flex items-center" key={option.value}>
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    id={option.value} // Set a unique id
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-10">
            {[1, 1, 1, 1, 1, 1].map((items) => (
              <OrderCard className="mb-10" key={items} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
