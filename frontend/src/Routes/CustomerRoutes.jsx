import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customers/Pages/HomePage/HomePage'
import Cart from '../Customers/Components/Cart/Cart'

import Footer from '../Customers/Components/Footer/Footer'
import Product from '../Customers/Components/Product/Product'
import ProductDetails from '../Customers/Components/ProductDetails/ProductDetails'
import Checkout from '../Customers/Components/Checkout/Checkout'
import Navigation from '../Customers/Components/Navigation/Navigation'
import LoginForm from '../Customers/Auth/LoginForm'





const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <header className="relative z-[999] bg-white">
        <Navigation />
      </header>
        </div>
      <Routes>
        <Route path='/' element={<HomePage  />} />
        <Route path='/cart' element={<Cart  />} />
        <Route path='/:levelone/:leveltwo/:levelthree' element={<Product  />} />
        <Route path='/products/:productId' element={<ProductDetails  />} />
        <Route path='/checkout' element={<Checkout  />} />
        <Route path='/login' element={<HomePage  />} />
        <Route path='/register' element={<HomePage  />} />
        

     

      </Routes>
      <div>
      <Footer />
      </div>
 
    </div>
    
  
  
  )
}

export default CustomerRoutes