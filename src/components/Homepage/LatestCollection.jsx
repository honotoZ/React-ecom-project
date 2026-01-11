import { useCallback, useState, useEffect } from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

function LatestCollection() {
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
            <div className='container mx-auto my-22'>
                <div className='flex flex-col items-center p-6 gap-3'>
                    <h2 className='flex items-center gap-2 text-4xl font-bold'>
                        <span className='opacity-40'>LATEST</span> 
                        <span className='font-bold opacity-70'>COLLECTIONS</span>
                        <MdOutlineHorizontalRule className="text-4xl opacity-50 text-6xl"/>
                    </h2>
                    <p className='w-5xl text-center opacity-60'>Step into a world of style with our newest collections, carefully curated to bring you the best in fashion, home decor, and more.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {
                        data.map((element,index)=>(
                            <div className='relative container flex flex-col w-60' key={index}>
                                <div className="absolute top-2 right-2 z-10 cursor-pointer">
                                    <FaRegHeart className='text-red-500 text-2xl' />
                                </div>
                                <img src={element.image} alt="" className='w-50 h-55 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'/>
                                <p className='font-sans opacity-60'>{element.title}</p>
                                <p className='font-sans opacity-70'>{element.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LatestCollection