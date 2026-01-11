import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import ProductContainer from "./ProductContainer";

function LatestCollection({data}) {
    
    return (
        <>
            <div className='container mx-auto my-22'>
                <div className='flex flex-col items-center p-6 gap-3'>
                    <h2 className='flex items-center gap-2 text-4xl font-bold'>
                        <span className='opacity-40'>LATEST</span> 
                        <span className='font-bold opacity-70'>COLLECTIONS</span>
                        <MdOutlineHorizontalRule className="text-4xl opacity-50 text-6xl"/>
                    </h2>
                    <p className='w-5xl text-center opacity-60'>Step into a world of style with our newest collections, carefully curated to bring you the best in fashion, home decor, and more.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {
                        <ProductContainer data={data} start={0} end={data.length}/>
                    }
                </div>
            </div>
        </>
    )
}

export default LatestCollection