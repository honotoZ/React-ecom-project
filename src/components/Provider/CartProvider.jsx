import { useState } from "react";
import CartContext from "../Context/Utils/CartContext";

const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])

    const addToCart=(product)=>{
        setCartItems([...cartItems,product])
        console.log(cartItems);
        
    }

    const removeFromCart=(product)=>{
        const filteredItems=cartItems.filter((element)=>(element._id!==product._id))
        setCartItems(filteredItems)
        console.log(cartItems);
        
    }

    return(
        <CartContext.Provider value={{cartItems,setCartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider