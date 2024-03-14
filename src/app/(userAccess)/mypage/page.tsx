import BackBtn from "@/app/(commonAccess)/search/_components/BackBtn";
import PopUp from "./_components/PopUp";
import Image from "next/image";
import nullImg from "@/assets/image/etc/nullImg.png"
import etc6 from "@/assets/image/etc/etc6.png"
import Av5 from "@/assets/image/mainadvertisement/adv5.png"
import UserPoint from "./_serverComponents/UserPoint";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import LeftNav from "@/components/layout/LeftNav";
import RightNav from "@/components/layout/RightNav";
// ssg 렌더링 방식 적용 필요


export default function Page() {
    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3" style={{borderBottom:'1px solid #d3d3d3'}}>
                <BackBtn/>
                <h2>MY SSG</h2>
                <div className="flex items-center justify-end">
                <Image src={nullImg} alt=''></Image>
                </div>
            </div>

            <PopUp/>
            <div style={{paddingLeft : '18px', paddingTop:'25px'}}>
                <h2 style={{fontSize:'23px'}}>조윤찬 님</h2>
            </div>

            <div style={{paddingLeft : '18px', paddingTop:'15px'}}>
                <h2 style={{fontSize:'18px', fontWeight:'bold'}}>SSG에서 즐거운 쇼핑 되세요!</h2>
            </div>

            <UserPoint/>
            <div style={{paddingLeft:'18px', paddingRight:'18px', width:'100%'}}>
                <Image src={Av5} alt='' style={{width:'100%', height:'auto', borderRadius:'10px'}}/>
            </div>

            <div style={{paddingTop:'30px', paddingBottom:'30px'}}>
                <Image src={etc6} alt=""></Image>
            </div>

            <Footer/> 
            <LeftNav/>
            <RightNav/>
            <Nav/>
        </>
    );
}