import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../State/Order/Action.jsx";
import BackdropComponent from "../BackDrop/Backdrop";

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((store) => store);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [dispatch, jwt]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredOrders = order.orders?.filter((order) => {
    if (filter === "ALL") return true;
    return order.orderStatus === filter;
  });

  return (
    <Box className="px-10">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
            <Typography variant="h6" className="font-bold text-lg">
              Filters
            </Typography>
            <div className="space-y-4 mt-10">
              <Typography variant="subtitle1" className="font-semibold">
                ORDER STATUS
              </Typography>
              <Select
                value={filter}
                onChange={handleFilterChange}
                displayEmpty
                inputProps={{ "aria-label": "Order Filter" }}
                fullWidth
              >
                <MenuItem value="ALL">All</MenuItem>
                <MenuItem value="DELIVERED">Delivered</MenuItem>
                <MenuItem value="SHIPPED">Shipped</MenuItem>
                <MenuItem value="PLACED">Placed</MenuItem>
                <MenuItem value="PENDING">Pending</MenuItem>
              </Select>
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Box className="space-y-5">
            {filteredOrders?.length > 0 ? (
              filteredOrders.map((order) =>
                order?.orderItems?.map((item) => (
                  <OrderCard key={item._id} item={item} order={order} />
                ))
              )
            ) : (
              <Typography>No orders found</Typography>
            )}
          </Box>
        </Grid>
      </Grid>

      <BackdropComponent open={order.loading} />
    </Box>
  );
};

export default Order;
