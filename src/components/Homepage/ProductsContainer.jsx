import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductsContainer = ({data,start,end}) => {
    console.log(start,end) // latest >> 0 20 || best >>0 5 
    
    return (
    <>
        <div className='flex flex-wrap justify-center gap-5'>
                    {
                        data.slice(start,end).map((element,index)=>(
                            <div className='relative container flex flex-col w-55 h-80' key={index}>
                                <div className="absolute top-2 right-2 z-10 cursor-pointer">
                                    <AiOutlineHeart className="text-3xl text-red-600 hover:text-blue-500 transition-colors" 
                                    onClick={()=>{
                                        
                                    }}/>
                                </div>
                                <img src={element.image[0]} alt="" className='w-55 h-60 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'/>
                                <p className='font-sans opacity-60'>{element.name}</p>
                                <p className='font-sans opacity-70'>{element.price}</p>
                            </div>
                        ))
                    }
                </div>
    </>
    )
}

export default ProductsContainer