import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { PiCheckCircleFill } from "react-icons/pi";
import { FiHeadphones } from "react-icons/fi";


function Ourpolicies() {
    return (
        <>
            <div className='container m-auto flex flex-col mt-26 mb-40'>
                <div className='flex w-full justify-around py-10'>
                    <div className='flex flex-col items-center gap-3'>
                        <TfiReload className='text-5xl'/>
                        <div className='font-bold'>Easy Return & Exchange Policy</div>
                        <div className='opacity-50'>Easy Returns/exchanges within 10 days.</div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <PiCheckCircleFill className='text-5xl'/>
                        <div className='font-bold'>Our Quality Policy</div>
                        <div className='opacity-50'>Trendify ensures top-quality products.</div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <FiHeadphones className='text-5xl'/>
                        <div className='font-bold'>Best Customer Support</div>
                        <div className='opacity-50'>We support via email, phone, or chat.</div>
                    </div>
                </div>
                <div className='w-full text-center mt-12'>
                    <h2 className='font-bold p-2 text-2xl'>Unlock 20% Off | Subscribe Today!</h2>
                    <p className='opacity-50 p-2'>Don't miss out—unlock your savings now by subscribing below!</p>
                    <div className='pt-8'>
                        <input type="text" placeholder='hello@gmail.com' className='w-lg h-12 p-2 outline-none'/>
                        <button className='font-sans font-medium bg-black text-white p-3 font-sans text-base'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourpolicies