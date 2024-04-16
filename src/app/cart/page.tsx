import EmptyCartUser from "../../components/pages/cart/emptyCartUser";
import NotLogin from "../../components/pages/cart/notLogin";
import NotUser from "../../components/pages/cart/notUser";
import cartData from "@/dummydata/newCart.json";
import OrderProductInfo from "@/components/pages/cart/orderProductInfo";
import { CartDataType } from "@/types/cartDataType";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import CartUserAddress from "@/components/pages/cart/CartUserAddress";

async function getCartList(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/cart`, {
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


export default async function Page() {

    const session = await getServerSession(options)
    const userId = session?.user.data.userId
    const accessToken = session?.user.data.accessToken

    // console.log("accessToken ", accessToken);

    if (accessToken == undefined) {
        redirect("/login?callbackUrl=cart");
    }

    const CartDataList = await getCartList(accessToken);
    const CartData = CartDataList.data;
    // console.log("CartData", CartData);

    return (
        <main>
            <div className="pb-[100px]">

                {/* 비회원일 때 장바구니 물건이 없으면 */}
                {/* <NotLogin />  */}

                {/* 비회원일 때 장바구니 물건이 있으면*/}
                {/* <NotUser/> */}

                {CartData.length === 0 ?
                    <EmptyCartUser />
                    :
                    <>
                        <CartUserAddress userId={userId} accessToken={accessToken} />
                        <OrderProductInfo CartData={CartData} />
                    </>
                }


            </div>
        </main>
    )
}