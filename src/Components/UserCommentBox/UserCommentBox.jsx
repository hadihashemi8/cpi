import React from 'react'

export default function UserCommentBox() {
    return (
        <div className='p-4 pr-8'>
            <div className='flex items-center'>
                <img className='w-5 h-5 rounded-full' src="/./src/assets/images/user.svg" alt="" />
                <h2 className='text-sm text-[#353535] font-semibold mr-2'>رضا نریمانی</h2>
            </div>
            <div className='pr-4 mt-2 flex items-start justify-between'>
                <div>
                    <p className='text-[10px] text-[#929292]'>زرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. </p>
                </div>
                <div className='flex items-center flex-row-reverse   justify-evenly  w-32'>
                    <div>
                        <img src="/./src/assets/icons/like-icon.svg" alt="" />
                    </div>
                    <p className='text-sm text-[#5A5A5A] ml-2' >پاسخ</p>
                </div>
            </div>
        </div>
    )
}
