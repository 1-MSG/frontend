"use client"

import React from 'react'
import backBtn from "@/images/png/btn_back.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation';


function BtnBack() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className='flex items-center w-[56px] h-[50px]'>
            <Image src={backBtn} alt="" onClick={goBack}></Image>
        </div>
    )
}

export default BtnBack