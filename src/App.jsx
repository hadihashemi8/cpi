import './App.css'
import { useState, useEffect } from 'react'
import routes from './router'
import { useRoutes } from "react-router-dom"
import BackToTopBtn from './Components/BackToTopBtn/BackToTopBtn'
import authContext from './context/authContext'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [showBackTopBtn, setShowBackTopBtn] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState({})
  let router = useRoutes(routes)


  useEffect(() => {
    window.addEventListener('scroll', (e) => {

      if (window.scrollY > 20) {
        setShowBackTopBtn(true)
      }
      if (window.scrollY == 0) {
        setShowBackTopBtn(false)

      }
    })
  }, [])


  const backTopHandlear = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const login = (infos, token) => {

    setIsLogin(true)
    setToken(token)
    setUserInfos(infos)
    localStorage.setItem('user', JSON.stringify({ token, userInfos: infos }))
    
  }



  const logOut = () => {
    setToken(null)
    setIsLogin(false)
    setUserInfos(null)
    localStorage.removeItem('user')
  }


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'))
    if (localData) {
      setIsLogin(true)
      setToken(localData.token)
      setUserInfos(localData.userInfos)
    }

  }, [])

  return (
    <authContext.Provider value={{
      isLogin,
      token,
      userInfos,
      login,
      logOut
    }}>
      <ToastContainer style={{textAlign:"center"} }/>
      <div className='max-w-screen-2xl relative bg-[#F5F5F5] mx-auto w-full'>
        {showBackTopBtn && (
          <BackToTopBtn backTopHandlear={backTopHandlear} />
        )}
        {router}
      
      </div>
    </authContext.Provider>
  )
}

export default App
