import Image from "next/image";

import BackBtn from "../search/_components/BackBtn";
import nullImg from "@/assets/image/etc/nullImg.png"
import Footer from "@/components/layout/Footer";
import LoginContainer from "@/components/pages/login/LoginConatiner";
import LoginAuthIcon from "@/components/pages/login/LoginAuthIcon";
import adv4 from '@/assets/image/mainadvertisement/adv4.png'
import Link from "next/link";
import { signOut } from "next-auth/react";


export default function Page() {

    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3" style={{ borderBottom: '1px solid #d3d3d3' }}>
                <BackBtn />
                <h2 style={{ fontWeight: 'bold' }}>로그인</h2>
                <div className="flex items-center justify-end">
                    <Image src={nullImg} alt=''></Image>
                </div>
            </div>
            <LoginContainer />
            <LoginAuthIcon />
            <Image src={adv4} alt='' style={{ padding: '20px', marginTop: '60px', marginBottom: '34px' }}></Image>

            {/* 비회원 조회하기 링크 버튼 생성 필요 */}
            <div className="text-center py-[12px] mb-[20px]">
                <Link href='/nonUser/inquiry' className="inline-block pt-[5px] text-center text-[12px]">
                    <span className="float-left pr-[5px] text-[#9b9b9b]">비회원 조회하기</span>
                </Link>
            </div>
            <Footer />
        </>
    );
}