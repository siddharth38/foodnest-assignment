import React, { Fragment } from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import OrderSummry from './pages/OrderSummry'
import OrderDetails from './pages/OrderDetails'
import Address from './pages/Address'
import AddProduct from './pages/AddProduct'
const App = () => {
    return (
        
        <Router>
            <Fragment>
            <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/shipping" element={<Shipping/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/order" element={<OrderSummry/>}/>
              <Route path="/order/:id" element={<OrderDetails/>}/>
              <Route path="/your-address" element={<Address/>}/>
              <Route path='/add-product' element={<AddProduct/>}/>
            </Routes>
             </main>
            </Fragment>
        </Router>
         
        
    )
}

export default App
