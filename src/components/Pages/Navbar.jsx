import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <div className="container flex m-auto justify-between items-center p-3">
                <div className='navLogo'>
                    <img src="src/assets/trendifyImg.png" alt="no image" className='w-50 cursor-pointer'/>
                </div>
                <div className='navLinks flex gap-4 items-center'>
                    <div className='cursor-pointer'>HOME</div>
                    <div className='cursor-pointer'>COLLECTION</div>
                    <div className='cursor-pointer'>ABOUT</div>
                    <div className='cursor-pointer'>CONTACT</div>
                </div>
                <div className='navIcons flex gap-4 items-center text-3xl'>
                    <HiMagnifyingGlass className='cursor-pointer'/>
                    <FaRegHeart className='cursor-pointer'/>
                    <GoBriefcase className='cursor-pointer'/>
                    <IoPersonOutline className='cursor-pointer'/>
                </div>
            </div>
        </>
    )
}

export default Navbar