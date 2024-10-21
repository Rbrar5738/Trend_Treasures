const express = require("express");
const app = express();
require("dotenv").config();
const { mongoConnect } = require("./mongoConnect");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoConnect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useNewUnifiedTopology: true,
})
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to Backend`);
});

const authRoute = require("../routes/authRoute");
app.use("/auth", authRoute);

const userRoute = require("../routes/userRoute");
app.use("/users", userRoute);

const productRoute = require("../routes/product.routes.js");
app.use("/api//products", productRoute);

const adminProductRoute = require("../routes/adminProduct.routes.js");
app.use("/api/admin/products", adminProductRoute);

const cartRouter = require("../routes/cart.routes.js");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("../routes/cartItem.routes.js");
app.use("/api/car_items", cartItemRouter);

const adminOrderRouter = require("../routes/adminOrder.routes.js");
app.use("/api/admin/orders", adminOrderRouter);

const orderRouter = require("../routes/order.routes.js");
app.use("/api/orders", orderRouter);

const reviewRouter = require("../routes/review.routes.js");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("../routes/rating.routes.js");
app.use("/api/ratings", ratingRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
