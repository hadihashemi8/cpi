import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "/./src/assets/icons/arrow-left.svg"


export default function ArticleBox(props) {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="p-4 ">
                <img src={`/./images/${props?.firstImage}`} alt="عکس" className="rounded-xl w-full" />
            </figure>
            <div className="p-4 pt-6   items-center text-center">
                <div className='flex flex-col items-start '>
                    {/* <p className='text-[10px]'>تاریخ انتشار: 1402/01/18</p> */}
                    <h2 className="card-title text-[14px]">{props.title}</h2>

                </div>
                <div className="card-actions mt-4 flex items-center justify-between w-full ">
                    
                    <Link to={`/Article/${props.id}`}>
                        <button className=" flex flex-row-reverse items-center justify-evenly py-[6px] px-[20px] border-[1px] border-main-green2 rounded-[8px] text-main-green2 text-[12px] font-semibold w-[135px] ">
                            <figure className="">
                                <img src={arrow} alt="" />
                            </figure>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
