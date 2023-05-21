import React from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
// import "./NewProducts.css";


export default function Articles({title}) {
    return (
        <div className=' pt-36 '>
            <div className=' flex flex-col items-center '>
                <h2 className='text-[20px]'>{title}</h2>
                <div className='relative mt-8 w-full flex flex-col items-center px-8  lg:px-20' >
                <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1160: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },

                        }}
                        loop={true}
                        // modules={[Navigation]}
                        className="mySwiper relative p-4 py-8   w-full "
                    >
                        <SwiperSlide >
                          <ArticleBox />
                        </SwiperSlide>
                        <SwiperSlide >
                          <ArticleBox />
                        </SwiperSlide>
                        <SwiperSlide >
                          <ArticleBox />
                        </SwiperSlide>
                        <SwiperSlide >
                          <ArticleBox />
                        </SwiperSlide>
                      
                    </Swiper>
                    <Link to="/Articles">
                    <button className='border-[1px] border-main-green2 font-semibold py-2 px-12 rounded-lg mt-8 text-main-green2'>مشاهده همه</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
