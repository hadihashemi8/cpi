import React from 'react'
import CategoryBox from '../CategoryBox/CategoryBox'
import p1 from "/./src/assets/icons/trush-square.svg"
import p2 from "/./src/assets/icons/building.svg"
import p3 from "/./src/assets/icons/car.svg"
import p4 from "/./src/assets/icons/box-green.svg"
import p5 from "/./src/assets/icons/buildings.svg"
import line from "/./src/assets/icons/Line 6.svg"


const categoriesItem = [
    {id:1 , src:p1 , title:"بازیافت"},
    {id:2 , src:p2 , title:"تبلیغات"},
    {id:3 , src:p3 , title:"خودرو"},
    {id:4 , src:p4 , title:"بسته بندی"},
    {id:5 , src:p5 , title:"ساختمان"},
]

export default function Categories({title}) {
    return (
        <div className='pt-20 md:pt-36 flex items-center justify-center '>
            <div className='flex flex-col items-center  '>

                <div className='flex justify-around w-full '>
                    <img className='hidden lg:block ' src={line} alt="" />
                    <h2 className='text-[20px] mx-2 font-semibold'>{title}</h2>
                    <img className='hidden lg:block ' src={line} alt="" />
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
