import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleBox() {
    return (
        <div className="card w-[414px] bg-base-100 shadow-xl">
            <figure className="p-4 ">
                <img src="/./src/assets/images/p-2.svg" alt="عکس" className="rounded-xl w-full" />
            </figure>
            <div className="p-4 pt-6   items-center text-center">
                <div className='flex flex-col items-start '>
                    <p className='text-[10px]'>تاریخ انتشار: 1402/01/18</p>
                    <h2 className="card-title text-[14px]">کارتن پلاست چیست؟</h2>
                    <p className='text-[10px] text-justify'>همانطور که گفتیم کارتن پلاست از مواد قابل بازیافتی است که در بین طرفداران محیط زیست محبوبیت زیادی دارد. کارتن پلاست ورق پلاستیکی یا کارتنی است که از سه لایه باریک پلی پروپیلن ساخته می شود؛ به دلیل قرار گرفتن یک لایه چین دار و دندانی شکل پلاستیکی بین دو ورق صاف، به ورق پلاستیکی دو جداره نیز معروف است. ....</p>
                </div>
                <div className="card-actions mt-4 flex items-center justify-between w-full ">
                    <div className='flex items-center'>
                        <img className='mx-1' src="/./src/assets/icons/dislike.svg" alt="" />
                        <img className='mx-1' src="/./src/assets/icons/like.svg" alt="" />
                    </div>
                    <Link to="/Article/2">
                        <button className=" flex flex-row-reverse items-center justify-evenly py-[6px] px-[20px] border-[1px] border-main-green2 rounded-[8px] text-main-green2 text-[12px] font-semibold w-[135px] ">
                            <figure className="">
                                <img src="/./src/assets/icons/arrow-left.svg" alt="" />
                            </figure>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
