import React from 'react'

export default function ProductBoxInBackete() {
    return (
        <div className='flex items-center justify-between shadow-[0px_0px_20px_rgba(150,150,150,0.25)] rounded-lg mt-4'>
            <div>
                <img src="/./src/assets/images/p-5.svg" alt="" />
            </div>
            <div className='flex items-center justify-between w-[80%] '>
                <div>
                    <p className='text-xs '>جعبه سبزی</p>
                    <p className='text-xs text-main-green2 mt-2 lg:hidden'>800,000 تومان</p>
                </div>

                <div className='bg-[#DAEFDC] mr-2 flex items-center justify-around py-1 px-4 rounded-lg w-[100px] shadow-[0px_0px_8px_rgba(141,141,141,0.25),inset_0px_0px_12px_rgba(43,43,43,0.25)]'>
                    <button className='w-5 '>
                        <img src="/./src/assets/icons/add-circle.svg" alt="" />
                    </button>
                    <p className='text-2x5'>1</p>
                    <button className='w-5 '>
                        <img src="/./src/assets/icons/minus-cirlce.svg" alt="" />
                    </button>
                </div>
                <p className='text-xs  mt-2 hidden  lg:block'>800,000 تومان</p>



                <img className='mr-2' src="/./src/assets/icons/close-icon.svg" alt="" />

            </div>
        </div>
    )
}
