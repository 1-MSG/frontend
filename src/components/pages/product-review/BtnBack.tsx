"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import BackBtn from '@/images/svgs/BackBtn';


function BtnBack() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className='flex gap-[3px] items-center w-[30px] h-[14px]' onClick={goBack}>
            <BackBtn/>
        </div>
    )
}

export default BtnBack