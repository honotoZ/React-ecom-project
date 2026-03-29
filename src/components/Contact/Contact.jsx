import React from 'react'
import Hero from './Hero'

function Contact() {
    return (
        <>
            <div className='w-[84%] flex justify-center items-center mx-auto pt-8 pb-4 mb-10'>
                <span className='text-2xl font-medium text-gray-400 font-semibold'>CONTACT</span>&nbsp;
                <span className='text-2xl font-medium text-gray-600 font-semibold'>US</span>
                <div className='sm:w-16 h-[2.19px] bg-gray-600 ml-3'></div>
            </div>
            <Hero/>
        </>
    )
}

export default Contact