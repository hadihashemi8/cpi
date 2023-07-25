import React from 'react'
import QuestionBox from '../QuestionBox/QuestionBox'


const questionDetails = [
    { id: 1, question: "ورق شیت پلاست چیست؟", answer: "این محصول ورق پلاستیکی یا کارتنی است که از سه لایه باریک پلی پروپیلن ساخته می شود. به دلیل قرار گرفتن یک لایه چین دار و دندانی شکل پلاستیکی بین دو ورقه صاف، این محصول به ورق پلاستیکی دو جداره نیز معروف است. این محصول با نام های دیگری هم چون شیت پلاست، پلاست شیت، پلاست پک، هالوپرفیل شیت و کروگیت پلاستیک شیت نیز شناخته می شود." },
    { id: 2, question: "متداول ترین انواع شیت پلاست کدام است؟", answer: "۱.ورقه ای یا ساده ۲.عمودی ۳.کندویی یا حبابی" },
    { id: 3, question: "شیت پلاست چه کاربردهایی دارد؟", answer: "قالب بندی ساختمانی و بلوک سقفی، معماری داخلی، سوله سازی، خودرو سازی، لوازم خانگی، ساخت لوستر و دکوراسیون، ماکت سازی، استندهای تبلیغاتی، ساخت لوکیشن های فیلم برداری و تهیه انواع تابلوهای راهنمایی رانندگی از کاربردهای این محصول است" },
    { id: 4, question: "شیت پلاست چه میزان تغییرات دمایی را تحمل می کند؟", answer: "میزان تحمل تغییرات دمایی این محصول بین منفی ۳۰ تا ۸۰ درجه سانتی گراد می باشد." },
]


export default function Questions() {
    return (
        <div className=' pt-36 '>
            <div className=' flex flex-col items-center  lg:px-40 px-8'>
                <h2 className='text-[20px]'>سوالات متداول</h2>
                <div className=' mt-12 w-full flex flex-col items-center  ' >
                    <div className=' w-full flex flex-col  items-center'>
                        {questionDetails.map(item => (
                            <QuestionBox key={item.id} {...item} />
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
