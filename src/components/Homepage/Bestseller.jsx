import { MdOutlineHorizontalRule } from "react-icons/md";
import ProductsContainer from './ProductsContainer';

function Bestseller() {    
    return (
        <>
            <div className='w-[84%] mx-auto my-12'>
                <div className='flex flex-col items-center pb-7 pt-8 gap-3'>
                    <h2 className='flex items-center gap-2 text-3xl font-semibold'>
                        <span className='opacity-50'>BEST</span>
                        <span className='opacity-75'>SELLERS</span>
                        <div className="w-13 h-[2px] bg-black opacity-75"></div>
                    </h2>
                    <p className='opacity-75'>Our best sellers are a curated selection of top-rated items that have won over shoppers with their quality, style, and value.</p>
                </div>
                <div>
                    {
                        <ProductsContainer start={0} end={5} cols={5}/>
                    }
                </div>
            </div>
        </>
    )
}

export default Bestseller