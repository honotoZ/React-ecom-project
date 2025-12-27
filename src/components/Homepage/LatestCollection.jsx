import React, { useCallback, useState } from 'react'

function LatestCollection() {
    const[data,setData]=useState([])

    const fetchApi=useCallback(async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const response=await res.json()
        setData(response)
    },[])
    fetchApi()

    return (
        <>
            <div className='cart'>
                    {
                        data.map((element,index)=>(
                            <div className='cart2' key={index}>
                                <img src={element.image} alt="" />
                                <p>{element.description}</p>
                            </div>
                        ))
                    }
            </div>
        </>
    )
}

export default LatestCollection