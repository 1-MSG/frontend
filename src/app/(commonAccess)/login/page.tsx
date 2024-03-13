import Image from "next/image";

import BackBtn from "../search/_components/backBtn";
import nullImg from "@/assets/image/etc/nullImg.png"
import Footer from "@/components/layout/Footer";
import LoginContainer from "@/app/(commonAccess)/login/_components/loginConatiner"
import LoginAuthIcon from "@/app/(commonAccess)/login/_components/loginAuthIcon";
import adv4 from '@/assets/image/mainadvertisement/adv4.png'
import Link from "next/link";

export default function Page() {


    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3" style={{borderBottom:'1px solid #d3d3d3'}}>
                <BackBtn/>
                <h2 style={{fontWeight:'bold'}}>로그인</h2>
                <div className="flex items-center justify-end">
                <Image src={nullImg} alt=''></Image>
                </div>
            </div>
            <LoginContainer/>
            <LoginAuthIcon/>
            <Image src={adv4} alt='' style={{padding:'20px', marginTop:'60px'}}></Image>

            {/* 비회원 조회하기 링크 버튼 생성 필요 */}
            
            <Footer/>
        </>
    );
}