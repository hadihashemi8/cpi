import React from 'react'
import './QuestionBox.css'

export default function QuestionBox(props) {
    return (
        <div tabIndex={0} className="collapse w-full   collapse-arrow  group  mt-4  rounded-lg shadow-[0px_0px_8px_rgba(66,164,118,0.4),_inset_0px_0px_20px_rgba(190,190,190,0.25)]">
            {/* <input  className="peer"  type="checkbox" /> */}
            {/* <img src="/./src/assets/icons/Vector.svg" alt="" /> */}

            <div className="collapse-title  pr-3 text-base font-medium group-focus:bg-main-green1 ">
                {props.question}
            </div>
            <div className="collapse-content px-4 lg:px-16 group-focus:bg-main-green1 ">
                <p className='text-sm'>{props.answer}</p>
            </div>
        </div>
    )
}
