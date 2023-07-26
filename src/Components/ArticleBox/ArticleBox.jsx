import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "/./src/assets/icons/arrow-left.svg"


export default function ArticleBox(props) {
    return (
        <div className="card h-[350px] bg-base-100 shadow-xl  flex flex-col items-center justify-between">
            <div className="p-4 w-full flex items-center justify-center ">
                <img src={`/./images/${props?.firstImage}`} alt="عکس" className="rounded-xl w-full" />
                
            </div>
            <div className="p-4 pt-6 w-full flex   justify-between  items-center text-center">
                <div className='flex flex-col items-start '>
                    {/* <p className='text-[10px]'>تاریخ انتشار: 1402/01/18</p> */}
                    <h2 className="card-title text-[14px]">{props.title}</h2>

                </div>
                <div className="card-actions mr-1  flex items-center justify-between  ">
                    
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
