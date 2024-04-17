'use client'
import Image from "next/image";
import authIcon1 from '@/assets/image/authIcon/authIcon1.png'
import authIcon2 from '@/assets/image/authIcon/authIcon2.png'
import authIcon3 from '@/assets/image/authIcon/authIcon3.png'
import authIcon4 from '@/assets/image/authIcon/authIcon4.png'
import authIcon5 from '@/assets/image/authIcon/authIcon5.png'
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function LoginAuthIcon() {


    return (
        <>
        <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '40px'}}>
            <div>
                <Image src={authIcon1} alt='NAVER LOGIN' style={{width:'53px', height:'73px'}}/>
            </div>
            <div 
            // onClick={()=>signIn(
            //     'kakao',
            //     { callbackUrl: 'http://localhost:3000/' },
            // )}
            >
                <Image src={authIcon2} alt='KAKAO LOGIN' style={{width:'53px', height:'73px'}}/>
            </div>
            <div>
                <Image src={authIcon3} alt='NAVER LOGIN' style={{width:'53px', height:'73px'}}/>
            </div>
            <div>
                <Image src={authIcon4} alt='NAVER LOGIN' style={{width:'53px', height:'73px'}}/>
            </div>
            <div>
                <Image src={authIcon5} alt='NAVER LOGIN' style={{width:'53px', height:'73px'}}/>
            </div>
           
        </div>
        </>
    );
}