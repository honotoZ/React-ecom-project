import React from 'react'
import Filter from './Filter'
import AllCollection from './AllCollection'
import Pagination from './Pagination'

function Collection() {
    return (
        <>
            <div className='w-[84%] flex m-auto gap-5 mt-10'>
                    <Filter/>
                <div>
                    <AllCollection/>
                    <Pagination/>
                </div>
            </div>
        </>
    )
}

export default Collection