'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import BtnBack from '@/images/svgs/BackBtn'
import ReviewList from './reviewList/reviewList'
import ReviewList2 from './reviewList/reviewList2'


export default function Page() {

    const [visible, setVisible] = useState(true)

    const clickPossible = () => {
        setVisible(true);
    }
    const clickAlready = () => {
        setVisible(false);
    }


    return (
        <div className='w-full h-auto'>
            <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                <BtnBack />
                <h2 className='text-[15px] leading-[3rem] font-[600]'>상품 리뷰</h2>
                <div className='flex items-center w-[56px] h-[50px]'></div>
            </div>
            <div className='pt-[20px] pr-[16px] pl-[16px]'>
                <div className='w-full h-[50px] flex justify-between text-center border-[#444] border rounded-lg text-[13px] items-center' >
                    <div className='w-1/2 h-auto box-border' onClick={(clickPossible)}>
                        작성 가능한 리뷰
                    </div>
                    <div className='w-1/2 h-auto box-border' onClick={(clickAlready)}>
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

        </div>
    )


}

