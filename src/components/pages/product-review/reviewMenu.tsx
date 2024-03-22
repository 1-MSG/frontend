'use client'
import { useState } from "react"
import ReviewList from '@/components/pages/product-review/reviewList'
import ReviewList2 from '@/components/pages/product-review/reviewList2'

export default function ReviewMenu() {

    const [visible, setVisible] = useState(true) 

    const onMenuLeft = "w-1/2 h-[50px] pt-[15px]  bg-[#444444] text-white rounded-l-lg"
    const offMenuLeft = "w-1/2 h-[50px] pt-[15px] bg-white border-[#444] border text-[#444444] rounded-l-lg"

    const onMenuRight = "w-1/2 h-[50px] pt-[15px] bg-[#444444] text-white rounded-r-lg"
    const offMenuRight = "w-1/2 h-[50px] pt-[15px] bg-white border-[#444] border text-[#444444] rounded-r-lg"

    const clickPossible = () => {
        setVisible(true);
    }
    const clickAlready = () => {
        setVisible(false);
    }

    return(
        <div className='pt-[20px] pr-[16px] pl-[16px]'>
                <div className='w-full h-[50px] flex justify-between text-center border-[#444] border rounded-lg text-[13px] items-center' >
                    <div className={visible ? onMenuLeft : offMenuLeft} onClick={(clickPossible)}>
                        작성 가능한 리뷰
                    </div>
                    <div className={visible ? offMenuRight : onMenuRight} onClick={(clickAlready)}>
                        작성한 리뷰
                    </div>
                </div>
                <div className=''>
                    {visible && <ReviewList />}
                </div>
                <div>
                    {!visible && <ReviewList2 />}
                </div>
            </div>
    )
}