import React, {useState} from 'react'

function Review() {
    const [activeTab, setActiveTab] = useState('Description');

    return (
        <>
            <div className='w-[84%] mx-auto mt-20'>
                <button className={`px-3 py-3 w-35 text-sm cursor-pointer ${activeTab === 'Description' ? 'font-bold border-x border-t border-black' : ''}`}
                onClick={()=>setActiveTab('Description')}>Description</button>
                <button className={`px-3 py-3 w-35 text-sm cursor-pointer ${activeTab === 'Reviews' ? 'font-bold border-l border-t border-black' : ''}`} 
                onClick={()=>setActiveTab('Reviews')}>Reviews</button>

                <div className='px-8 py-5 border border-gray-300'>
                    {activeTab==='Description'?(
                        <>
                            <p className='text-sm text-gray-500 mb-4'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and 
                            short sleeves, worn as an undershirt or outer garment.</p>
                            <p className='text-sm text-gray-500'>Elevate your style with our meticulously 
                            crafted Trendify quality products. Designed with a perfect balance of elegance and practicality...</p>
                        </>
                    ):(
                        <p className="text-gray-500 text-sm">
                            No reviews submitted yet.
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Review