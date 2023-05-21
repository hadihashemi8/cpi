import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import ProductInfoInBacket from '../../Components/ProductInfoInBacket/ProductInfoInBacket'
import Properties from '../../Components/Properties/Properties'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'
import UsersCommentsSection from '../../Components/UsersCommentsSection/UsersCommentsSection'

export default function OrderProducts() {
  return (
    <div className='pt-28'>
      <NavBar />
      <ProductInfoInBacket />


      {/* desc section */}
      <div className='pt-32 px-8 md:px-24 w-full'>
        <div className='  flex   items-center justify-between  w-full'>
          <h2 className='text-main-green2 text-base md:text-2xl w-[250px] '>توضیحات تکمیلی</h2>
          <div className=' bg-[#B6B6B6] h-[1px]  w-full'></div>

        </div>

        <div className='mt-8'>
          <p className='text-[14px] text-[#929292] text-justify'>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .</p>
        </div>
      </div>


      {/* users comments */}
      <div className='pt-24 px-8 md:px-24  w-full'>

        <UsersCommentsSection />
      </div>

      <SimilarProducts />
      <Properties />
      <Footer />
    </div>
  )
}
