import { MdOutlineHorizontalRule } from "react-icons/md";
import ProductsContainer from './ProductsContainer';

function LatestCollection() {
    return (
        <>
            <div className='w-[84%] mx-auto my-12'>
                <div className='flex flex-col items-center pb-7 pt-8 gap-3'>
                    <h2 className='flex items-center gap-2 text-3xl font-semibold'>
                        <span className='opacity-50'>LATEST</span> 
                        <span className='opacity-75'>COLLECTIONS</span>
                        <div className="w-13 h-[2px] bg-black opacity-75 ml-1"></div>
                    </h2>
                    <p className='opacity-75'>Step into a world of style with our newest collections, carefully curated to bring you the best in fashion, home decor, and more.</p>
                </div>
                <div>
                    {
                        <ProductsContainer start={0} end={10} cols={5}/>
                    }
                </div>
            </div>
        </>
    )
}

export default LatestCollection