'use client'

import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function OrderLoginPost() {

    const [post, setPost] = useState('배송 주소');
    const open = useDaumPostcodePopup();

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setPost(fullAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return(
        <div className='my-[10px] grid grid-cols-5'>
            <span className='col-span-3'>
                <p className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem] truncate">{post}</p>
            </span>
            <div onClick={handleClick} className='col-span-2 text-center content-center text-[13px] tracking-[-0.07rem] border border-[#e0e0e0] bg-[#f9f9f9]'>
                우편번호 찾기
            </div>
        </div>
    )
}