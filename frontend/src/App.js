import "./App.css";
import Navigation from "./Customers/Components/Navigation/Navigation";
import HomePage from "./Customers/Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <header className="relative z-[999] bg-white">
        <Navigation className="navigation" />
      </header>
      <HomePage className="home-page" />
    </>
  );
}

export default App;
