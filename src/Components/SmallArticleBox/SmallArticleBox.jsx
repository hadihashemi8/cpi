import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "/./src/assets/icons/arrow-left.svg"


export default function SmallArticleBox(props) {
    return (
        <div className='max-w-fit col-span-1 mt-2  shadow-[0px_0px_20px_rgba(97,97,97,0.25);] flex justify-between items-center  p-[8px]  rounded-lg overflow-hidden  bg-white ' >
            <img src={`/./images/${props?.firstImage}`} alt="product-img" />
            {/* product descs */}
            <div className='  flex flex-col items-center justify-center w-full  mr-2 '>

                <h4 className='text-[12px] font-semibold'>{props.title}</h4>


                {/* buy btn */}
                <div className="card-actions  mt-4 flex items-center justify-between  ">
                
                    <Link to={`/Article/${props.id}`}>
                        <button className=" flex flex-row-reverse items-center justify-evenly  text-main-green2 text-[10px] font-semibold ">
                            <figure className='mr-2'>
                                <img src={arrow} alt="" />
                            </figure>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
