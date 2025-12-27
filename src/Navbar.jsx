import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <div className="container">
                <div className='navLogo'>
                    <img src="src/assets/trendifyImg.png" alt="no image" />
                </div>
                <div className='navLinks'>
                    <div>HOME</div>
                    <div>COLLECTION</div>
                    <div>ABOUT</div>
                    <div>CONTACT</div>
                </div>
                <div className='navIcons'>
                    <HiMagnifyingGlass />
                    <FaRegHeart />
                    <GoBriefcase />
                    <IoPersonOutline />
                </div>
            </div>
        </>
    )
}

export default Navbar