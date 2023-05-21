import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallArticleBox() {
    return (
        <div className='max-w-fit col-span-1 shadow-[0px_0px_20px_rgba(97,97,97,0.25);] flex justify-between items-center  p-[8px] rounded-lg overflow-hidden  bg-white ' >
            <img src="/./src/assets/images/article-1.svg" alt="product-img" />
            {/* product descs */}
            <div className='  flex flex-col items-start justify-between w-full  mr-2'>

                <h4 className='text-[12px] font-semibold'>کارتن پلاست چیست؟</h4>

                <p className='text-[6px] text-[#929292] mt-1'>تاریخ انتشار: 1402/01/18</p>




                {/* Aerticle text */}
                <p className='text-[8px] text-[#626262] text-justify mt-2 max-w-[250px]'>همانطور که گفتیم کارتن پلاست از مواد قابل بازیافتی است که در بین طرفداران محیط زیست محبوبیت زیادی دارد. کارتن پلاست ورق پلاستیکی یا کارتنی است که از سه لایه باریک پلی پروپیلن ساخته می شود؛ ....</p>


                {/* buy btn */}
                <div className="card-actions  mt-4 flex items-center justify-between w-full ">
                    <div className='flex items-center'>
                        <img className='mx-1 w-[16px] h-[16px]' src="/./src/assets/icons/dislike.svg" alt="" />
                        <img className='mx-1 w-[16px] h-[16px]' src="/./src/assets/icons/like.svg" alt="" />
                    </div>
                    <Link to="/Article/4">
                        <button className=" flex flex-row-reverse items-center justify-evenly  text-main-green2 text-[10px] font-semibold ">
                            <figure className='mr-2'>
                                <img src="/./src/assets/icons/arrow-left.svg" alt="" />
                            </figure>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
