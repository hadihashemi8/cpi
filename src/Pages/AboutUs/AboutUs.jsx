import React, { useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import Footer from '../../Components/Footer/Footer'
import Properties from '../../Components/Properties/Properties'
import ContactUsWay from '../../Components/ContactUsWay/ContactUsWay'
import NavBar from '../../Components/NavBar/NavBar'
import logo from "/./src/assets/logo/logo.svg"
import rectangle1 from "/./src/assets/images/Rectangle 14.svg"
import rectangle2 from "/./src/assets/polygons/Rectangle 15.svg"




export default function AboutUs() {



  return (
    <div className='pt-[62px]'>
      <NavBar style2={true} />


      {/* aboutus header */}
      <div className='w-full  flex items-center justify-center pb-20 md:pb-40 pt-12 md:pt-28 bg-[url("/./src/assets/images/AboutUs-Bg.png")] bg-cover bg-no-repeat bg-center'>
        <div className='flex flex-col items-center '>
          <img className='md:w-32' src={logo} alt="" />
          <h1 className='text-white text-2xl md:text-4xl font-semibold mt-4'>کارتن پلاست ایرانیان</h1>
          <h1 className='text-[#244938] text-2xl md:text-4xl font-semibold mt-2 md:mt-4'>Cartonplast Iranians</h1>
          
        </div>
      </div>



      {/* aboutus text */}

      <div className='pt-16 md:pt-28 px-10 lg:px-20 '>
        <div className='flex flex-col items-center md:flex-row md:items-start'>
          <h3 className='text-[#42A476] text-2xl font-semibold md:hidden'>درباره ما</h3>
          <div className='  flex justify-around  md:w-1/2 ' >
            <div className='relative lg:w-96 flex '>
              <img className='z-10 w-full' src={rectangle1} alt="" />
              <img className='absolute top-11 lg:top-14  -left-4 w-[90%]' src={rectangle2} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start md:w-1/2 lg:mt-4'>
            <h3 className='text-[#42A476] text-2xl font-semibold hidden md:block'>درباره ما</h3>
            <p className='text-sm text-[#929292] mt-14 md:mt-6 text-justify'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .
            </p>
            <button className='text-white bg-main-green2  text-base py-2 px-10 rounded-lg mt-8'>تماس با ما</button>
          </div>
        </div>
      </div>




      <Categories title="خدمات ما" />



      <ContactUsWay />


      <Properties />
      <Footer />
    </div>
  )
}
