import "./App.css";
import Footer from "./Customers/Components/Footer/Footer";
import Navigation from "./Customers/Components/Navigation/Navigation";
import Product from "./Customers/Components/Product/Product";
import HomePage from "./Customers/Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <header className="relative z-[999] bg-white">
        <Navigation className="navigation" />
      </header>
      <div>
        {/* <HomePage className="home-page" /> */}
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
