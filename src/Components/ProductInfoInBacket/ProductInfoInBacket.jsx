import React from 'react'
import './ProductInfoInBacket.css'




export default function ProductInfoInBacket() {
    return (
        <div className='bg-[#f5f5f5] flex flex-col md:flex-row mt-8'>


            <div className='flex items-center justify-center w-full md:w-1/2  px-4 ' >
                <div className='relative  flex '>
                    <img className='absolute -top-[5%] -right-[7%]' src="/./src/assets/polygons/Group 24.svg" alt="" />
                    <img className='z-40 lg:w-[493px]' src="/./src/assets/images/p-4.svg" alt="" />
                    <img className='absolute lg:w-[453px] top-14 lg:top-20 -left-[6%] ' src="/./src/assets/polygons/Rectangle 15.svg" alt="" />
                    <div className='absolute top-full right-0 flex flex-row-reverse mt-1 '>
                        <img className='mr-2' src="/./src/assets/icons/like-gray.svg" alt="" />
                        <img src="/./src/assets/icons/dislike-gray.svg" alt="" />
                    </div>


                    <div className='absolute top-[60%] lg:top-[75%] -right-[50px] lg:-right-[65px] mr-2 flex flex-col items-center justify-between p-4'>
                        <label className='radio relative   w-6 h-6 my-1 border-none' >
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 my-1 border-none'>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 my-1 border-none'>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>

                    </div>
                </div>
            </div>



            <div className=' flex flex-col items-start px-6 mt-20 md:mt-0 w-full md:w-1/2 '>
                {/* product title */}
                <div>
                    <h1 className='text-2xl font-semibold'>جعبه مخصوص میوه</h1>
                    <p className='text-sm text-[#929292] mt-2 lg:mt-8'>جعبه مخصوص میوه های مختلف که در ابعاد و وزن و جنس های متفاوت تولید میشنود</p>
                    <div className='mt-2'>
                        <p className='text-xs text-[#929292] mt-4'>تاریخ انتشار: 1402/01/18</p>
                        <div className='flex mt-2'>
                            <img className='mx-[2px]' src="/./src/assets/icons/star-Icon.svg" alt="" />
                            <img className='mx-[2px]' src="/./src/assets/icons/star-Icon.svg" alt="" />
                            <img className='mx-[2px]' src="/./src/assets/icons/star-Icon.svg" alt="" />
                            <img className='mx-[2px]' src="/./src/assets/icons/star-Icon.svg" alt="" />
                        </div>
                    </div>
                </div>


                {/* product infos */}
                <div className='flex md:flex-col self-center md:self-start  items-start justify-around mt-8  '>

                    <div className=' mx-2 md:mx-0 md:mt-2 lg:mt-4  flex flex-col md:flex-row md:items-center justify-evenly items-center'>
                        <div className='w-[20px]  h-[20px] '>
                            <img className='w-full' src="/./src/assets/icons/color-swatch.svg" alt="" />
                        </div>
                        <p className='text-[16px] mx-1 text-center  mt-1 hidden md:block'>جنس :</p>
                        <p className='text-[16px]  text-center  mt-1'>مقوا  </p>
                    </div>

                    <div className=' mx-2  md:mx-0 md:mt-2 lg:mt-4 flex flex-col md:flex-row md:items-center justify-evenly items-center '>
                        <div className='w-[20px]  h-[20px] '>
                            <img className='w-full' src="/./src/assets/icons/ruler&pen.svg" alt="" />
                        </div>
                        <p className='text-[16px] mx-1 text-center  mt-1 hidden md:block'>ابعاد :</p>
                        <p className='text-[16px]  text-center mt-1 '> 20*20*15<br className='md:hidden' /> سانتی متر</p>
                    </div>

                    <div className=' mx-2  md:mx-0 md:mt-2 lg:mt-4 flex flex-col md:flex-row md:items-center justify-evenly items-center'>
                        <div className='w-[20px]  h-[20px] '>
                            <img className='w-full' src="/./src/assets/icons/coin-hand.svg" alt="" />
                        </div>
                        <p className='text-[16px] mx-1 text-center  mt-1 hidden md:block'>وزن :</p>
                        <p className='text-[16px]  text-center mt-1'>150 گرم</p>

                    </div>

                </div>

                {/* product color box */}
                <div className='flex items-center mt-6 lg:mt-2'>
                    <h3 className='text-2xl text-[#7C7C7C]'>رنگ </h3>
                    <div className='mr-2 flex items-center justify-between p-4'>
                        <label className='radio relative   w-6 h-6 mx-1 ' >
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#AD9A89] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 mx-1 '>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#1F1F1F] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 mx-1 '>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#42A476] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>

                    </div>

                </div>


                <h2 className='text-2xl text-main-green2 font-semibold mt-4 lg:mt-14'>500,000 تومان</h2>



                {/* buy btn */}
                <div className='flex  items-center justify-between mt-4  lg:mt-6'>
                    <button className='text-[14px] text-white  flex items-center bg-main-green2 py-[6px] px-[20px] rounded-[8px] shadow-[0px_0px_8px_rgba(100,100,100,0.25),_inset_0px_0px_20px_rgba(43,43,43,0.25)]'>افزودن به سبد خرید
                        <div className='w-[21px] mr-2'>
                            <img className='w-full' src="/./src/assets/icons/shopping-cart-white.svg" alt="" />
                        </div>
                    </button>

                    <div className='bg-[#DAEFDC] mr-2 flex items-center justify-around py-1 px-4 rounded-lg w-[100px] shadow-[0px_0px_8px_rgba(141,141,141,0.25),inset_0px_0px_12px_rgba(43,43,43,0.25)]'>
                        <button className='w-5 '>
                            <img src="/./src/assets/icons/add-circle.svg" alt="" />
                        </button>
                        <p className='text-2x5'>1</p>
                        <button className='w-5 '>
                            <img src="/./src/assets/icons/minus-cirlce.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}
