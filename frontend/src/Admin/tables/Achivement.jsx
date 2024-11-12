// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../State/Admin/Orders/Action";

// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { adminsOrder } = useSelector((store) => store);
  const [anchorElArray, setAnchorElArray] = useState([]);

  useEffect(() => {
    dispatch(getOrders({ jwt }));
  }, [jwt, adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  function handleOrders() {
    navigate("/admin/orders");
  }
  // ** Hook
  const theme = useTheme();

  const imageSrc =
    theme.palette.mode === "light" ? "triangle-light.png" : "triangle-dark.png";
  useEffect(() => {
    if (adminsOrder?.orders) {
      let newTotalPrice = 0;
      adminsOrder.orders.forEach((item) => {
        newTotalPrice += item.totalPrice || 0;
      });
      setTotalPrice(newTotalPrice);
    }
  }, [adminsOrder]);

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          Trend Treasures
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>

        <Typography variant="h5" sx={{ my: 3.1, color: "primary.main" }}>
          Total Sale: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            handleOrders();
          }}
        >
          View Sales
        </Button>
        <TriangleImg
          alt="triangle background"
          src={`/images/misc/${imageSrc}`}
        />
        <TrophyImg alt="trophy" src="/images/misc/trophy.png" />
      </CardContent>
    </Card>
  );
};

export default Achivement;
