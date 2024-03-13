'use client'

import Link from "next/link";

export default function SignInBtn() {


    return (
        <>
            <div style={{width: '100%', padding:'20px'}}>
                <Link href={'/joinform'}>
                    <button style={{width:'100%', background:'#ff5452', height:'50px', color:'white', fontSize:'15px', fontWeight:'bold'}}>멤버십 혜택 받고 통합회원 가입하기</button>
                </Link>
                <Link href={'/joinform'}>
                    <button style={{width:'100%', background:'#d1d1d1', height:'50px', color:'white', marginTop:'10px', fontSize:'15px', fontWeight:'bold'}}>통합회원만 가입하기</button>
                </Link>
            </div>
        </>
    );
}