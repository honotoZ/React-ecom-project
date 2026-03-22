import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-[84%] m-auto'>
                <div className='flex justify-between'>
                    <div className='w-2xl'>
                        <div className='mb-4'>
                            <img src="src/assets/trendifyImg.png" alt="" className='w-37 cursor-pointer'/>
                        </div>
                        <div className='w-xl text-sm opacity-70'>Thank you for shopping with Trendify! We're dedicated to bringing you the 
                        latest trends and top-quality products. Follow us on social media for updates on 
                        new arrivals, exclusive offers, and more. If you have any questions or need 
                        assistance, our friendly customer support team is here to help. Subscribe to our 
                        newsletter for special discounts and be the first to know about our latest promotions. 
                        Your style journey starts here—let's make it unforgettable!</div>
                    </div>
                    <div className='w-50'>
                        <div className='font-semibold text-xl'>COMPANY</div>
                        <div className='text-sm mt-2 opacity-70'>
                            <div className='cursor-pointer'>Home</div>
                            <div className='cursor-pointer'>About Us</div>
                            <div className='cursor-pointer'>Delivery</div>
                            <div className='cursor-pointer'>Privacy & Policy</div>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='font-semibold text-xl'>GET IN TOUCH</div>
                        <div className='text-sm mt-2 opacity-70'>+11-558-669-447</div>
                        <div className='text-sm opacity-70'>contact.trendify@info.com</div>
                    </div>
                </div>
                <div className='text-center mt-10 p-4 text-sm'>Copyright 2024 Trendify. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer