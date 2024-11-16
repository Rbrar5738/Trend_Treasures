// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";
// import OrdersTable from "../components/Orders/OrdersTable";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getOrders } from "../../State/Admin/Orders/Action";

const MonthlyOverview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { adminsOrder } = useSelector((store) => store);
  const { customersProduct } = useSelector((store) => store);
  const [totalItems, setTotalItems] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    dispatch(getOrders({ jwt }));
  }, [jwt, adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);
  useEffect(() => {
    // Recalculate totalItems whenever adminsOrder.orders changes
    const newTotalItems =
      adminsOrder?.orders?.reduce((acc, order) => {
        return acc + order.orderItems.length;
      }, 0) || 0;

    setTotalItems(newTotalItems);
  }, [adminsOrder.orders]);

  const salesData = [
    {
      stats: totalItems.toString(),
      title: "Total Orders",
      color: "primary",
      icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "10",
      title: "Total Customers",
      color: "success",
      icon: <AccountOutline sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "42",
      color: "warning",
      title: "Total Products",
      icon: <CellphoneLink sx={{ fontSize: "1.75rem" }} />,
    },
  ];
  return (
    <Card>
      <CardHeader
        title=" Overview"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        // subheader={
        //   <Typography variant='body2'>
        //     <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
        //       Total 48.5% growth
        //     </Box>{' '}
        //     😎 this month
        //   </Typography>
        // }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {salesData.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "common.white",
                    backgroundColor: `${item.color}.main`,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="caption">{item.title}</Typography>
                  <Typography variant="h6">{item.stats}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
