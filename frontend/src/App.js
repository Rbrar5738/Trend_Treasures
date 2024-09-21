import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Customers/Components/Cart/Cart";
import Footer from "./Customers/Components/Footer/Footer";
import Navigation from "./Customers/Components/Navigation/Navigation";
import Product from "./Customers/Components/Product/Product";
import ProductDetails from "./Customers/Components/ProductDetails/ProductDetails";
import HomePage from "./Customers/Pages/HomePage/HomePage";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
}

export default App;
