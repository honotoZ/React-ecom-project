import './App.css'
import { useState } from 'react';
import Navbar from './components/Pages/Navbar';
import Footer from './components/Pages/Footer';
import ProductsProvider from './components/Provider/ProductsProvider';
import CartProvider from './components/Provider/CartProvider'
import Collection from './components/Collection/Collection';
import Home from './components/Homepage/Home';
import About from './components/AboutUs/About';
import Contact from './components/Contact/Contact';
import CartImg from './components/CartImages/CartImg';
import CartDetails from './components/CartImages/CartDetails';
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
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cartImg/:id' element={<CartDetails/>}/>
            {/* <Route path='/cartDetails/:id' element={<CartDetails/>}/> */}
          </Routes>
          <Footer/>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
