import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrClose } from "react-icons/gr"







export default function NavBar(props) {

    const [slideBar, setSlideBar] = useState(false)





    const closeSlide = () => setSlideBar(false)

    return (
        <>

            <div className={`navbar fixed top-0 left-0 z-50 px-6 lg:px-20  flex items-center justify-between w-full h-[64px] lg:h-[89px] ${props.style2 ? "  bg-white  " : "bg-main-green1 rounded-b-[32px] lg:rounded-b-[44.5px]"}`}>
                {/* navbar start */}


                <div className=" flex ">

                    {/* logo for mobile size */}
                    <div className='hidden lg:block '>
                        <NavLink to="/">
                            <img src="/./src/assets/logo/logo.svg" alt="" />
                        </NavLink>
                    </div>

                    {/* bar icon for mobile size   */}
                    <div onClick={() => setSlideBar(true)}>
                        <label tabIndex={0} className="cursor-pointer   lg:hidden ">
                            <img src="/./src/assets/icons/menu.svg" alt="" />
                        </label>
                    </div>

                    {/* navbar links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            <NavLink to="/ContactUs" className='mr-6 xl:mr-12 cursor-pointer flex items-center font-semibold'>

                                <img className='ml-2' src="/./src/assets/icons/vector-black.svg" alt="" />
                                تماس با ما</NavLink>

                            <NavLink to='/Products' className='mr-6 xl:mr-12 cursor-pointer flex font-semibold '  >
                                <img className='ml-2' src="/./src/assets/icons/box-black.svg" alt="" />


                                محصولات</NavLink>
                            <NavLink to="/AboutUs" className='mr-6 xl:mr-12 cursor-pointer flex items-center font-semibold'>
                                <img className='ml-2' src="/./src/assets/icons/profile-2user-black.svg" alt="" />

                                درباره ما</NavLink>
                            <NavLink to="/Articles" className='mr-6 xl:mr-12 cursor-pointer flex font-semibold'>
                                <img className='ml-2' src="/./src/assets/icons/document-text-black.svg" alt="" />
                                وبلاگ</NavLink>
                        </ul >
                    </div >

                </div >


                {/*logo for desktop size */}
                < div div className=' lg:hidden' >
                    <img src="/./src/assets/logo/logo.svg" alt="" />
                </ div>


                {/* navbar end */}
                < div div className=" flex items-center justify-between" >
                    <div className='ml-4 hidden lg:flex lg:flex-row-reverse  lg:items-center '>
                        <NavLink to="/Login">
                            <img src="/./src/assets/icons/profile-circle-black.svg" alt="" />
                        </NavLink>
                        <div className=' ml-4 flex   rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(167,167,167,0.25);] '>
                            <button className="bg-main-green2 p-2">
                                <img className='mx-1  ' src="/./src/assets/icons/search-normal-white.svg" alt="" />
                            </button>
                            <input className='border-none outline-none p-2' type="text" placeholder='سرچ' />
                        </div>
                    </div>

                    <NavLink to="/Backet" className="relative">
                        <img className='mx-1 lg:w-[28px]' src="/./src/assets/icons/shopping-cart-black.svg" alt="" />
                        <span className='w-5 h-5 bg-main-green2 rounded-full absolute -top-[15%] -right-[15%] flex items-center justify-around text-white text-[10px] '>2</span>
                    </NavLink>
                    <img className='mx-1 lg:hidden' src="/./src/assets/icons/Line 55.svg" alt="" />
                    <img className='mx-1 lg:hidden' src="/./src/assets/icons/search-normal-black.svg" alt="" />
                </ div>
            </div >


           

           {/* slide bar */}
                <div className={`w-2/3 sm:w-2/5 h-[100vh] transition-all duration-500  items-center justify-center  fixed top-0  bg-[#A1B2A2] rounded-l-2xl z-50 ${slideBar ? 'right-0' : '-right-full'}`}>
                    <div className=' flex flex-col items-center justify-between relative  h-full'>

                        <GrClose onClick={() => closeSlide(false)} className='top-5 left-5 ml-5 cursor-pointer absolute' />
                        <div className=' flex flex-col items-center mt-14 w-full  '>
                            <Link to="/">
                            <img className='w-[100px]' src="/./src/assets/logo/logo.svg" alt="" />
                            </Link>
                            <ul className='mt-6 w-full' >
                                <NavLink to="/ContactUs" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                    <img className='ml-2 ' src="/./src/assets/icons/vector-white.svg" alt="" />
                                    تماس با ما</NavLink>

                                <NavLink to='/Products' className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                    <img className='ml-2 ' src="/./src/assets/icons/box-white.svg" alt="" />
                                    محصولات</NavLink>
                                <NavLink to="/AboutUs" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                    <img className='ml-2 ' src="/./src/assets/icons/profile-2user-white.svg" alt="" />
                                    درباره ما</NavLink>
                                <NavLink to="/Articles" className=' cursor-pointer flex py-3 pr-6 text-sm'>
                                    <img className='ml-2 ' src="/./src/assets/icons/document-text-white.svg" alt="" />
                                    وبلاگ</NavLink>
                            </ul>

                        </div>

                        <NavLink to="/Login" className="mb-4">
                            <div className='flex items-center'>
                                <img className='ml-2' src="/./src/assets/icons/profile-circle-white.svg" alt="" />
                                <h4>ورود و ثبت نام</h4>
                            </div>
                        </NavLink>
                    </div>
                </div>
            
        </>
    )
}
