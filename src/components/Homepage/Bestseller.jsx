import React from 'react'
import LatestCollection from './LatestCollection'
import { MdOutlineHorizontalRule } from "react-icons/md";
import ProductsContainer from './ProductsContainer';
function Bestseller({data}) {    
    return (
        <>
            <div className='container mx-auto my-22'>
                <div className='flex flex-col items-center p-6 gap-3'>
                    <h2 className='flex items-center gap-2 text-4xl font-bold'>
                        <span className='opacity-40'>BEST</span>
                        <span className='opacity-70'>SELLERS</span>
                        <MdOutlineHorizontalRule className="text-4xl opacity-50 text-6xl" />
                    </h2>
                    <p className='opacity-50'>Our best sellers are a curated selection of top-rated items that have won over shoppers with their quality, style, and value.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {
                        <ProductsContainer data={data} start={0} end={5}/>
                    }
                </div>
               
            </div>
        </>
    )
}

export default Bestseller