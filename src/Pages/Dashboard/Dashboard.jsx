import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import { BsKey } from 'react-icons/bs'
import authContext from '../../context/authContext'
import { toast } from 'react-toastify'
import axios from "axios";



export default function Dashboard() {

    const context = useContext(authContext)
    const [role, setRole] = useState(null)

    const [newAdminName, setNewAdminName] = useState('')
    const [newAdminRole, setNewAdminRole] = useState('admin')
    const [newAdminPassword, setNewAdminPassword] = useState('')
    const [title, setTitle] = useState('')
    const [firstDescription, setFirstDescription] = useState('')
    const [secoundDescription, setSecondDescription] = useState('')
    const [firstImage, setFirstImage] = useState({})
    const [secoundImage, setSecondImage] = useState({})


    const changeImgHandler1 = (e) => {
        // console.log(e.target.files[0].name);
        setFirstImage(e.target.files[0])
    }
    const changeImgHandler2 = (e) => {

        setSecondImage(e.target.files[0])


    }


    const createBlog = (e) => {
        e.preventDefault()
        const localData = JSON.parse(localStorage.getItem('user'))


        const formData = new FormData();
        formData.append('title', title);
        formData.append('firstDescription', firstDescription);
        formData.append('secoundDescription', secoundDescription);
        formData.append('firstImage', firstImage);
        formData.append('secoundImage', secoundImage);


        axios.post("https://cpico.ir/api/articles", formData, {
            headers: {
                "Authorization": `Bearer ${localData.token}`
            },
        })
            .then((response) => {
                if (response.status == 201) {
                    toast.success("مقاله باموفقیت ساخته شد", {
                        autoClose: 1000,
                        hideProgressBar: true
                    })
                    setTitle('')
                    setFirstDescription('')
                    setSecondDescription('')
                    setFirstImage({})
                    setSecondImage({})
                }

            })
            .catch((error) => {
                if (error.response.status == 401) {
                    toast.error("مجددا لاگین کنید", {
                        autoClose: 1000,
                        hideProgressBar: true
                    })
                }else if(error.response.status == 422){
                    toast.error("فیلد هارا بررسی کنید", {
                        autoClose: 1000,
                        hideProgressBar: true
                    })
                }
                
            });
    }




    const createAdmin = async () => {
        const localData = JSON.parse(localStorage.getItem('user'))


        if (newAdminName == '' || newAdminPassword == '') {
            toast.error("فیلد های مورد نظر را پر کنید", {
                autoClose: 1000,
                hideProgressBar: true
            })
        } else if (newAdminPassword.length < 8) {
            toast.error("پسورد باید بیشتر از 8 کاراکتر باشد", {
                autoClose: 1000,
                hideProgressBar: true
            })


        } else {
            const newAdminInfos = {
                name: newAdminName,
                role: newAdminRole,
                password: newAdminPassword
            }


            const response = await fetch('https://cpico.ir/api/register', {
                method: "POST",
                headers: {
                    "Accept": "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                    "Authorization": `Bearer ${localData.token}`
                },
                body: JSON.stringify(newAdminInfos)
            })


            const responseData = await response.json()

            console.log(responseData);
            if (response.status == 422) {
                toast.error("این نام قبلا ثبت شده است", {
                    autoClose: 1000,
                    hideProgressBar: true
                })

            }  else if(response.status == 500){
                toast.warn("لطفا مجددا لاگین کنید", {
                    autoClose: 1000,
                    hideProgressBar: true
                })
             

            }else if(response.ok){
                toast.success("ادمین با موفقیت ساخته شد", {
                    autoClose: 1000,
                    hideProgressBar: true
                })
                setNewAdminName('')
                setNewAdminPassword('')
            }
        }
    }



    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('user'))
        if (localData) {
            setRole(localData.userInfos.role)
        }
    }, [])

    return (
        <div className='pt-28 '>
            <NavBar />
            <div className='  p-4 sm:px-14 flex items-center justify-center'>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4 sm:w-2/3 lg:w-full'>
                    {role == "CEO" && (
                        <div className='  col-span-1  '>
                            <div className='flex flex-col items-center justify-between rounded-xl shadow-[0_0_8px_1px_rgba(0,0,0,0.4)] p-4 pb-12 bg-main-green1'>
                                <h1 className='text-2xl'>ساخت ادمین</h1>

                                <div className=" mt-8 w-full lg:w-auto">
                                    <div className='flex border-[1px] border-gray-800 rounded-lg py-1 px-5 mb-2 w-full'>
                                        <img className='ml-2 w-5 ' src="/./src/assets/icons/profile-circle-black.svg" alt="" />
                                        <input value={newAdminName} onChange={e => setNewAdminName(e.target.value)} className='py-2 text-gray-800 placeholder:text-gray-800  bg-transparent border-none outline-none  placeholder:text-xs' type="text" placeholder='نام کاربری' />
                                    </div>
                                    <div className='flex border-[1px] border-gray-800 rounded-lg py-1 px-5 mb-2 w-full'>
                                        <img className='ml-2 w-5 ' src="/./src/assets/icons/profile-circle-black.svg" alt="" />
                                        <input value={newAdminRole} onChange={e => setNewAdminRole(e.target.value)} className='py-2 text-gray-800 placeholder:text-gray-800  bg-transparent border-none outline-none  placeholder:text-xs' type="text" placeholder='نقش کاربر' />
                                    </div>
                                    <div className='flex items-center border-[1px] border-gray-800 rounded-lg py-1 px-5 mb-2 w-full'>
                                        <BsKey className='ml-2 text-gray-800 text-xl' />
                                        <input value={newAdminPassword} onChange={e => setNewAdminPassword(e.target.value)} className='py-2 text-gray-800 placeholder:text-gray-800  bg-transparent border-none outline-none  placeholder:text-xs' type="text" placeholder='رمز عبور' />
                                    </div>

                                    <button onClick={createAdmin} className='w-full text-white bg-[#42A476] mt-4 py-3 px-16 rounded-lg drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)] text-xs lg:text-base'>ساخت ادمین</button>

                                </div>
                            </div>
                        </div>

                    )}

                    <div className='rounded-xl shadow-[0_0_8px_1px_rgba(0,0,0,0.4)] bg-main-green1 col-span-1 md:col-span-2 p-4 pb-12'>
                        <div className='flex flex-col items-center  '>
                            <h1 className='text-2xl'>ساخت مقاله</h1>
                            <form onSubmit={createBlog}>
                                <div className='flex flex-col items-center  lg:flex-row lg:items-start  w-full mt-4'>
                                    <div className='md:w-2/3  flex items-center justify-center'>
                                        <div className=" mt-8 w-full lg:w-auto ">
                                            <div className='flex border-[1px] border-gray-800 rounded-lg py-1 px-5 mb-2 w-full'>

                                                <input value={title} onChange={e => setTitle(e.target.value)} className='py-2 text-gray-800 placeholder:text-gray-800  bg-transparent border-none outline-none placeholder:text-xs' type="text" placeholder='نام مقاله' />
                                            </div>
                                            <div className='flex flex-col items-center mt-4 border-[1px] border-gray-500 p-2 rounded-lg'>
                                                <label>عکس عنوان</label>
                                                <input type="file" className="file-input file-input-ghost w-full max-w-xs" onChange={(event) => changeImgHandler1(event)} />
                                            </div>
                                            <div className='flex flex-col items-center mt-4 border-[1px] border-gray-500 p-2 rounded-lg'>
                                                <label>عکس بلاگ</label>
                                                <input type="file" className="file-input file-input-ghost w-full max-w-xs" onChange={(event) => changeImgHandler2(event)} />
                                            </div>


                                            <button className='w-full hidden lg:block text-white bg-[#42A476] mt-4 py-3 px-16 rounded-lg drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)] text-xs lg:text-base'>ساخت مقاله</button>

                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-center  mt-5'>
                                        <textarea value={firstDescription} onChange={e => setFirstDescription(e.target.value)} rows={10} className='w-2/3 mt-4 outline-none  border-none p-2 ' placeholder='متن مقاله را وارد کنید'></textarea>
                                        <textarea value={secoundDescription} onChange={e => setSecondDescription(e.target.value)} rows={10} className='w-2/3 mt-4 outline-none  border-none p-2 ' placeholder='متن مقاله را وارد کنید'></textarea>
                                    </div>
                                    <button className='w-full block lg:hidden text-white bg-[#42A476] mt-4 py-3 px-16 rounded-lg drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)] text-xs lg:text-base'>ساخت مقاله</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
