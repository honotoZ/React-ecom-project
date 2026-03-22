import React from 'react'

function Subscribe() {
    return (
        <>
            <div className='w-[84%] text-center mb-40 flex flex-col items-center gap-4 mx-auto'>
                    <h2 className='font-bold p-1 text-2xl w-full'>Unlock 20% Off | Subscribe Today!</h2>
                    <p className='opacity-50 p-1 w-full'>Don't miss out—unlock your savings now by subscribing below!</p>
                    <div className='flex items-stretch'>
                        <input type="text" 
                        placeholder='hello@gmail.com' 
                        className='w-lg p-2 m-2 outline-none'/>
                        <button 
                        className='font-sans font-medium bg-black text-xs text-white px-10 font-sans 
                        text-base cursor-pointer'>
                        SUBSCRIBE
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Subscribe