import Footer from "@/components/layout/Footer";
import Image from "next/image";
import BackBtn from "../../../search/_components/BackBtn";
import nullImg from "@/assets/image/etc/nullImg.png";
import UserInfo from "@/app/(commonAccess)/(join)/join/[id]/_components/userInfo";


export default function Page(props: any) {

    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3" style={{borderBottom:'1px solid #d3d3d3'}}>
                <BackBtn/>
                {props.params.id ==='integrated' && (
                    <h2 style={{fontWeight:'bold'}}>신세계 통합회원 가입</h2>
                )}
                {props.params.id ==='easy' && (
                    <h2 style={{fontWeight:'bold'}}>간편회원가입</h2>
                )}

                <div className="flex items-center justify-end">
                <Image src={nullImg} alt=''></Image>
                </div>
            </div>

            <UserInfo name={props.params.id}/>

            <Footer />
        </>
    );
}