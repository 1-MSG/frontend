'use client'

import React, { useState } from 'react'
import data from '@/app/(commonAccess)/dummydata/review_create_data.json'

export default function CreateReview() {

    let [inputCount, setInputCount] = useState(0);
    const placeHolder = '텍스트/사진/영상을 추가 등록하면 SSG MONEY 50원을 바로 적립해 드립니다. \n (월 40건 제한, 동일옵션 30일 이내 미적립)'

    return (
        <div>
            <div className='inline-block pt-6 pr-5 pl-5 leading-[4rem]'>
                <img src={"https://sitem.ssgcdn.com/30/75/43/item/1000029437530_i1_750.jpg"} alt="" className="h-auto w-1/5 rounded-lg inline-block " />
                <p className='pl-[15px] inline-block text-[#96979a] font-semibold text-[14px] tracking-[-0.05rem]'>{data[0].product_name}</p>
            </div>

            <form>
                <div className='h-1/5'>
                    별점
                </div>
                <div className='mt-5 ml-[16px] mr-[16px] border-t border-[#ededed]'>
                    <p className='text-[#8560ff] font-bold pt-[20px] pb-2 text-[13px]'>지인들에게 이 상품을 추천하실 건가요?</p>
                    <div className=''>

                        <textarea className='w-full h-[15rem] rounded-lg border-solid border-[#373737] border-2 focus:outline-none 
                                            placeholder:text-xs placeholder:whitespace-pre-line text-[14px] pt-[10px] px-[10px]'
                            placeholder={placeHolder}
                            maxLength={2000} onChange={e => setInputCount(e.target.value.length)}></textarea>
                    </div>
                    <div className='flex text-[#96979a] text-[13px] pt-[2px] pb-[10px]'>
                        <div>
                            <p className='inline-block pl-1'>리뷰 등록/혜택안내</p>
                        </div>
                        <div>
                            <p className='inline-block pr-[3px]'>{inputCount}</p>
                            <p className='inline-block'>/ 2000 (10자 이상)</p>
                        </div>
                    </div>
                    <div className='text-[#96979a] text-[12px]'>
                        <p className='pb-[2px]'>개인정보(이름/연락처/주소)가 노출되지 않도록 조심해주세요.</p>
                        <p>특수기호, 동일단어 등을 3회 이상 반복하지 않도록 해주세요.</p>
                    </div>
                </div>

                <div className='w-screen'>
                    <button className='absolute bottom-0 w-11/12 mr-7 ml-5 mb-5 bg-black text-[#fff] font-bold pt-3 pb-3 rounded-lg'>등록</button>
                </div>
            </form>
        </div>
    )
}