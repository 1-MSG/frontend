'use client'

import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function Post() {
    const [post, setPost] = useState('');
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


    return (
        <div className='py-[15px] border-b border-b-[#f8f8f8]'>
            <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>주소</p>
            <div className='flex'>
                <p className='w-2/3 border py-[10px] px-[10px] mr-[10px] truncate'>{post}</p>
                <div onClick={handleClick} className='w-1/3 py-[10px] px-[17px] bg-[#666666] text-white'>우편번호</div>
            </div>
        </div>
    )
}