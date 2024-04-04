'use client'

import Post from "@/components/pages/auth/signup/Post";
import MarketingAgreement from "@/components/pages/auth/signup/marketingAgreement"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import SignupCheckPW from "./SignupCheckPW";
import SignupCheckId from "./SignupCheckId";


export default function SignupInput({ handleSubmit }: { handleSubmit: (loginId: string, password: string, username: string, phoneNumber: string, email: string, address: string) => void }) {


    function handleSubmitClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            loginId: { value: string };
            password: { value: string };
            username: { value: string };
            phoneNumber: { value: string };
            email: { value: string };
            address: { value: string };
            address2: { value: string };
        };
        const loginId = target.loginId.value;
        const password = target.password.value;
        const username = target.username.value;
        const phoneNumber = target.phoneNumber.value;
        const email = target.email.value;
        const address = target.address.value + target.address2.value;

        //console.log(loginId, password, username, phoneNumber, email, address);
        handleSubmit(loginId, password, username, phoneNumber, email, address);
    }



    return (
        <form onSubmit={handleSubmitClick}>
            <div className='px-[20px] text-[12px] tracking-[-0.05rem]'>


                <SignupCheckId />
                {/* 비밀번호 */}
                <SignupCheckPW />

                <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                    <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이름</p>
                    <input type="text" name="username" className='basis-5/6 border py-[10px] px-[10px]' />
                </div>

                {/* 주소 받아오기 */}
                <Post />

                <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                    <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>휴대폰 번호</p>
                    <input type="number" name="phoneNumber" className='basis-5/6 border py-[10px] px-[10px]' placeholder='- 제외' />
                </div>
                <div className='flex py-[15px]'>
                    <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이메일</p>
                    <input type='text' name="email" className='basis-5/6 border py-[10px] px-[10px]' placeholder='이메일주소' />
                </div>

            </div>

            <MarketingAgreement />
            <button type="submit" className='my-[15px] py-[10px] mx-[20px] w-11/12 bg-[#ff5452] text-white font-extrabold items-center content-center'>
                가입하기
            </button>
        </form>
    )
}