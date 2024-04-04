import Image from "next/image";

import BackBtn from "../../../../components/pages/search/BackBtn";
import nullImg from "@/assets/image/etc/nullImg.png";
import Etc1 from "@/assets/image/etc/etc1.png"
import Etc2 from "@/assets/image/etc/etc2.png"
import Footer from "@/components/layout/Footer";
// import LoginContainer from "@/app/(commonAccess)/login/_components/loginConatiner"
// import LoginAuthIcon from "@/app/(commonAccess)/login/_components/loginAuthIcon";
// import adv4 from '@/assets/image/mainadvertisement/adv4.png'
import Link from "next/link";
import JoinBtn from "../../../../components/pages/join/JoinBtn";
import JoinAuthIcon from "../../../../components/pages/join/JoinAuthIcon";

export default function Page() {


    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3" style={{borderBottom:'1px solid #d3d3d3'}}>
                <BackBtn/>
                <h2 style={{fontWeight:'bold'}}>회원가입</h2>
                <div className="flex items-center justify-end">
                <Image src={nullImg} alt=''></Image>
                </div>
            </div>
            <Image src={Etc1} alt=''></Image>
            <Image src={Etc2} alt=''></Image>

            <JoinBtn/>

            <JoinAuthIcon/>

            <Footer/>
        </>
    );
}