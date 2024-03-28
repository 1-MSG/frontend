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
        <div className='flex items-center w-[56px] h-[50px]'>
            <div onClick={goBack} className='pl-[15px]'>
                <BackBtn />
            </div>
        </div>
    )
}

export default BtnBack