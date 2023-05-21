import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Properties from '../../Components/Properties/Properties'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SmallProductBox from '../../Components/SmallProductBox/SmallProductBox';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../../Components/Product/Product';
import NavBar from '../../Components/NavBar/NavBar';




export default function Products() {

  const [showLgProducts, setShowLgProducts] = useState(false)

  useEffect(() => {

    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        setShowLgProducts(true)
      } else {
        setShowLgProducts(false)

      }
    }
    checkWindowSize()

    window.addEventListener('resize', () => {
      checkWindowSize()
    })
  }, [])


  return (
    <div className='pt-28  '>

      <NavBar />


      {/* categories list*/}
      <div className='flex items-center justify-between px-5 md:px-20  mt-4 0px 0px 4px rgba(0, 0, 0, 0.25)'>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 6,
              spaceBetween: 0,
            },

          }}
          loop={true}
          // modules={[Navigation]}
          className="mySwiper relative     w-full "
        >
          <SwiperSlide >
            <div className='flex items-center justify-around  md:flex-col-reverse md:items-center   bg-main-green1 px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:mx-0 '>
              <p className='text-base md:mt-2  text-[#7C7C7C]   w-24 '>همه محصولات</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/element-3.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex items-center justify-around  bg-white  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:flex-col-reverse md:items-center  md:mx-0 '>
              <p className='text-base md:mt-2 text-[#7C7C7C] w-[70px]'>بسته بندی</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/box-green.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex items-center justify-around  bg-white  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:flex-col-reverse md:items-center  md:mx-0 '>
              <p className='text-base md:mt-2 text-[#7C7C7C]'>ساختمان</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/buildings.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex items-center justify-around  bg-white  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:flex-col-reverse md:items-center  md:mx-0 '>
              <p className='text-base md:mt-2 text-[#7C7C7C]'>تبلیغات</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/building.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex items-center justify-around  bg-white  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:flex-col-reverse md:items-center  md:mx-0 '>
              <p className='text-base md:mt-2 text-[#7C7C7C]'>خودرو</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/car.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex items-center justify-around  bg-white  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:flex-col-reverse md:items-center  md:mx-0 '>
              <p className='text-base md:mt-2 text-[#7C7C7C]'>بازیافت</p>
              <div className='w-[16px] h-[16px] mr-2'>
                <img src="/./src/assets/icons/trush-square.svg" alt="آیکون" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* products list */}
      <div className='mt-6 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:px-10   gap-4 lg:gap-6   justify-items-center'>
        {
          showLgProducts ? (
            <>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </>
          ) : (
            <>
              <SmallProductBox />
              <SmallProductBox />
              <SmallProductBox />
            </>

          )
        }
      </div>





      <Properties />
      <Footer />
    </div>
  )
}
