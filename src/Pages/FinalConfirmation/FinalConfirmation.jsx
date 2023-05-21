import React from 'react'
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import NavBar from '../../Components/NavBar/NavBar'
import FinalConfirmationForm from '../../Components/FinalConfirmationForm/FinalConfirmationForm'

export default function FinalConfirmation() {





    return (
        <div className='pt-24 pb-24'>
            <NavBar />

            <div className='flex flex-col items-center'>

                <NavLink to="/Backet" className="self-end ml-8">
                    <button className='flex items-center flex-row-reverse '>
                        <HiOutlineArrowNarrowLeft className='mr-2' />
                        بازگشت
                    </button>
                </NavLink>


                <FinalConfirmationForm />

            </div>
        </div>
    )
}
