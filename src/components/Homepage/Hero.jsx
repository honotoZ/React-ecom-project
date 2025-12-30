import React from 'react'
import { GoDash } from "react-icons/go";
// import trendImg from 'src/assets/hero_img-DOCOb6wn.png'


function Hero() {
    return (
        <>
            <div className='container flex m-auto justify-between items-center border'>
                <div className='m-auto'>
                    <div className='flex items-center'><GoDash className='text-6xl'/> OUR BEST SELLERS</div>
                    <div className='font-900 text-3xl'>LATEST ARRIVALS</div> 
                    <div className='flex items-center font-800'>SHOP NOW <GoDash className='text-6xl'/></div>
                </div>
                <div className='hero2'>
                    <img className='w-xl' src="https://euphonious-sunflower-40cfe9.netlify.app/assets/hero_img-DOCOb6wn.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero