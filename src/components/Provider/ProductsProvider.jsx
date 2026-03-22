import React, { useState } from 'react'
import ProductsContext from '../Context/Utils/ProductsContext';

function ProductsProvider({children}) {
    const [productsData,setProductsData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchProducts=async()=>{
        setLoading(true)
        try{
            const res=await fetch("https://67cbf5463395520e6af6bea3.mockapi.io/Products");
            const response=await res.json();
            // console.log(response);
            setProductsData(response)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }}

    return (
        <>
            <ProductsContext.Provider value={{productsData,loading,error,fetchProducts}}>
                {children}
            </ProductsContext.Provider>
        </>
    )
}

export default ProductsProvider