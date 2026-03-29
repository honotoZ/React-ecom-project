import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";
import ProductsContainer from '../Homepage/ProductsContainer';

function AllCollection() {
    return (
        <>
            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <span className='text-2xl font-sans text-gray-400 font-semibold'>ALL</span>&nbsp;
                    <span className='text-2xl font-sans text-gray-600 font-semibold'>COLLECTIONS</span>
                    <div className='sm:w-15 h-[2.19px] bg-gray-600 ml-3'></div>
                </div>
                <div className='border-2 border-gray-300'>
                    <select className='p-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low">Sort by: Low to High</option>
                        <option value="high">Sort by: High to Low</option>
                    </select>
                </div>
            </div>
            <div>
                <ProductsContainer start={0} end={8} cols={4}/>
            </div>
        </>
    )
}

export default AllCollection