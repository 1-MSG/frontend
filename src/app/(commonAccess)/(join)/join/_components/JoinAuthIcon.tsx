'use client'

import Image from "next/image";
import authIcon1 from '@/assets/image/authIcon/authIcon1.png'
import authIcon2 from '@/assets/image/authIcon/authIcon2.png'
import authIcon3 from '@/assets/image/authIcon/authIcon3.png'
import authIcon6 from '@/assets/image/authIcon/authIcon6.png'
import Link from "next/link";

export default function SignInAuthIcon() {


    return (
        <>
            <div style={{background:'#F8F8F8', width:'100%', padding:'12px', fontSize:'12px', color:'grey'}}>간편회원</div>
            <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '40px', paddingBottom: '40px'}}>
                <Image src={authIcon6} alt='' style={{width:'54px', height:'73px'}}></Image>
                <Image src={authIcon1} alt='' style={{width:'53px', height:'73px'}}></Image>
                {/* 임시로, 라우트 되도록 구현 => 이후 auth 적용해서 로직 수정 필요 */}
                <Link href={'/join/easy'}><Image src={authIcon2} alt='' style={{width:'53px', height:'73px'}}></Image></Link>
                <Image src={authIcon3} alt='' style={{width:'53px', height:'73px'}}></Image>
            </div>
        </>
    );
}