import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Articles from '../../Components/Articles/Articles'
import Properties from '../../Components/Properties/Properties'
import SmallArticleBox from '../../Components/SmallArticleBox/SmallArticleBox'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import authContext from '../../context/authContext'
import { toast } from 'react-toastify'





export default function ArticleText() {

const navigate = useNavigate()
    const context = useContext(authContext)
    const params = useParams()
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState({})
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch("https://cpico.ir/api/AllArticles")
            .then(res => res.json())
            .then(datas => {

                setBlogs(datas.data)
            })

    }, [])

    useEffect(() => {

        if (context.userInfos?.role == "admin" || context.userInfos?.role == "CEO") {
            setIsAdmin(true)
        }
    }, [blog, context.userInfos])



    useEffect(() => {
        const findBlog = blogs.find(item => item.id == params.ArticleId)

        setBlog(findBlog)

    }, [blogs, params])


    const removeBlog = () => {

        const localData = JSON.parse(localStorage.getItem('user'))

        Swal.fire({
            icon: "question",
            title: "آیااز حذف مقاله مطمئن هستید؟",
            confirmButtonText: "بله",
            confirmButtonColor: "#42A476",
            showCancelButton: true,
            cancelButtonText: "لغو",
            cancelButtonColor: "red"

        }).then(res => {
            
            if (res.isConfirmed) {
                fetch(`https://cpico.ir/api/articles/${blog?.id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${localData.token}`
                    }
                }).then(res => {
                if(res.status == 500){
                    toast.warn('لطفا مجددا لاگین شوید', {
                        autoClose: 1000,
                        hideProgressBar: true
                    })
                    

                }else if (res.ok) {
                        toast.success('مقاله با موفقیت حذف شد', {
                            autoClose: 1000,
                            hideProgressBar: true
                        })
                        navigate('/')
                    }
                })

            }
        })
    }

    return (
        <div className='pt-28'>
            <NavBar />

            {isAdmin && (
                <button onClick={removeBlog} className='mr-8 bg-red-600 p-2 rounded-lg text-white'>حذف مقاله</button>
            )}


            <div className='grid grid-cols-1 lg:grid-cols-3 p-4 gap-4'>

                <div className='px-4 lg:px-10 flex flex-col items-center  col-span-1 lg:col-span-2'>
                    <h1 className='text-2xl text-[#2B2B2B] font-semibold'>{blog?.title}</h1>

                    <div className='flex items-center justify-center w-full  px-4  mt-4' >
                        <div className='relative  flex '>
                            <img className='z-40 lg:w-[777px] lg:h-[450px] ' src={`/./images/${blog?.firstImage}`} alt="" />
                        </div>
                    </div>

                    <div className='px-4'>
                        <p className='mt-24 text-sm text-[#626262] text-justify'>
                            {blog?.firstDescription}
                        </p>
                    </div>

                   
                    <div className='relative  flex mt-8'>
                        <img className='z-40 lg:w-[777px] lg:h-[450px] ' src={`/./images/${blog?.secoundImage}`} alt="" />
                    </div>
                  

                    <div className='px-4'>
                        <p className='mt-24 text-sm text-[#626262] text-justify'>
                            {blog?.secoundDescription}
                        </p>
                    </div>
                </div>

                <div className=' hidden lg:flex col-span-1  flex-col items-center '>
                    <div className=' shadow-[0px_0px_20px_rgba(97,97,97,0.25);] rounded-lg h-[400px] overflow-y-scroll text-center p-4'>
                        {blogs.map(item => (

                            <SmallArticleBox key={item.id} {...item} />
                        )
                        )}

                    </div>
                </div>

            </div>

            <div className='lg:hidden'>
                <Articles title="مقالات مشابه" />
            </div>

            <Properties />
            <Footer />
        </div>
    )
}
