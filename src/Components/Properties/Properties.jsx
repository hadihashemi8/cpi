import React from 'react'

export default function Properties() {
  return (
    <div className=' pt-44 '>
      <div className=' flex flex-col items-center '>
        <h2 className='text-[20px] font-semibold'>برای چی کارتن پلاست ایرانیان!!!</h2>
        <div className='relative mt-12  grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-14 py-4 rounded-[20px] md:bg-white px-40px md:shadow-[0px_0px_14px_rgba(0,0,0,0.25)]   md:px-20' >


          <div className='flex flex-col items-center mx-2'>
            <div>
              <img src="/./src/assets/icons/verify.svg" alt="" />
            </div>
            <h3 className='mt-2'>تضمین کیفیت</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <div>
              <img src="/./src/assets/icons/messages-2.svg" alt="" />
            </div>
            <h3 className='mt-2'>پشتیبانی 24 ساعته</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <div>
              <img src="/./src/assets/icons/dollar-circle.svg" alt="" />
            </div>
            <h3 className='mt-2'>قیمت مناسب</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <div>
              <img src="/./src/assets/icons/truck-time.svg" alt="" />
            </div>
            <h3 className='mt-2'>ارسال به موقع</h3>
          </div>


        </div>
      </div>
    </div>
  )
}
