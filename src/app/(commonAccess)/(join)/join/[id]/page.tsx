import Footer from "@/components/layout/Footer";
import Image from "next/image";
import BackBtn from "../../../search/_components/BackBtn";
import nullImg from "@/assets/image/etc/nullImg.png";
import UserInfo from "@/app/(commonAccess)/(join)/join/[id]/_components/userInfo";
import { auth } from '@/auth';

export default async function Page(props: any) {
    const session = await auth();
    
    console.log("auth하고 받은 전체 정보",session);
    console.log("auth하고 받은 user 정보",session?.user);

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

            <UserInfo name={props.params.id} info={session?.user}/>

            <Footer />
        </>
    );
}