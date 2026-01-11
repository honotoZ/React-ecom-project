import { FaRegHeart } from "react-icons/fa6";

function ProductContainer({data,start,end}) {

    return (
        <>
            <div className='flex flex-wrap justify-center gap-5'>
                    {
                        data.slice(start,end).map((element,index)=>(
                            <div className='relative container flex flex-col w-60' key={index}>
                                <div className="absolute top-2 right-2 z-10 cursor-pointer">
                                    <FaRegHeart className='text-red-500 text-2xl'/>
                                </div>
                                <img src={element.image} alt="" className='w-50 h-55 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'/>
                                <p className='font-sans opacity-60'>{element.title}</p>
                                <p className='font-sans opacity-70'>{element.price}</p>
                            </div>
                        ))
                    }
            </div>
        </>
    )
}

export default ProductContainer