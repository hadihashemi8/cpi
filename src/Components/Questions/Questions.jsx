import React from 'react'
import QuestionBox from '../QuestionBox/QuestionBox'




export default function Questions() {
    return (
        <div className=' pt-36 '>
            <div className=' flex flex-col items-center  lg:px-40 px-8'>
                <h2 className='text-[20px]'>سوالات متداول</h2>
                <div className=' mt-12 w-full flex flex-col items-center  ' >
                    <div className=' w-full flex flex-col  items-center'>
                        <QuestionBox />
                        <QuestionBox />
                        <QuestionBox />
                        <QuestionBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
