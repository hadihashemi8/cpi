import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import logo from "/./src/assets/logo/logo.svg"
import phone from "/./src/assets/icons/phon-green.svg"
import location from "/./src/assets/icons/location.svg"
import send from "/./src/assets/icons/send-2.svg"
import whatsapp from "/./src/assets/icons/whatsapp.svg"
import instagram from "/./src/assets/icons/instagram.svg"
import { Link } from 'react-router-dom'


export default function ContactUs() {
    return (
        <div className='pt-[62px] '>
            <NavBar style2={true} />

            <div className='w-full h-full   flex items-center justify-center pb-20  pt-12 md:pt-20 bg-[url("/./src/assets/images/AboutUs-Bg.png")] bg-cover bg-no-repeat bg-center'>
                <div className='flex flex-col items-center '>
                    <div className='flex flex-col items-center  lg:mr-6'>
                        <img className='md:w-40' src={logo} alt="" />
                        <h1 className='text-white text-2xl md:text-[40px] font-semibold mt-4'>کارتن پلاست ایرانیان</h1>
                        <h1 className='text-[#244938] text-2xl md:text-[40px] font-semibold mt-2 md:mt-4'>Cartonplast Iranians</h1>
                    </div>

                    <div className='flex flex-col flex-wrap   mt-10  items-center md:flex-row-reverse md:items-start sm:justify-around w-full '>


                        <div className=' flex flex-col items-center mt-8  md:mx-14 '>
                            <img src={phone} alt="" />
                            <h2 className='text-[20px] text-white mt-2'>تماس با ما </h2>

                            <div className='mt-8 flex flex-col items-center'>
                                <p className='text-white text-[20px]'>04433745331-3</p>
                                <p className='text-white text-[20px]'>09124410268</p>

                            </div>
                        </div>

                        <div className=' flex flex-col items-center mt-8  md:mx-14  '>
                            <img src={location} alt="" />
                            <h2 className='text-[20px] text-white mt-2'>آدرس کارخانه </h2>

                            <div className='mt-8  '>
                                <p className='text-white text-[20px] text-center w-2/3 mx-auto '>شهرک صنعتی فاز2/خیابان صنعتگران4/نبش خیابان دوازدهم/پلاک1</p>

                            </div>
                        </div>

                        <div className=' flex flex-col items-center mt-8  md:mx-14 '>
                            <img src={send} alt="" />
                            <h2 className='text-[20px] text-white mt-2  text-center'>شبکه های اجتماعی </h2>

                            <div className='mt-8 flex items-center flex-col'>
                                <p className='text-white text-[16px] flex justify-between items-center md:mt-2 '>
                                    <img className='ml-2' src={whatsapp} alt="" />
                                    09124461293
                                </p>
                                <Link to="https://instagram.com/cartonplastiranian?igshid=NTc4MTIwNjQ2YQ==" target='_blank'>
                                    <p className='text-white text-[16px] flex justify-between items-center md:mt-2 '>
                                        <img className='ml-2' src={instagram} alt="" />
                                        cartonplastiranian
                                    </p>
                                </Link>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
