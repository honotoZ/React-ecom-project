import React, { useEffect, useState } from 'react'
import ProductsContext from '../Context/Utils/ProductsContext';

function TestContainer({start,end}) {
    console.log(start,end)
    const{data,loading,error,fetchProducts}=useContext(ProductsContext)
    console.log(loading,error,fetchProducts);
    useEffect(()=>{
        fetchProducts()
    },[])
    
    return (
        <>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    data.slice(start,end).map((element,index)=>(
                        <div className='relative container flex flex-col w-55 h-80' key={index}>
                            <div className="absolute top-2 right-2 z-10 cursor-pointer">
                                <AiOutlineHeart className="text-3xl text-red-600 hover:text-blue-500 transition-colors"
                                onClick={()=>{
                                    setHeartCount(heartCount+1)
                                }}/>
                            </div>
                            <img src={element.image[0]} alt="" className='w-55 h-60 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'/>
                            <p className='font-sans opacity-60'>{element.name}</p>
                            <p className='font-sans opacity-70'>{element.price}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductsProvider