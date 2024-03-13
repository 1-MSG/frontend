"use client"

import React from 'react'
import backBtn from "@/assets/image/button/backBtn.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation';


function BackBtn() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className='flex gap-[3px] items-center w-[30px] h-[14px]'>
            <Image src={backBtn} alt="" onClick={goBack}></Image>
        </div>
    )
}

export default BackBtn