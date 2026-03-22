import { useContext, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductsContext from "../Context/Utils/ProductsContext";
import CartContext from "../Context/Utils/CartContext";

const ProductsContainer = ({start,end}) => {
    console.log(start,end)
    const{cartItems,setCartItems,addToCart,removeFromCart}=useContext(CartContext)
    const {productsData,loading,error,fetchProducts}=useContext(ProductsContext)

    const handleCartClick = (product) => {
        const isInCart = cartItems.some((item) => product._id === item._id);

        isInCart
            ? removeFromCart(product)
            : addToCart(product);
    };

    useEffect(()=>{
        fetchProducts()
    },[])
    
    return (
    <>
        {loading ? (
            <div className="flex flex-wrap justify-center gap-5 h-[50px] w-[80%] bg-black text-white">
                Loading
            </div>
        ):(
            <div className='flex flex-wrap gap-4'>
                {productsData.slice(start,end).map((product,index)=>{
                    const isInCart = cartItems.some((item)=> product._id === item._id);

                    return(
                        <div className='relative container flex flex-col w-55 h-80' key={index}>
                            <div className="absolute top-2 right-2 z-10 cursor-pointer">
                                <span onClick={()=>handleCartClick(product)}>
                                    {!isInCart ? (
                                        <AiOutlineHeart className="w-7 h-7 text-red-600 hover:text-red-500 transition-colors"/>
                                    ) : (
                                        <AiFillHeart className="w-7 h-7 text-red-600 hover:text-red-500 transistion-colors"/>
                                    )}
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <img src={product.image[0]} alt="" 
                                className='w-55 h-60 cursor-pointer transition-transform 
                                duration-200 ease-in-out hover:scale-120'/>
                            </div>
                                <p className='font-sans opacity-80 text-sm'>{product.name}</p>
                                <p className='font-sans opacity-85'>{product.price.toFixed(2)}</p>
                        </div>
                    );
                })}
            </div>
        )}
    </>
    )
}

export default ProductsContainer