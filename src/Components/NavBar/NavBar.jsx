import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrClose } from "react-icons/gr"
import { BsTelephone } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { CgFileDocument } from "react-icons/cg"
import authContext from '../../context/authContext'
import { useContext } from 'react'
import Swal from "sweetalert2"

import logo1 from "/./src/assets/logo/logo.svg"
import menu from "/./src/assets/icons/menu.svg"
import logo2 from "/./src/assets/logo/logo.svg"
import user from "/./src/assets/icons/profile-circle-black.svg"
import search from "/./src/assets/icons/search-normal-white.svg"
import line from "/./src/assets/icons/Line 55.svg"
import search2 from "/./src/assets/icons/search-normal-black.svg"
import logo3 from "/./src/assets/logo/logo.svg"
import phone from "/./src/assets/icons/vector-white.svg"
import user2 from "/./src/assets/icons/profile-2user-white.svg"
import doc from "/./src/assets/icons/document-text-white.svg"


export default function NavBar(props) {

    const [slideBar, setSlideBar] = useState(false)
    const context = useContext(authContext)
    const navigate = useNavigate()


    const logOutHandler = () => {
        Swal.fire({
            icon: "question",
            title: "آیا مطمئن هستید؟",
            confirmButtonText: "بله",
            confirmButtonColor: "#42A476",
            showCancelButton: true,
            cancelButtonText: "لغو",
            cancelButtonColor: "red"

        }).then(res => {
            if (res.isConfirmed) {
                context.logOut()
                navigate('/')
            }
        })
    }



    const closeSlide = () => setSlideBar(false)

    return (
        <>


            <div className={`navbar fixed top-0 left-0 z-50 px-6 lg:px-20  flex items-center justify-between w-full h-[64px] lg:h-[89px] ${props.style2 ? "  bg-white  " : "bg-main-green1 rounded-b-[32px] lg:rounded-b-[44.5px]"}`}>
                {/* navbar start */}


                <div className=" flex ">

                    {/* logo for mobile size */}
                    <div className='hidden lg:block '>
                        <NavLink to="/">
                            <img src={logo1} alt="" />
                        </NavLink>
                    </div>

                    {/* bar icon for mobile size   */}
                    <div onClick={() => setSlideBar(true)}>
                        <label tabIndex={0} className="cursor-pointer   lg:hidden ">
                            <img src={menu} alt="" />
                        </label>
                    </div>

                    {/* navbar links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            <NavLink to="/ContactUs" className='mr-6 xl:mr-12 cursor-pointer flex items-center font-semibold'>

                                <BsTelephone className='text-2xl ml-2' />
                                تماس با ما</NavLink>
                            <NavLink to="/AboutUs" className='mr-6 xl:mr-12 cursor-pointer flex items-center font-semibold'>
                                <FiUsers className='text-2xl ml-2' />
                                درباره ما</NavLink>
                            <NavLink to="/Articles" className='mr-6 xl:mr-12 cursor-pointer flex font-semibold'>
                                <CgFileDocument className='text-2xl ml-2' />
                                وبلاگ</NavLink>
                        </ul >
                    </div >

                </div >


                {/*logo for desktop size */}
                < div div className=' lg:hidden' >
                    <Link to="/">
                        <img src={logo2} alt="" />
                    </Link>
                </ div>
                {/* navbar end */}
                < div div className=" flex items-center justify-between" >
                    <div className='lg:ml-4 flex lg:flex-row-reverse  lg:items-center '>
                        {context.isLogin ? (
                            
                            <div className="dropdown  ">
                                <label tabIndex={0} className=" px-10 text-center bg-main-green2 text-white rounded-lg p-2 cursor-pointer">{context.userInfos.name}</label>
                                <ul tabIndex={0} className="dropdown-content  mt-3 z-[1] menu shadow bg-base-100 rounded-lg overflow-hidden w-full left-0">
                                    <Link className='bg-main-green2 text-white' to="/Dashboard">
                                        <li ><a>پنل</a></li>
                                    </Link>
                                    <li onClick={() => {
                                        logOutHandler()
                                    }} className='bg-red-600 text-white'><a>خروج</a></li>
                                </ul>
                            </div>
                        ) : (
                            <NavLink to="/Login">
                                <img src={user} alt="" />
                            </NavLink>
                        )}

                        
                    
                    </div>

               
                </ div>
            </div >


            {/* slide bar */}
            < div className={`w-2/3 sm:w-2/5 h-[100vh] transition-all duration-500  items-center justify-center  fixed top-0  bg-[#A1B2A2] rounded-l-2xl z-50 ${slideBar ? 'right-0' : '-right-full'}`
            }>
                <div className=' flex flex-col items-center justify-between relative  h-full'>

                    <GrClose onClick={() => closeSlide(false)} className='top-5 left-5 ml-5 cursor-pointer absolute' />
                    <div className=' flex flex-col items-center mt-14 w-full  '>
                        <Link to="/">
                            <img className='w-[100px]' src={logo3} alt="" />
                        </Link>
                        <ul className='mt-6 w-full' >
                            <NavLink to="/ContactUs" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                <img className='ml-2 ' src={phone} alt="" />
                                تماس با ما</NavLink>
                            <NavLink to="/AboutUs" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                <img className='ml-2 ' src={user2} alt="" />
                                درباره ما</NavLink>
                            <NavLink to="/Articles" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                <img className='ml-2 ' src={doc} alt="" />
                                وبلاگ</NavLink>
                        </ul>

                    </div>
                </div>
            </ div>

        </>
    )
}
