import React from 'react'

function Filter() {
    return (
        <>
            <div className='flex flex-col w-2/5 gap-6 mt-2'>
                <div className='text-xl font-medium font-sans'>FILTERS</div>
                <div className='border-2 flex-col border-gray-300 p-4'>
                    <div>
                        <h2 className='text-black font-semibold'>CATEGORIES</h2>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="men" className='text-gray-500'>Men</label>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="women" className='text-gray-500'>Women</label>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="kids" className='text-gray-500'>Kids</label>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-gray-300 p-4'>
                    <div>
                        <h2 className='text-black font-semibold'>TYPES</h2>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="men" className='text-gray-500'>Topwear</label>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="women" className='text-gray-500'>Bottomwear</label>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-2'/>
                            <label htmlFor="kids" className='text-gray-500'>Winterwear</label>
                        </div>
                    </div>
                </div>
                <div className='border-none p-2 w-30 bg-black text-center text-white rounded-md'>Clear Filters</div>
            </div>
        </>
    )
}

export default Filter