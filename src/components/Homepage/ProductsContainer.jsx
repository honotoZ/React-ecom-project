import { useContext, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductsContext from "../Context/Utils/ProductsContext";
import CartContext from "../Context/Utils/CartContext";
import { Link } from "react-router-dom";

const ProductsContainer = ({start, end, cols = 5, category}) => {
    console.log(start,end)
    const{cartItems,setCartItems,addToCart,removeFromCart}=useContext(CartContext)
    const {productsData,loading,error,fetchProducts}=useContext(ProductsContext)

    const handleCartClick = (product) => {
        const isInCart = cartItems.some((item) => product.id === item.id);
        isInCart
            ? removeFromCart(product)
            : addToCart(product);
    };

    useEffect(()=>{
        fetchProducts()
    },[])

    const filteredProducts = category
        ? productsData.filter((product) => product.category === category)
        : productsData;
    
    const gridCols = {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5"
    };
    
    return (
    <>
        {loading ? (
            <div className="flex flex-wrap justify-center gap-5 h-[50px] w-[80%] bg-black text-white">
                Loading
            </div>
        ):(
            <div className={`grid ${gridCols[cols]} gap-x-4 gap-y-6`}>
                {filteredProducts.slice(start, end).map((product) => {
                    const isInCart = cartItems.some((item)=> product.id === item.id);
                    return(
                        <div className='relative flex flex-col w-full' key={product.id}>
                            <div className="absolute top-2 right-1 z-10 cursor-pointer">
                                <span onClick={()=>handleCartClick(product)}>
                                    {!isInCart ? (
                                        <AiOutlineHeart className="w-7 h-7 text-red-600 hover:text-red-500 transition-colors"/>
                                    ) : (
                                        <AiFillHeart className="w-7 h-7 text-red-600 hover:text-red-500 transition-colors"/>
                                    )}
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <Link to={`/cartImg/${product.id}`}>
                                    <img 
                                    src={product.image?.[0]}
                                    alt=""
                                    className='w-full object-cover cursor-pointer transition-transform 
                                    duration-200 ease-in-out hover:scale-110'/>
                                </Link>
                            </div>
                                <p className='font-sans opacity-80 text-sm pt-4'>{product.name}</p>
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