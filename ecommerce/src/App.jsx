import React from 'react'
import ProductBar from './Components/ProductBar'
import ProductCard from './Ui/ProductCard'
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Routes, Route } from "react-router-dom"
import Navbar from './Layout/Navbar'

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App