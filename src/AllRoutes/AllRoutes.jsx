import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Home from '../components/Home/Home'
import SplitScreen from '../components/Login/Login'
import Product from '../components/Product/Product'
import SingleProduct from '../components/Product/SingleProduct'
import SignupCard from '../components/Signup/SignUp'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<SignupCard />} />
            <Route path='/login' element={<SplitScreen />} />
            <Route path="/product" element={<Product />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default AllRoutes