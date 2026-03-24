import React from 'react'

function Choose() {
    return (
        <>
            <div className='w-[84%] mx-auto mt-13 mb-10'>
                <div className='flex items-center pt-4 pb-8'>
                    <span className='text-xl font-medium text-gray-400 font-semibold'>WHY</span>&nbsp;
                    <span className='text-xl font-medium text-gray-600 font-semibold'>CHOOSE US</span>
                    <div className='sm:w-15 h-[2.19px] bg-gray-600 ml-3'></div>
                </div>
                <div className='flex'>
                    <div className='px-15 py-20 border border-gray-200 flex flex-col gap-5'> 
                        <h2 className='font-bold text-sm'>Quality Assurance</h2>
                        <p className='text-sm text-gray-600'>At Trendify, quality comes first. Every product is carefully chosen and inspected 
                        to meet our high standards. Shop with confidence, knowing we ensure excellence in every 
                        detail.
                        </p>
                    </div>
                    <div className='px-14 py-20 border border-gray-200 flex flex-col gap-5'>
                        <h2 className='font-bold text-sm'>Convenience</h2>
                        <p className='text-sm text-gray-600'>Trendify ensures a smooth shopping experience with easy browsing, fast shipping, simple returns, 
                        and multiple payment options. Your comfort and satisfaction are our priorities.
                        </p>
                    </div>
                    <div className='px-14 py-20 border border-gray-200 flex flex-col gap-5'>
                        <h2 className='font-bold text-sm'>Exceptional Customer Service</h2>
                        <p className='text-sm text-gray-600'>At Trendify, exceptional service is our promise. Our dedicated support team is here to assist you 
                        with any questions or concerns, ensuring a smooth and satisfying shopping experience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose