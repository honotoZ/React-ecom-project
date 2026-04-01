import React from 'react'
import { useParams } from 'react-router-dom'
import CartImg from './CartImg'
import Review from './Review'
import RelatedProducts from './RelatedProducts'

function CartDetails() {
    const {id} = useParams();

    return (
        <>
            <CartImg id={id}/>
            {/* <Review/> */}
            {/* <RelatedProducts category={data.category}/> */}
        </>
    )
}

export default CartDetails