import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import FinalConfirmationForm from '../../Components/FinalConfirmationForm/FinalConfirmationForm'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import ProductBoxInBackete from '../../Components/ProductBoxInBackete/ProductBoxInBackete'
import Properties from '../../Components/Properties/Properties'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'


export default function Backet() {

  const [showFinalConfirmationForm, setshowFinalConfirmationForm] = useState(false)


  return (
    <div className='pt-24'>
      <NavBar />

      {/* Backet details */}
      <div className=' flex flex-col md:flex-row md:justify-evenly px-6 lg:px-20' >

        {/* products list  */}
        <div className='flex flex-col  md:w-1/2 md:mx-2 '>
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
          <ProductBoxInBackete />
        </div>

        {/* invoice */}
        <div className='md:w-1/2 lg:pr-20  mt-20 md:mt-0 md:pt-4'>
          <div className=' max-w-fit md:max-w-full mx-auto md:shadow-[0px_0px_20px_rgba(152,152,152,0.25)] md:p-4 lg:px-10 md:rounded-[20px]  md:mx-2'>



            {showFinalConfirmationForm ? (
              <FinalConfirmationForm />
            ) : (
              <>
              <div>
              <div className='shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4' >
                <div className='flex items-center justify-between'>
                  <img src="/./src/assets/icons/task-square.svg" alt="" />
                  <p className='text-base text-[#616161] mr-2'>تعداد کالا</p>
                </div>
                <p>3عدد</p>
              </div>

              <div className='shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4' >
                <div className='flex items-center justify-between'>
                  <img src="/./src/assets/icons/dollar-square.svg" alt="" />
                  <p className='text-base text-[#616161] mr-2'>قیمت کالاها</p>
                </div>
                <p>2,400,000 تومان</p>
              </div>

              <div className='shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4' >
                <div className='flex items-center justify-between'>
                  <img src="/./src/assets/icons/truck-time2.svg" alt="" />
                  <p className='text-base text-[#616161] mr-2'>هزینه ارسال</p>
                </div>
                <p>30,000 هزاتومان</p>
              </div>
              <p className='text-[10px] text-[#616161] mt-2'>سفارش های تعداد بالا هزینه ارسال بر اساس آدرس محاسبه میشود</p>

            </div>


            <div className='mt-10 flex flex-col items-center  px-6'>
              <div className='flex bg-red-500  rounded-[9px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.25),inset_0px_0px_8px_rgba(0,0,0,0.25)]'>
                <input className=' p-2 px-3 border-none outline-none w-full placeholder:text-xs placeholder:text-[#A6A6A6]' placeholder='کد تخفیف' />
                <button className='py-2 px-5 bg-main-green2 text-white text-sm'>تایید</button>
              </div>


              <div className='flex items-center justify-between mt-12'>
                <h2 className='text-[20px] text-[#616161]'>هزینه کل</h2>
                <p className='text-[20px] mr-4 font-semibold'>2,430,000 تومان</p>
              </div>

              <Link to="/FinalConfirmation">
                <button className='bg-main-green2 md:hidden w-full text-base text-white py-4 px-16 mt-12 shadow-[0px_2px_8px_rgba(0,0,0,0.25),inset_0px_0px_8px_rgba(0,0,0,0.25)] rounded-lg'>ادامه و پرداخت</button>
              </Link>

              <button onClick={() => setshowFinalConfirmationForm(true)} className='bg-main-green2 w-full hidden md:block text-base text-white py-4 px-16 mt-12 shadow-[0px_2px_8px_rgba(0,0,0,0.25),inset_0px_0px_8px_rgba(0,0,0,0.25)] rounded-lg'>ادامه و پرداخت</button>

            </div>
            </>
            )}
          </div>
        </div>

      </div>

      <SimilarProducts />
      <Properties />
      <Footer />
    </div>
  )
}
