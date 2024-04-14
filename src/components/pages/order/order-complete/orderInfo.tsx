'use client'
import BottomBtn from "@/images/svgs/ModalBackBtn";
import { useState } from "react";

export default function OrderInfo({order, user}: {order: any, user: any}) {

    const [visible, setVisible] = useState(false)

    const changeVisible = () => {
        setVisible(!visible)
    }

    let delivery = 0;
    order.orderPrices.map((e: any) => delivery += e.deliveryFee)

    let productPrice = 0;
    order.orderPrices.map((e: any) => productPrice += e.productOriginPrice)

    let discountPrice = 0;
    order.orderPrices.map((e: any) => discountPrice += e.productSalePrice)


    return (
        <div>
            <div className="pt-[20px] px-[16px] pb-[30px] tracking-[-0.1rem] border-b-[10px] border-[#f5f5f5]">
                <p className="text-[17px] font-extrabold">받는 분 정보</p>
                <div className="mt-[10px] text-[13px]">
                    <span className="font-semibold">{user.username} / {user.phoneNumber}</span>
                    <p className="mt-[4px] font-medium">{user.address}</p>
                </div>
            </div>

            <div className="pt-[20px] px-[16px] pb-[30px] tracking-[-0.05rem] border-b-[10px] border-[#f5f5f5]">
                <div className="">
                    <div className="flex">
                        <h3 className="text-[17px] font-bold">결제금액 : <span className="text-[19px]">{(order.totalPrice).toLocaleString()}</span>원</h3>
                        <div className="w-[20px] h-[20px] pt-[3px]" onClick={changeVisible}><BottomBtn /></div>
                    </div>
                </div>

                {visible && <div className="mt-[12px] pb-[16px] border-b border-[#f5f5f5]">
                    <div className="text-[14px]">
                        <dl className="flex">
                            <dt className="text-[#666666]">주문금액</dt>
                            <dd>
                                <span>{productPrice.toLocaleString()}</span>원
                            </dd>
                        </dl>
                        <dl className="flex mt-[8px]">
                            <dt className="text-[#666666]">상품할인</dt>
                            <dd>
                                -<span>{discountPrice.toLocaleString()}</span>원
                            </dd>
                        </dl>
                        <dl className="flex mt-[8px]">
                            <dt className="text-[#666666]">배송비</dt>
                            <dd>
                                +<span>{delivery.toLocaleString()}</span>원
                            </dd>
                        </dl>
                    </div>
                </div>}

                <div className="pt-[16px]">
                    <dl className="flex text-[14px] font-bold">
                        <dt>주문번호</dt>
                        <dd>{order.orderId}</dd>
                    </dl>
                    <dl className="flex mt-[8px] text-[14px]">
                        <dt className="text-[#666666]">주문날짜</dt>
                        <dd>{order.createdAt}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}