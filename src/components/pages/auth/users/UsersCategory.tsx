import Image from "next/image";
import UsersMenu from "./UsersMenu";
import UsersOrderInquiry from "./UsersOrderInquiry";
import UsersSubMenu from "./UsersSubMenu";

export default function UsersCategory() {
    return (
        <>
            <div className="px-[16px] bg-white">
                <UsersOrderInquiry />

                <UsersMenu />

                <UsersSubMenu />
            </div>

            <Image src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/banner_omni_agree.jpg&w=750&h=0" alt="" width={720} height={164} />
        </>
    )
}