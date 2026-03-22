import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { PiCheckCircleFill } from "react-icons/pi";
import { FiHeadphones } from "react-icons/fi";


function Ourpolicies() {
    return (
        <>
            <div className='w-[84%] m-auto flex flex-col mb-10'>
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
            </div>
        </>
    )
}

export default Ourpolicies