import './App.css'
import LatestCollection from './components/Homepage/LatestCollection';
import Navbar from './components/Pages/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Pages/Footer';
import Ourpolicies from './components/Homepage/Ourpolicies';
import Bestseller from './components/Homepage/Bestseller';
import { useCallback, useState, useEffect } from 'react'

function App() {
  const[data,setData]=useState([])
    const fetchApi=useCallback(async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const response=await res.json()
        setData(response)
    },[])
    useEffect(()=> {
        fetchApi()
    },[])

  return (
    <>
      <Navbar/>
      <Hero/>
      <LatestCollection data={data}/>
      <Bestseller data={data}/>
      <Ourpolicies/>
      <Footer/>
    </>
  )
}

export default App
