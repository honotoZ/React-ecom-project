import React, { useContext } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import CartContext from '../Context/Utils/CartContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const {cartItems,setCartItems}=useContext(CartContext)
    return (
        <>
            <div className="w-[84%] flex m-auto justify-between items-center sticky top-0 z-50 bg-white 
            p-3 border-x-1 border-b-2 border-x-gray-100 border-b-gray-200">
                <div className='navLogo'>
                    <img src="/assets/trendifyImg.png" alt="no image" className='w-45 cursor-pointer'/>
                </div>
                <div className='navLinks flex gap-4 items-center'>
                    <Link to='/' className='cursor-pointer'>HOME</Link>
                    <Link to='/collection' className='cursor-pointer'>COLLECTION</Link>
                    <Link to='/about' className='cursor-pointer'>ABOUT</Link>
                    <Link to='/contact' className='cursor-pointer'>CONTACT</Link>
                </div>
                <div className='relative flex justify-evenly text-[1.68rem] py-1 gap-4 min-w-[170px]'>
                    <HiMagnifyingGlass className='cursor-pointer'/>
                    <FaRegHeart className='cursor-pointer' />
                    {cartItems.length > 0 &&(
                    <span className='bg-red-500 text-white rounded-full flex items-center justify-center
                    text-xs text-center absolute left-16 top-4 w-[1.1rem] h-[1.1rem]'>
                        {cartItems?.length}
                    </span>
                    )}
                    <GoBriefcase className='cursor-pointer'/>
                    <IoPersonOutline className='cursor-pointer'/>
                </div>
            </div>
        </>
    )
}

export default Navbar