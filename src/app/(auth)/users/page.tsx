import BackBtn from '@/components/pages/search/BackBtn';
import PopUp from '@/components/pages/auth/users/PopUp';
import Image from 'next/image';
import nullImg from '@/assets/image/etc/nullImg.png';
import etc6 from '@/assets/image/etc/etc6.png';
import Av5 from '@/assets/image/mainadvertisement/adv5.png';
import UserPoint from '@/components/pages/auth/users/UserPoint';
import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';
import LeftNav from '@/components/layout/LeftNav';
import RightNav from '@/components/layout/RightNav';
import UserFooter from '@/components/layout/UserFooter';
import UsersHeader from '@/components/pages/auth/users/UsersHeader';
import UsersCategory from '@/components/pages/auth/users/UsersCategory';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

async function getUser(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });
    // if (!res.ok) {
    //     throw new Error('서버 오류');
    // }
    return res.json();
}

async function getOrderCount(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/orders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });
    // if (!res.ok) {
    //     throw new Error('서버 오류');
    // }
    return res.json();
}

export default async function Page() {
    const session = await getServerSession(options);
    const accessToken = session?.user.data.accessToken;

    console.log('accessToken ', accessToken);

    if (accessToken == undefined) {
        redirect("/login?callbackUrl=users");
    }

    const UserData = await getUser(accessToken);
    const user = UserData.data;
    console.log('user', user);

    const OrdeCountrData = await getOrderCount(accessToken);
    const order = OrdeCountrData.data.length;
    console.log('order', order);

    return (
        <>
            <UsersHeader />

            {/* <PopUp /> */}

            <div className="pb-[40px] tracking-[-0.07rem]">
                <div className="pl-[18px] pt-[25px]">
                    <h2 className="text-[23px] font-medium">
                        {user.userName} 님
                    </h2>
                </div>

                <div className="pl-[18px] pt-[15px]">
                    <h2 className="text-[18px] font-extrabold">
                        SSG에서 즐거운 쇼핑 되세요!
                    </h2>
                </div>

                <UserPoint />

                <div
                    style={{
                        paddingLeft: '18px',
                        paddingRight: '18px',
                        width: '100%',
                    }}
                >
                    <Image
                        src={Av5}
                        alt=""
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                        }}
                    />
                </div>
            </div>

            <div className="h-[40px] rounded-t-3xl shadow-[0px_17px_15px_15px_rgba(0,0,0,0.2)]"></div>

            <UsersCategory order={order} />

            <UserFooter />
            <LeftNav />
            <RightNav />
            <Nav />
        </>
    );
}
