import React from 'react'

export default function Footer() {
    return (
        <div className='pt-24 '>
            <div className='bg-[#DAEFDC33] pt-16 lg:pt-10 pb-16 flex flex-col items-center  shadow-[inset_0px_0px_40px_rgba(140,140,140,0.25)] rounded-t-[80px]'>
                <div className=' flex flex-col md:grid md:grid-cols-6  items-center md:items-start px-6 content-start '>
                    <img className='md:hidden' src="/./src/assets/logo/logo.svg" alt="" />

                    <div className='flex flex-col items-center  mt-8 md:mt-0 md:col-span-2 '>
                        <h2 className='text-2xl font-semibold text-main-green2'>کارتن پلاست ایرانیان</h2>
                        <p className='text-center text-[12px] lg:w-3/4 lg: lg:text-justify md:text-base mt-4'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . </p>
                    </div>

                    <div className='flex flex-col items-center mt-20 md:mt-0 md:col-span-2 lg:col-span-1 '>
                        <h2 className='text-[16px] md:text-[20px] font-semibold md:text-main-green2'>دسته بندی محصولات</h2>
                        <div className='flex justify-around flex-wrap items-center md:flex-col md:items-center  mt-4'>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                <img className='md:hidden' src="/./src/assets/icons/trush-square.svg" alt="" />
                                بازیافت
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                <img className='md:hidden' src="/./src/assets/icons/buildings.svg" alt="" />
                                ساختمان
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                <img className='md:hidden' src="/./src/assets/icons/building.svg" alt="" />
                                تبلیغات
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                <img className='md:hidden' src="/./src/assets/icons/car.svg" alt="" />
                                خودرو
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                <img className='md:hidden' src="/./src/assets/icons/box-green.svg" alt="" />
                                بسته بندی
                            </p>

                        </div>
                    </div>

                    <div className='mt-28 md:mt-0 flex flex-col items-center  md:col-span-2 lg:col-span-1   '>
                        <h2 className='text-[20px] font-semibold text-main-green2'>مجوزها و نمادها</h2>
                        <div className='flex mt-4'>
                            <img className='mx-2' src="/./src/assets/images/namad-1.svg" alt="" />
                            <img className='mx-2' src="/./src/assets/images/aghayepardakht-1 1.svg" alt="" />
                        </div>
                    </div>


                    <div className=' mt-8 lg:mt-0 flex-col items-center hidden md:flex md:col-span-3 lg:col-span-2  '>
                        <img  src="/./src/assets/logo/logo.svg" alt="" />
                        <ul className='flex mt-4'>
                            <li className='mx-2'>تماس با ما</li>
                            <li className='mx-2'>محصولات</li>
                            <li className='mx-2'>درباره ما</li>
                            <li className='mx-2'>وبلاگ</li>
                        </ul>

                        <div className='mt-6 w-[280px]  flex   rounded-3xl overflow-hidden'>
                            <button className="bg-main-green2 p-2">
                                <img className='mx-1  ' src="/./src/assets/icons/search-normal-white.svg" alt="" />
                            </button>
                            <input className='border-none outline-none p-2 w-full' type="text" placeholder='سرچ' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-[#D9EEDB] flex flex-col items-center md:flex-row md:justify-between p-4 md:px-16'>
                <p className='text-[10px]'>تمامی حقوق این سایت متعلق به کارخانه کارتن پلاست ایرانیان است.</p>

                <div className='flex mt-4'>
                    <img className='mx-1' src="/./src/assets/icons/instagram.svg" alt="" />
                    <img className='mx-1' src="/./src/assets/icons/phon-number.svg" alt="" />
                    <img className='mx-1' src="/./src/assets/icons/whatsapp.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
