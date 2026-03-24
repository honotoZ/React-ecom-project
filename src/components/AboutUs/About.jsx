import React from 'react'
import AboutImg from '../../assets/about_img-BAJyTXw9.png'
import Choose from './Choose'
import Subscribe from '../Homepage/Subscribe'

function About() {
    return (
        <>
            <div>
                <div className='w-[84%] flex justify-center items-center mx-auto pt-8 pb-4 mb-10'>
                    <span className='text-2xl font-medium text-gray-400 font-semibold'>ABOUT</span>&nbsp;
                    <span className='text-2xl font-medium text-gray-600 font-semibold'>US</span>
                    <div className='sm:w-16 h-[2.19px] bg-gray-600 ml-3'></div>
                </div>
                <div className='w-[84%] flex flex-col md:flex-row items-stretch gap-10 mx-auto mt-4'>
                    <div className='w-[28rem] md:w-[28rem] md:h-[35rem] flex-shrink-0'>
                        <img
                        src={AboutImg}
                        alt="no image"
                        className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-[36rem] flex flex-col justify-between ml-10'>
                        <div>
                            <p className='text-gray-600'>Welcome to Trendify, where style meets quality. Our mission is to bring you the latest 
                            fashion trends and must-have items, all curated with an eye for quality and design. We believe 
                            that everyone deserves to express themselves through fashion, and we're here to make that easier 
                            and more enjoyable. Our collections are carefully selected to offer you a range of options that cater 
                            to every taste and occasion.
                            </p>
                        </div>
                        <div>
                            <p className='text-gray-600'>At Trendify, we prioritize your satisfaction. From the moment you browse 
                            our site to the day your order arrives, we are dedicated to providing a seamless shopping experience. 
                            Our team is always on the lookout for the latest trends, ensuring that you have access to the freshest 
                            styles as soon as they hit the runway. Thank you for choosing Trendify. We’re excited to be a part of your 
                            style journey.
                            </p>
                        </div>
                        <div>
                            <h2 className='font-bold'>Our Mission</h2>
                        </div>
                        <div>
                            <p className='text-gray-600'>
                                At Trendify, our mission is to empower you to express your unique style with high-quality, on-trend fashion. 
                                We strive to make fashion accessible to all, offering diverse products that inspire confidence.
                            </p>
                        </div>
                        <div>
                            <h2 className='font-bold'>Our Vision</h2>
                        </div>
                        <div>
                            <p className='text-gray-600'>At Trendify, our vision is to be a global fashion leader, known for cutting-edge style and quality. 
                                We aim to inspire confidence and creativity, making Trendify the go-to choice for individual expression.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Choose/>
            <Subscribe/>
        </>
    )
}

export default About