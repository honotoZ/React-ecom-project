import './App.css'
import { useState } from 'react';
import LatestCollection from './components/Homepage/LatestCollection';
import Navbar from './components/Pages/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Pages/Footer';
import Ourpolicies from './components/Homepage/Ourpolicies';
import Bestseller from './components/Homepage/Bestseller';
import ProductsProvider from './components/Provider/ProductsProvider';
import CartProvider from './components/Provider/CartProvider'
import Collection from './components/Collection/Collection';
import Home from './components/Homepage/Home';
import About from './components/AboutUs/About';
import { Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
