import EmptyCartUser from "../../components/pages/cart/emptyCartUser";
import NotLogin from "../../components/pages/cart/notLogin";
import NotUser from "../../components/pages/cart/notUser";
// import dataList from "@/app/(commonAccess)/dummydata/cart.json"
import cartData from "@/dummydata/newCart.json";
import OrderProductInfo from "@/components/pages/cart/orderProductInfo";
import { CartDataType } from "@/types/cartDataType";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function getCartList(accessToken: string) {

    // const login = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${accessToken}`,
    //     }
    // })

    // if (!login.ok) {
    //     redirect("/login");
    // }

    const res = await fetch(`${process.env.API_BASE_URL}/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    })
    // if (!res.ok) {
    //     throw new Error('서버 오류');
    // }
    return res.json();

}

// async function fetchData(): Promise<CartDataType[]> {
//     // fetch data
//     //  if(session) {
//     //     세션확인후 유저의 장바구니 불러오기
//     //     const data = await fetch(`${process.env.API_BASE_URL}/auth/login`,{
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         //  헤더 토큰 값 주입
//     //         }
//     //       })
//     // }



//     const res = cartData;
//     return res.cart_product_list;
// }

export default async function Page() {

    const session = await getServerSession(options)
    const accessToken = session?.user.data.accessToken

    console.log("accessToken ", accessToken);

    if (accessToken == undefined) {
        redirect("/login?callbackUrl=cart");
    }

    const CartDataList = await getCartList(accessToken);
    const CartData = CartDataList.data;
    console.log("CartData", CartData);

    // if(accessToken == undefined || accessToken == null) {

    // }

    //const data = await fetchData()

    return (
        <main>
            <div className="pb-[100px]">

                {/* 비회원일 때 장바구니 물건이 없으면 */}
                {/* <NotLogin />  */}

                {/* 비회원일 때 장바구니 물건이 있으면*/}
                {/* <NotUser/> */}

                {/* 회원일 때 장바구니 물건이 없으면*/}
                {/* <EmptyCartUser/>*/}


                {/* 주문상품유닛 */}
                <OrderProductInfo CartData={CartData} />
            </div>
        </main>
    )
}