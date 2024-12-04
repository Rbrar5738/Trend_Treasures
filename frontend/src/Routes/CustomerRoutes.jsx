import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customers/Pages/HomePage/HomePage";
import Cart from "../Customers/Components/Cart/Cart";

import Footer from "../Customers/Components/Footer/Footer";
import Product from "../Customers/Components/Product/Product.jsx";
import ProductDetails from "../Customers/Components/ProductDetails/ProductDetails";
import Checkout from "../Customers/Components/Checkout/Checkout";
// import Navigation from "../Customers/Components/Navigation/Navigation";
import Navigation from "../Customers/Components/Navbar/Navigation";
import LoginForm from "../Customers/Auth/LoginForm";
import Order from "../Customers/Components/Order/Order";
import UpdateProductForm from "../Admin/componets/updateProduct/UpdateProduct.jsx";
import PaymentSuccess from "../Customers/Components/paymentSuccess/PaymentSuccess.jsx";
import Contactus from "../Customers/Components/Contactus.jsx";
import Aboutus from "../Customers/Components/Aboutus.jsx";
import Profile from "../Customers/Components/Profile/Profile.jsx";
import OrderDetails from "../Customers/Components/Order/OrderDetails.jsx";
// import OrderDetails from "../customer/Components/orders/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <header className="relative z-[999] bg-white">
          <Navigation />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/paymentsuccess/:orderId"
          element={<PaymentSuccess />}
        ></Route>
        {/* <Route
          path="/update/:productId"
          element={<UpdateProductForm />}
        ></Route> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
