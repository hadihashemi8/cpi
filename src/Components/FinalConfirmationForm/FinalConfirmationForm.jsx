import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'

export default function FinalConfirmationForm() {

    const [statesList, seStatesList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [showSuccessModal, setShowSuccessModal] = useState(false)





    useEffect(() => {
        fetch('https://iran-locations-api.vercel.app/api/v1/states')
            .then(res => res.json())
            .then(states => {
                seStatesList(states)
            })
    }, [])

    const findCities = (e) => {
        let stateName = e.target.value
        if (stateName !== 'استان') {
            fetch(`https://iran-locations-api.vercel.app/api/v1/cities?state=${stateName}`)
                .then(res => res.json())
                .then(cities => {
                    setCitiesList(cities.cities)

                })
        } else {
            setCitiesList([])
        }

    }


    const closeModal = () => {
        setShowSuccessModal(false)
    }

    return (
        <>
            <div className=' w-full    flex flex-col items-center mt-8 md:mt-0    md:rounded-[20px]  '>

                <div className=' flex flex-col items-center w-full px-8 sm:px-14 md:px-0'>

                    <div className='flex items-center justify-between py-[14px] px-5  rounded-lg border-[1px] border-[#42A476]  shadow-[0px_0px_8px_rgba(134,134,134,0.25)]'>
                        <h2 className='text-[20px] text-[#616161]'>هزینه کل</h2>
                        <p className='text-[20px] mr-4 font-semibold'>2,430,000 تومان</p>
                    </div>

                    <div className='w-full mt-6 flex flex-col items-center'>
                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)] mt-4  rounded-lg flex items-center justify-between py-[5px] px-[20px]'   >
                            <img src="/./src/assets/icons/user.svg" alt="" />
                            <input className='text-base text-[#616161] mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB]' placeholder='نام ,نام خانوادگی' />
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <img src="/./src/assets/icons/phon-sm-green.svg" alt="" />
                            <input className='text-base text-[#616161] mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB]' placeholder='نام ,نام خانوادگی' />
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <img src="/./src/assets/icons/global-search.svg" alt="" />
                            <select onChange={findCities} className='text-base text-[#616161] mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB]' placeholder='استان' >
                                <option value="استان" className='text-[#ABABAB]' >استان</option>
                                {statesList.map(state => {
                                    return <option value={state.name} >{state.name}</option>
                                })}
                            </select>
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <img src="/./src/assets/icons/gps.svg" alt="" />
                            <select className='text-base text-[#616161] mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB]' placeholder='استان' >
                                {citiesList.length == 0 && (
                                    <option value="شهر" className='text-[#ABABAB]' >شهر</option>
                                )}
                                {citiesList.length && citiesList.map(city => {
                                    return <option value={city.name} >{city.name}</option>
                                })}
                            </select>
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-start justify-between  mt-4 py-[5px] px-[20px]'   >
                            <img src="/./src/assets/icons/location-sm.svg" alt="" />
                            <textarea className='text-base text-[#616161] mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB]' placeholder='آدرس' >

                            </textarea>
                        </div>


                        <button onClick={() => setShowSuccessModal(true)} className='bg-main-green2  lg:w-[90%] text-base text-white py-4 px-16 mt-12 shadow-[0px_2px_8px_rgba(0,0,0,0.25),inset_0px_0px_8px_rgba(0,0,0,0.25)] rounded-lg'>پرداخت</button>
                    </div>

                </div>


            </div>

            {showSuccessModal && (
                <Modal closeModal={closeModal} />
            )}
        </>
    )
}
