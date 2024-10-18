import { Route, Routes } from "react-router-dom";
import "./App.css";

import CustomerRoutes from "./Routes/CustomerRoutes";
import { useDispatch } from "react-redux";
import { getuser } from "./State/Auth/Action";
import { useEffect } from "react";
import Checkout from "./Customers/Components/Checkout/Checkout";
import Order from "./Customers/Components/Order/Order";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getuser(jwt));
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
}

export default App;
