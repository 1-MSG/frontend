'use client'
import Image from "next/image";
import authIcon1 from '@/assets/image/authIcon/authIcon1.png'
import authIcon2 from '@/assets/image/authIcon/authIcon2.png'
import authIcon3 from '@/assets/image/authIcon/authIcon3.png'
import authIcon4 from '@/assets/image/authIcon/authIcon4.png'
import authIcon5 from '@/assets/image/authIcon/authIcon5.png'


export default function LoginAuthIcon() {


    return (
        <>
        <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '40px'}}>
            <Image src={authIcon1} alt='' style={{width:'53px', height:'73px'}}></Image>
            <Image src={authIcon2} alt='' style={{width:'54px', height:'73px'}}></Image>
            <Image src={authIcon3} alt='' style={{width:'53px', height:'73px'}}></Image>
            <Image src={authIcon4} alt='' style={{width:'55px', height:'73px'}}></Image>
            <Image src={authIcon5} alt='' style={{width:'51px', height:'73px'}}></Image>
        </div>
        </>
    );
}