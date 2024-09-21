import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customers/Pages/HomePage/HomePage'
import Cart from '../Customers/Components/Cart/Cart'
import Navigation from '../Customers/Components/Navigation/Navigation'
import Footer from '../Customers/Components/Footer/Footer'
import Product from '../Customers/Components/Product/Product'
import ProductDetails from '../Customers/Components/ProductDetails/ProductDetails'
import { Checkout } from '../Customers/Components/Checkout/Checkout'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <header className="relative z-[999] bg-white">
        <Navigation className="navigation" />
      </header>
        </div>
      <Routes>
        <Route path='/' element={<HomePage  />} />
        <Route path='/cart' element={<Cart  />} />
        <Route path='/products' element={<Product  />} />
        <Route path='/products/:productId' element={<ProductDetails  />} />
        <Route path='/checkout' element={<Checkout  />} />

     

      </Routes>
      <div>
      <Footer />
      </div>
 
    </div>
    
  
  
  )
}

export default CustomerRoutes