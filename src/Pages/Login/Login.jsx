import React, { useState } from 'react'
import { BsKey } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import authContext from '../../context/authContext'
import { toast } from 'react-toastify'
import user from "/./src/assets/icons/profile-circle-white.svg"
import profile from "/./src/assets/icons/profile-circle-white.svg"


export default function Login() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(authContext)


  const loginHandler = async () => {

    const userInfo = {
      name,
      password,
    }


    try {
      const response = await fetch('https://cpico.ir/api/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })

      const responseData = await response.json()

      if (responseData.data == '') {

        toast.error("همچین کاربری وجود ندارد", {
          autoClose: 1000,
          hideProgressBar: true,
        })
      } else {
        toast.success("ورود با موفقیت انجام شد", {
          autoClose: 1000,
          hideProgressBar: true,
        })
        context.login(responseData.data.Admin, responseData.data.token)
        navigate('/Dashboard')
      }
    } catch (err) {
      console.log(err);
    }


  }


  return (
    <div className='bg-[url("/./src/assets/images/login-bg.png")] flex items-center justify-center bg-cover  bg-no-repeat   bg-right md:bg-center w-full h-[100vh]'>
      <div className='bg-[rgba(40,_40,_40,_0.08)] shadow-[0px_0px_20px_rgba(199,199,199,0.25)] backdrop-blur-[20px] flex items-start p-4 md:px-14 justify-center rounded-[20px]  '>
        <div className='flex flex-col items-center justify-between'>

          <img className='w-[50px] mt-4' src={user} alt="" />


          <h1 className='text-2xl mt-8 text-white font-semibold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>ورود ادمین</h1>


          <div className='mt-16 flex flex-col items-center justify-between '>

            <div className='flex border-[1px] border-white rounded-lg py-1 px-5 mt-2'>
              <img className='ml-2 w-5 ' src={profile} alt="" />
              <input value={name} onChange={e => setName(e.target.value)} className='py-2 text-white  bg-transparent border-none outline-none placeholder:text-white placeholder:text-xs' type="text" placeholder='نام کاربری' />
            </div>
            <div className='flex items-center justify-between border-[1px] border-white rounded-lg py-1 px-5 mt-2'>
              {/* <img className='ml-2 w-5 ' src="/./src/assets/icons/profile-circle-white.svg" alt="" /> */}
              <BsKey className='ml-2 text-white text-xl' />
              <input value={password} onChange={e => setPassword(e.target.value)} className='py-2 text-white  bg-transparent border-none outline-none placeholder:text-white placeholder:text-xs' type="text" placeholder='رمز عبور' />
            </div>
            {/* <NavLink className="w-full" to="/Dashboard"> */}
            <button className='w-full text-white bg-[#42A476] mt-4 py-3 px-24 rounded-lg drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)] ' onClick={loginHandler}>ورود</button>
            {/* </NavLink> */}

          </div>


          <p className='text-base text-white mt-24'>cartonplast iranians</p>

        </div>
      </div>
    </div>
  )
}
