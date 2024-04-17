import OrderInfo from "../../../components/pages/order/order-complete/orderInfo";
import Benefit from "../../../components/pages/order/order-complete/benefit";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function getOrder(orderId:number, accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/order-result?orderId=${orderId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    })
    if (!res.ok) {
        // alert("서버에 문제가 생겼습니다. 잠시 후 다시 시도해주세요")
        throw new Error('서버 오류');
    }
    return res.json();
}

async function getUser(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    })
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function Page(
    { searchParams } : { searchParams: { [key: string]: string | string[] | undefined } }
) {
    const session = await getServerSession(options)
    const orderId = searchParams.orderId
        ? Number(searchParams.orderId)
        : 0;

    // console.log("orderId", orderId);
    
    const accessToken = session?.user.data.accessToken

    const OrderData = await getOrder(orderId, accessToken);
    const order = OrderData.data;
    // console.log("order", order);

    const UserData = await getUser(accessToken);
    const user = UserData.data;
    // console.log("user", user);

    return (
        <main>
            <div>
                <div className="pt-[40px] px-[16px] pb-[24px] border-b-[10px] border-[#f5f5f5]">
                    <p className="text-[22px] tracking-[-0.1rem] text-center"><strong className="">주문이 완료되었습니다.</strong></p>
                </div>

                {/* 주문자 정보, 주문 정보 */}
                <OrderInfo order={order} user={user}/>

                {/* 혜택안내 */}
                <Benefit total={order.totalPrice}/>

            </div>
        </main>
    )
}