import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Product from '../Product/Product';
import SliderNavBtn from '../SliderNavBtn/SliderNavBtn';
import './ProductsSlider.css'




export default function ProductsSlider() {
    return (
        <div className='relative mt-12 w-full flex flex-col items-center  lg:px-20' >
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1260: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },

                }}
                loop={true}
                // modules={[Navigation]}
                className="mySwiper relative w-full   p-4 md:p-8  "
            >
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SwiperSlide >
                    <Product />
                </SwiperSlide>
                <SliderNavBtn />
            </Swiper>
        </div>
    )
}
