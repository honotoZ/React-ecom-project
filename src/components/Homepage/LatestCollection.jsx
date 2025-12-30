import React, { useCallback, useState } from 'react'

function LatestCollection() {
    const[data,setData]=useState([])

    const fetchApi=useCallback(async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const response=await res.json()
        setData(response)
    },[])
    fetchApi()

    return (
        <>
            <div className='container mx-auto my-22'>
                <div className='flex flex-col items-center p-6 gap-3'>
                    <h2 className='w-lg text-center text-4xl'><span className='opacity-50'>LATEST</span> <span className='font-bold'>COLLECTIONS</span></h2>
                    <p className='w-5xl text-center opacity-60'>Step into a world of style with our newest collections, carefully curated to bring you the best in fashion, home decor, and more.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {
                        data.map((element,index)=>(
                            <div className='container flex flex-col w-60' key={index}>
                                <img src={element.image} alt="" className='cartImg w-full h-60 object-cover mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'/>
                                <p>{element.title}</p>
                                <p>{element.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LatestCollection