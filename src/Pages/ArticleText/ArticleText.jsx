import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Articles from '../../Components/Articles/Articles'
import Properties from '../../Components/Properties/Properties'
import UsersCommentsSection from '../../Components/UsersCommentsSection/UsersCommentsSection'

export default function ArticleText() {
    return (
        <div className='pt-28'>
            <NavBar />
            {/* <div className='px-4 lg:px-10 flex flex-col items-center lg:w-2/3 '>
                <h1 className='text-2xl text-[#2B2B2B] font-semibold'>کارتن پلاست چیست؟</h1>

                <div className='flex items-center justify-center w-full  px-4  mt-4' >
                    <div className='relative  flex bg-red-500'>
                        <img className='z-40 lg:w-[777px] lg:h-[450px] ' src="/./src/assets/images/p-4.svg" alt="" />
                        <img className='absolute  lg:w-[453px] top-[60px] lg:top-20 -left-[5%] ' src="/./src/assets/polygons/Rectangle 15.svg" alt="" />
                        <div className='absolute top-full right-0 flex flex-col mt-1 '>
                            <div className='flex   w-full'>
                                <img className='w-5' src="/./src/assets/icons/dislike-gray.svg" alt="" />
                                <img className='w-5 mr-2' src="/./src/assets/icons/like-gray.svg" alt="" />
                            </div>
                            <p className='text-[10px] text-[#929292] mt-2'>تاریخ انتشار: 1402/01/18</p>
                        </div>
                    </div>
                </div>



                <div className='px-4'>
                    <p className='mt-24 text-sm text-[#626262] text-justify'>همانطور که میدانید با پیشرفت علم و دانش تمامی جنبه های زندگی بشر در حال دگرگونی و توسعه می باشد.
                        در این بخش ما به دنبال تعریفی روشن از کارتن پلاست هستیم از این رو اینگونه تعبیر میکنیم قرار گرفتن دو ورق مسطح خارجی بر روی یکدیگر که از مقاومت فوق العاده ای برخوردار می باشد را کارتن پلاست می گوییم.
                        همچنین لازم به ذکر است مواد اولیه ای همچون پلی پروپیلن محصولی نهایی را تولید می کند که به آن کارتن پلاست می گویند. نکته قابل توجه این است که این محصول را به دلیل دوام و مقاومت بسیار بالایی که دارد می توان در صنایع مختلف تبلیغات، کشاورزی، ساختمان، بسته بندی و … مورد استفاده قرار داد.
                        جنس کارتن پلاست از پلاست شیت یا هالوشیت بوده و به علت اینکه محصولی مدرن است اغلب برای همگان ناشناخته و مبهم می باشد.
                        این محصول از کاربردهای بسیار زیادی برخوردار است به گونه ای که ضد آب است و در برابر نور مستقیم خورشید مقاوم می باشد. تغییرات موجود در آب و هوا هیچگونه تغییری در این محصول ایجاد نخواهد کرد .
                        این محصول مقاومت خود را در تمامی شرایط حفظ می کند. یکی از بارزترین ویژگی های این محصول این است که قابلیت چاپ را دارد و میتوان آن را به صورت اشکال و طرح های مختلف درآورد.
                    </p>
                </div>
            </div> */}



            <div className='md:w-2/3 px-6 lg:px-8 mt-14'>
                <UsersCommentsSection />
            </div>
            <div className='lg:hidden'>
                <Articles title="مقالات مشابه" />
            </div>

            <Properties />
            <Footer />
        </div>
    )
}
