'use client'

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { CommonDataResType } from "@/types/commonResType";


export default function OrderModalBtn({ productId, orderList, priceList, Info }: { productId: number, orderList: any, priceList: any, Info: any }) {

    const router = useRouter();
    const session = useSession();
    const userId = session.data?.user?.data?.userId;
    const accessToken = session.data?.user?.data?.accessToken;
    // console.log("accessToken", accessToken);

    // console.log("orderList", orderList);
    // console.log("priceList", priceList);

    async function createCart() {
        if (orderList.length === 0) {
            alert('상품을 선택해주세요.')
            return;
        }
        if (userId == undefined || userId == null) {
            alert('로그인이 필요합니다.')
            router.push(`/login`)
            return;
        }
        const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        })
        if (!res.ok) {
            throw new Error('서버 오류');
        }
        const data: CommonDataResType = await res.json();
        // console.log("address ", data);

        if (data.data.length === 0) {
            alert('주소를 등록해주세요.')
            router.push(`/address?productId=${productId}`)
        }
        else {
            const CartData = {
                brandId: Info.brandId,
                productId: productId,
            }
            // console.log("CartData ", CartData);
    
            const func = async (optionId: number) => {
                const res = await fetch(`${process.env.API_BASE_URL}/cart/option/${optionId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: JSON.stringify(CartData)
                })
                // console.log(res);
    
                if (!res.ok) {
                    throw new Error('서버 오류');
                }
                else if (res.ok) {
                    // console.log("장바구니 성공");
                }
                return res.json();
            }
    
            orderList.map((item: any) => {
                func(item.optionId)
            })
    
            alert('장바구니에 담겼습니다.')
            redirect(`/product-detail?productId=${productId}`)
        }
        
    }

    async function createOrder() {
        if (orderList.length === 0) {
            alert('상품을 선택해주세요.')
            return;
        }

        if (userId == undefined || userId == null) {
            alert('로그인이 필요합니다.')
            router.push(`/login`)
            return;
        }

        const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        })
        if (!res.ok) {
            throw new Error('서버 오류');
        }
        const data: CommonDataResType = await res.json();
        // console.log("address ", data);

        if (data.data.length === 0) {
            alert('주소를 등록해주세요.')
            router.push(`/address?productId=${productId}`)
        }
        else {
            router.push(`/product-order?orderList=${JSON.stringify(orderList)}&priceList=${JSON.stringify(priceList)}`)
        }
    }

    return (
        <div>
            <ul className='flex w-full bottom-0 h-[52px] text-center leading-[52px] text-[16px] font-medium'>
                <li className='bg-black text-white w-1/2' >
                    <form action={createCart}>
                        <button type="submit">장바구니</button>
                    </form>
                </li>
                <li className='bg-[#ff5452] text-white w-1/2'>
                    <div onClick={createOrder}>
                        바로구매
                    </div>
                </li>
            </ul>
        </div>
    )
}