import React from 'react'
import phone from "/./src/assets/icons/phon-green.svg"
import location from "/./src/assets/icons/location.svg"
import send from "/./src/assets/icons/send-2.svg"
import whatsapp from "/./src/assets/icons/whatsapp.svg"
import instagram from "/./src/assets/icons/instagram.svg"
import { Link } from 'react-router-dom'



export default function ContactUsWay() {
    return (
        <div className='flex items-center justify-center px-8 lg:px-32 pt-28' >
            <div className='flex flex-col items-center w-full'>
                <h2 className='text-[20px] mx-2 font-semibold'>راه های ارتباطی با ما</h2>
                <div className='mt-8 rounded-[20px] px-10  pb-16  flex justify-around  shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_0px_0px_20px_rgba(0,0,0,0.25)] w-full  bg-[rgba(218,239,220,0.2)]'>
                    <div className='flex flex-col  items-center md:flex-row-reverse md:items-start sm:justify-around w-full '>


                        <div className='mt-14 flex flex-col items-center '>
                            <img src={phone} alt="" />
                            <h2 className='text-[20px] text-[#353535] mt-2'>تماس با ما </h2>

                            <div className='mt-4 flex flex-col items-center'>
                                <p className='text-[#5B5B5B] text-[20px]'>04433745331-3</p>
                                <p className='text-[#5B5B5B] text-[20px]'>09124410268</p>
                       
                            </div>
                        </div>
                        
                        <div className='mt-14 flex flex-col items-center '>
                            <img src={location} alt="" />
                            <h2 className='text-[20px] text-[#353535] mt-2'>آدرس کارخانه </h2>

                            <div className='mt-4 w-2/3'>
                                <p className='text-[#5B5B5B] text-[20px]  text-center '>شهرک صنعتی فاز2/خیابان صنعتگران4/نبش خیابان دوازدهم/پلاک1</p>
                           
                            </div>
                        </div>

                        <div className='mt-14 flex flex-col items-center '>
                            <img src={send}alt="" />
                            <h2 className='text-[20px] text-[#353535] mt-2  text-center'>شبکه های اجتماعی </h2>

                            <div className='mt-4 flex items-center flex-col'>
                                <p className='text-[#5B5B5B] text-[16px] flex justify-between items-center md:mt-2 '>
                                    <img className='ml-2' src={whatsapp} alt="" />
                                    09124461293
                                </p>
                                <Link to="https://instagram.com/cartonplastiranian?igshid=NTc4MTIwNjQ2YQ==" target='_blank'>
                                    <p className='text-[#5B5B5B] text-[16px] flex justify-between items-center md:mt-2 '>
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
