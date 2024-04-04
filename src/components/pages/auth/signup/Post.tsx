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
        <>
            <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>주소</p>
                <div className='flex basis-5/6'>
                    <input type="text" readOnly name='address' className='basis-3/5 border py-[10px] px-[10px] mr-[10px] truncate' value={post} />
                    <div onClick={handleClick} className='basis-2/5 py-[10px] px-[17px] bg-[#666666] text-white text-center'>우편번호</div>
                </div>
            </div>
            <div className='flex'>
                <input type="text" name='address2' className='basis-5/6 border py-[10px] px-[10px] truncate ml-auto' placeholder='상세주소'/>
            </div>
        </>
    )
}