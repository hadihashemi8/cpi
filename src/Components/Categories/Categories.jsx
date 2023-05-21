import React from 'react'
import CategoryBox from '../CategoryBox/CategoryBox'


const categoriesItem = [
    {id:1 , src:"./src/assets/icons/trush-square.svg" , title:"بازیافت"},
    {id:2 , src:"./src/assets/icons/building.svg" , title:"تبلیغات"},
    {id:3 , src:"./src/assets/icons/car.svg" , title:"خودرو"},
    {id:4 , src:"./src/assets/icons/box-green.svg" , title:"بسته بندی"},
    {id:5 , src:"./src/assets/icons/buildings.svg" , title:"ساختمان"},
]

export default function Categories({title}) {
    return (
        <div className='pt-20 md:pt-36 flex items-center justify-center '>
            <div className='flex flex-col items-center  '>

                <div className='flex justify-around w-full '>
                    <img className='hidden lg:block ' src="/./src/assets/icons/Line 6.svg" alt="" />
                    <h2 className='text-[20px] mx-2 font-semibold'>{title}</h2>
                    <img className='hidden lg:block ' src="/./src/assets/icons/Line 6.svg" alt="" />
                </div>

                {/* categories box container */}
                <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-12  w-full  justify-items-center'>
                    {categoriesItem.map(item => (
                        <CategoryBox key={item.id} {...item} />
                    ))}

                </div>
            </div>

        </div>
    )
}
