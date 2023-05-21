import React from 'react'

export default function Modal({closeModal}) {
  return (
    <div className='fixed top-0 left-0 w-full h-full  backdrop-blur-[3px] z-50 flex items-center justify-center px-5 overflow-hidden'>
      <div className=' relative  bg-center bg-no-repeat bg-cover  '>
        <img src="/./src/assets/images/modal-img.svg" alt="" />
        <p className='text-[#484848]  absolute top-[73%] left-[5%] w-[90%] text-center bg-white font-semibold'>کد پیگیری : 00556284</p>
        <img onClick={() => closeModal()} className='absolute top-[120%] left-1/2 -translate-x-1/2 cursor-pointer' src="/./src/assets/icons/close-black.svg" alt="" />
      </div>
    </div>
  )
}
