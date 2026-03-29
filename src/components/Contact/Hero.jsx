import React from 'react'
import ContactImg from '../../assets/contact_img-CyOum2vk.png'
import Subscribe from '../Homepage/Subscribe';

function Hero() {
    return (
        <>
            <div className='w-[84%] mx-auto mb-8 flex justify-between'>
                <img src={ContactImg} alt="No Image" className='w-[39%]' />
                <div className='w-[57%] flex flex-col justify-center gap-6'>
                    <h2 className='w-[15%] text-xl font-bold opacity-70'>Our Store</h2>
                    <p className='w-[31%] opacity-60'>Trendify 354 Fashion Lane 
                    Los Angeles, SC 45678, USA</p>
                    <p className='w-[35%] opacity-60'>
                        Tel: (+11)-558-669-44 Email:contact.trendify@info.com
                    </p>
                    <h2 className='w-[30%] text-xl font-bold opacity-70'>Careers at Forever</h2>
                    <p className='opacity-60'>
                    Join us at Trendify! Explore job openings and help shape the future of fashion.
                    Explore our current job openings and discover how you can contribute to our mission of setting trends and creating style.
                    </p>
                    <button className='w-[20%] text-sm border py-4 cursor-pointer hover:bg-gray-800 hover:text-white'>Explore Jobs</button>
                </div>
            </div>
            <Subscribe/>
        </>
    )
}

export default Hero