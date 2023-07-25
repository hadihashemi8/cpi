import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';

import slider1 from "/./src/assets/images/slider-1.png"
import slider2 from "/./src/assets/images/slider-2.png"
import line from "/./src/assets/polygons/Line 1.svg"
import instagram from "/./src/assets/icons/instagram.svg"
import phone from "/./src/assets/icons/phon-number.svg"
import whatsapp from "/./src/assets/icons/whatsapp.svg"
import { Link } from 'react-router-dom';




export default function HomeMainSlider() {
    return (
        <div className='relative flex flex-col  items-center    w-full '>
            <Swiper dir='rtl' loop={true} autoplay={{ delay: 3000 }} modules={[Autoplay]} className="mySwiper w-full ">
                <SwiperSlide className='md:px-10 lg:px-24'>
                    <div className='flex flex-col items-center '>
                        <h1 className='text-2xl text-[#353535] font-semibold md:hidden'>کارتن پلاست ایرانیان</h1>
                        <div className='flex flex-col items-center justify-between md:flex-row md:justify-between  w-full '>
                            <div className='w-1/2 md:w-1/3 md:mx-5 mt-5 md:mt-0 flex flex-col items-center'>
                                <img className='w-full' src={slider1} alt="" />
                                <p className='text-[#353535] text-lg mt-4 text-center '>سطل بازیافت کارتن پلاست</p>
                            </div>

                            <div className='px-6 mt-10 flex flex-col items-center md:items-start md:mx-5'>
                                <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold '>کارتن پلاست ایرانیان</h1>
                                <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی کارتن پلاست ایرانیان می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .</p>
                            </div>

                            <div className='  flex-col items-center justify-between hidden  lg:flex   '>

                                <div>
                                    <img src={line} alt="" />
                                </div>
                                <div className='flex flex-col items-center my-4'>
                                    <Link to="https://instagram.com/cartonplastiranian?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                                    <img className='my-1' src={instagram} alt="" />
                                    </Link>
                                    <img className='my-1' src={phone} alt="" />
                                    <img className='my-1' src={whatsapp} alt="" />
                                </div>
                                <div>
                                    <img src={line} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='md:px-10 lg:px-24'>
                    <div className='flex flex-col items-center '>
                        <h1 className='text-2xl text-[#353535] font-semibold md:hidden'>کارتن پلاست ایرانیان</h1>
                        <div className='flex flex-col items-center justify-between md:flex-row md:justify-between  w-full '>
                            <div className='w-1/2 md:w-1/3 md:mx-5 mt-5 md:mt-0 flex flex-col items-center'>
                                <img className='w-full' src={slider2} alt="" />
                                <p className='text-[#353535] text-lg mt-4 text-center '>سطل بازیافت کارتن پلاست</p>
                            </div>

                            <div className='px-6 mt-10 flex flex-col items-center md:items-start md:mx-5'>
                                <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold '>کارتن پلاست ایرانیان</h1>
                                <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی کارتن پلاست ایرانیان می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .</p>
                            </div>

                            <div className='  flex-col items-center justify-between hidden  lg:flex   '>

                                <div>
                                    <img src={line} alt="" />
                                </div>
                                <div className='flex flex-col items-center my-4'>
                                <Link to="https://instagram.com/cartonplastiranian?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                                    <img className='my-1' src={instagram} alt="" />
                                    </Link>
                                    <img className='my-1' src={phone} alt="" />
                                    <img className='my-1' src={whatsapp} alt="" />
                                </div>
                                <div>
                                    <img src={line} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
             


            </Swiper>
        </div>
    )
}
