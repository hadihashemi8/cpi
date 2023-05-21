import React from 'react'




export default function HomeMainSlider() {
    return (
        <div className='relative flex flex-col  items-center    '>

            <h1 className='text-2xl text-[#353535] font-semibold md:hidden'>کارتن پلاست ایرانیان</h1>
            <div className='flex flex-col items-center md:flex-row'>
                <div className='flex flex-row-reverse   items-center mt-16   relative bg-blue-500   px-2'>

                    <div className='flex items-center justify-between absolute top-[65%] right-[3%]  z-40 '>
                        <img src="./src/assets/icons/arrow-circle.svg" alt="" />
                        <img className='rotate-180 mr-2 ' src="./src/assets/icons/arrow-circle.svg" alt="" />
                    </div>


                    <div className=' small:self-center  flex  flex-col items-center '>
                        <div className='relative bg-blue-600   '>
                            <img className='lg:w-[450px]' src="./src/assets/polygons/slder-Ellipse.svg" alt="" />
                            <img className='absolute left-1/2 -translate-x-1/2 -top-[12%] lg:w-[290px] w-full h-full' src="./src/assets/images/p-6.svg" alt="" />
                        </div>
                        <p className='text-[#353535] mt-4 '>سطل بازیافت کارتن پلاست</p>
                    </div>

                    <div className=' small:self-center  flex  flex-col items-center w-24 h-24'>
                        <div className='relative bg-blue-600   '>
                            <img className='lg:w-[450px]' src="./src/assets/polygons/slder-Ellipse.svg" alt="" />
                            <img className='absolute left-1/2 -translate-x-1/2 -top-[12%] lg:w-[290px] w-full h-full' src="./src/assets/images/p-6.svg" alt="" />
                        </div>
                        <p className='text-[#353535] mt-4 '>سطل بازیافت کارتن پلاست</p>
                    </div>


                </div>

                <div className='flex items-center'>

                    <div className='px-6 mt-10 flex flex-col items-center md:items-start'>
                        <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold '>کارتن پلاست ایرانیان</h1>

                        <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی کارتن پلاست ایرانیان می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .</p>
                        <button className='py-2 px-10 bg-main-green2 rounded-lg text-white mt-6 md:mt-10'>
                            مشاهده محصولات
                        </button>
                    </div>

                    <div className='  flex-col items-center hidden  lg:flex mr-12'>
                        <img src="./src/assets/polygons/Line 1.svg" alt="" />
                        <div className='flex flex-col items-center my-4'>
                            <img className='my-1' src="/./src/assets/icons/instagram.svg" alt="" />
                            <img className='my-1' src="/./src/assets/icons/phon-number.svg" alt="" />
                            <img className='my-1' src="/./src/assets/icons/whatsapp.svg" alt="" />
                        </div>
                        <img src="./src/assets/polygons/Line 1.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
