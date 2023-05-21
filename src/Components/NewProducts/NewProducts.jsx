import React from 'react'
import ProductsSlider from '../ProductsSlider/ProductsSlider';






export default function NewProducts() {
    return (
        <div className=' pt-36 '>
            <div className=' flex flex-col items-center '>
                <h2 className='text-[20px]'>جدیدترین محصولات</h2>
                <ProductsSlider />
                <button className='border-[1px] border-main-green2 font-semibold py-2 px-12 rounded-lg mt-8 text-main-green2'>مشاهده همه</button>
            </div>
        </div>
    )
}
