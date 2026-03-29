import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-[84%] m-auto mt-40'>
                <div className='flex justify-between'>
                    <div className='w-2xl'>
                        <img src="src/assets/trendifyImg.png" alt="" className='w-[21%] mb-4 cursor-pointer'/>
                        <div className='w-[70%] text-sm opacity-70'>Thank you for shopping with Trendify! We're dedicated to bringing you the 
                        latest trends and top-quality products. Follow us on social media for updates on 
                        new arrivals, exclusive offers, and more. If you have any questions or need 
                        assistance, our friendly customer support team is here to help. Subscribe to our 
                        newsletter for special discounts and be the first to know about our latest promotions. 
                        Your style journey starts here—let's make it unforgettable!</div>
                    </div>
                    <div className='w-50'>
                        <div className='font-semibold text-xl mb-5'>COMPANY</div>
                        <div className='text-sm text-gray-600 flex flex-col gap-2'>
                            <div className='cursor-pointer'>Home</div>
                            <div className='cursor-pointer'>About Us</div>
                            <div className='cursor-pointer'>Delivery</div>
                            <div className='cursor-pointer'>Privacy & Policy</div>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='font-semibold text-xl mb-5'>GET IN TOUCH</div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-sm text-gray-600'>+11-558-669-447</div>
                            <div className='text-sm text-gray-600'>contact.trendify@info.com</div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-10 p-4 text-sm'>Copyright 2024 Trendify. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer