import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <Link to='/Products/OrderProducts/2'>
        <div className=' shadow-[0px_0px_20px_rgba(97,97,97,0.25);]  p-[12px] rounded-[20px] overflow-hidden  bg-white ' >
            <img className='w-full' src="/./src/assets/images/p-1.svg" alt="product-img" />
            {/* product descs */}
            <div className='mt-2  flex flex-col items-center'>
                <div className='w-full px-2 flex items-start justify-between'>
                    <div className='flex flex-col items-start justify-between '>
                        <h4>جعبه میوه</h4>
                        <h4 className='mt-2 text-main-green2 font-semibold'>2,000,000 تومان</h4>
                    </div>
                    <div >
                        <p className='text-[8px] mt-1'>لحظاتی پیش</p>
                        <p className='text-[8px] mt-1'> 1402/01/08</p>
                    </div>
                </div>


                {/* product infos */}
                <div className='flex  items-center justify-around mt-2  '>
                    <div className=' mx-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[46px] h-[46px] flex flex-col justify-evenly items-center'>
                        <div className='w-[14px] h-[14px]'>
                            <img src="/./src/assets/icons/color-swatch.svg" alt="" />
                        </div>
                        <p className='text-[10px] w-full mt-1'>مقوا</p>
                    </div>
                    <div className=' mx-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[46px] h-[46px] flex flex-col justify-evenly items-center'>
                        <div className='w-[14px] h-[14px]'>
                            <img src="/./src/assets/icons/coin-hand.svg" alt="" />
                        </div>
                        <p className='text-[10px] w-full mt-1'>150 گرم</p>

                    </div>
                    <div className=' mx-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[46px] h-[46px] flex flex-col justify-evenly items-center'>
                        <div className='w-[14px] h-[14px]'>
                            <img src="/./src/assets/icons/ruler&pen.svg" alt="" />
                        </div>
                        <p className='text-[10px] w-full mt-1 '>20*20*15</p>

                    </div>
                </div>


                {/* buy btn */}
                <div>
                    
                    <button onClick={() => console.log('ok')} className='text-[14px] text-white mt-[21px] flex items-center bg-main-green2 py-[6px] px-[40px] rounded-[8px] shadow-[0px_0px_8px_rgba(100,100,100,0.25),_inset_0px_0px_20px_rgba(43,43,43,0.25)]'>افزودن به سبد خرید
                        <div className='w-[21px] mr-2'>
                            <img className='w-full' src="/./src/assets/icons/shopping-cart-white.svg" alt="" />
                        </div>
                    </button>
                 
                </div>
            </div>
        </div>
        </Link>
    )
}
