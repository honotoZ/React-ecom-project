import React from 'react'
import ProductsContainer from '../Homepage/ProductsContainer'

function RelatedProducts({ category }) {
    return(
        <>
            <div className='w-[84%] mx-auto mt-20 mb-30'>
                <div className='flex items-center justify-center gap-2 font-semibold pt-3 pb-5'> 
                    <span className='text-3xl font-sans text-gray-500 font-semibold'>RELATED</span>
                    <span className='text-3xl font-sans text-gray-700 font-semibold'>PRODUCTS</span>
                    <span className='sm:w-14 h-[2.19px] bg-gray-600 ml-1'></span>
                </div>
                <div>
                    {
                        <ProductsContainer start={0} end={5} cols={5} category={category}/>
                    }
                </div>
            </div>
        </>
    )
}

export default RelatedProducts;