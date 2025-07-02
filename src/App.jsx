import './App.css'
import { useState } from 'react'
import Landing from './Pages/Dashboard';
import Products from "../src/Pages/Products";
import Categories from "../src/Pages/Categories"
import Banners from '../src/Pages/Banners';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addproduct from '../src/Pages/Addproduct';
import Addcategory from '../src/Pages/Addcategory';
import Addsubcategory from '../src/Pages/Addsubcategory';
import Orders from '../src/Pages/Orders';
import Users from './Pages/Users';
import Reviews from './Pages/Reviews';
import Coupons from './Pages/Coupons';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/addsubcategory" element={<Addsubcategory />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/user" element={<Users />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/coupon" element={<Coupons />} />







        </Routes>
      </Router>

    </>

  )
}

export default App
