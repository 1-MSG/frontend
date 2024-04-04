import BackBtn from "@/app/(commonAccess)/search/_components/BackBtn";
import PopUp from "@/components/pages/auth/users/PopUp";
import Image from "next/image";
import nullImg from "@/assets/image/etc/nullImg.png"
import etc6 from "@/assets/image/etc/etc6.png"
import Av5 from "@/assets/image/mainadvertisement/adv5.png"
import UserPoint from "@/components/pages/auth/users/UserPoint";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import LeftNav from "@/components/layout/LeftNav";
import RightNav from "@/components/layout/RightNav";
import UserFooter from "@/components/layout/UserFooter";
import UsersHeader from "@/components/pages/auth/users/UsersHeader";
import UsersCategory from "@/components/pages/auth/users/UsersCategory";
// ssg 렌더링 방식 적용 필요


export default function Page() {
    return (
        <>
            <UsersHeader />

            {/* <PopUp /> */}

            <div className="pb-[40px] tracking-[-0.07rem]">
                <div className="pl-[18px] pt-[25px]">
                    <h2 className="text-[23px] font-medium">홍길동 님</h2>
                </div>

                <div className="pl-[18px] pt-[15px]">
                    <h2 className="text-[18px] font-extrabold">SSG에서 즐거운 쇼핑 되세요!</h2>
                </div>

                <UserPoint />

                <div style={{ paddingLeft: '18px', paddingRight: '18px', width: '100%' }}>
                    <Image src={Av5} alt='' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>

            <div className="h-[40px] rounded-t-3xl shadow-[0px_17px_15px_15px_rgba(0,0,0,0.2)]"></div>

            <UsersCategory/>

            <UserFooter />
            <LeftNav />
            <RightNav />
            <Nav />
        </>
    );
}