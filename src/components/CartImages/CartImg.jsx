import React, { useState, useEffect } from 'react'
import { FaRegStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Review from './Review';

function CartImg() {
    const [data,setData]=useState({});
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
        const fetchCart=async()=>{
        setLoading(true);
            try{
                const res=await fetch(`https://67cbf5463395520e6af6bea3.mockapi.io/Products/${id}`);
                const response=await res.json();
                console.log(response);
                setData(response)
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        };
        fetchCart();
    },[id])
    
    return (
        <>
            <div className='w-[84%] mx-auto pt-10 flex justify-between'>
                <div className='w-[9%] h-[5%] flex flex-col gap-3'>
                    {/* {data?.image?.map((img, index) => (
                    <img key={index} src={img} alt="" />
                    ))} */}
                    <img src={data?.image?.[0]} alt="" className='border-2 border-black p-3 cursor-pointer'/>
                    <img src={data?.image?.[1]} alt="" className='cursor-pointer'/>
                    <img src={data?.image?.[2]} alt="" className='cursor-pointer'/>
                    <img src={data?.image?.[3]} alt="" className='cursor-pointer'/>
                </div>
                <div className='w-[37%]'>
                    <img src={data?.image?.[0]} alt="" className='w-full h-full'/>
                </div>
                <div className='w-[50%] flex flex-col justify-between pt-2'>
                    <h2 className='font-semibold text-2xl'>{data.name}</h2>
                    <div className='flex text-xl'>
                        <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                    </div>
                    <h2 className='font-semibold text-3xl'>{`$${data.price}`}</h2>
                    <p className='text-gray-500'>{data.description}</p>
                    <p className='font-medium'>Select Size</p>
                    <div className='flex gap-1'>
                        <span className='py-2 px-4 text-lg font-medium border border-gray-300 shadow-lg cursor-pointer'>{data?.sizes?.[0]}</span>
                        <span className='py-2 px-4 text-lg font-medium border border-gray-300 shadow-lg cursor-pointer'>{data?.sizes?.[1]}</span>
                        <span className='py-2 px-4 text-lg font-medium border border-gray-300 shadow-lg cursor-pointer'>{data?.sizes?.[2]}</span>
                    </div>
                    <button className='w-[25%] bg-black text-white px-5 py-3 cursor-pointer'>ADD TO CART</button>
                    <p className='text-gray-500'>Guaranteed 100% Authentic – Shop with Confidence!
                    Enjoy Cash on Delivery – Pay at Your Doorstep!
                    Hassle-Free Returns & Exchanges – 10 Days, No Questions Asked!</p>
                </div>
            </div>
            <Review/>
        </>
    )
}

export default CartImg