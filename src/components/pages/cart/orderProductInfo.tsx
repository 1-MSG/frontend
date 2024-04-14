'use client'

import CartTotal from "./cartTotal";
import { useEffect, useState } from "react";
import { CartDataType } from "@/types/cartDataType";
import CartItem from "./CartItem";
import ShippingCharge from "./ShippingCharge";
import { CommonDataResType } from "@/types/commonResType";
import { useSession } from 'next-auth/react'
import useSWR from "swr";


export default function OrderProductInfo({ CartData }: { CartData: CartDataType[] }) {

    let maxValue = CartData.length;
    // const [cartListByBrand, setCartListByBrand] = useState<any>();
    const [value, setValue] = useState(maxValue);
    const [checkItems, setCheckItems] = useState<Array<number>>([]);
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]) // 장바구니에서 주문할 상품 리스트
    const [priceList, setPriceList] = useState([]) // 장바구니에서 주문할 상품 가격 리스트

    let delivery: any = [];
    let brandTotal: any = [];
    let discountTotal: any = [];
    let originalTotal: any = [];

    // useEffect(() => {
    //     if (checkItems.length == 0) setValue(maxValue);
    //     else setValue(checkItems.length)
    // }, [checkItems])



    // let sum = 0;
    // priceList.map((e: any) => sum += e.salePrice)
    // useEffect(() => {
    //     setTotal(sum)
    // }, [priceList])


    // useEffect(() => {
    //     const cartListByBrand = CartData.reduce((acc, cur) => {
    //         const brandId = cur.brandId;
    //         if (!acc[brandId]) acc[brandId] = [];
    //         acc[brandId].push(cur);
    //         return acc;
    //     }, {} as Record<number, CartDataType[]>);
    //     //console.log(cartListByBrand);
    //     setCartListByBrand(cartListByBrand);
    // }, [CartData]);


    // -------------------- 체크 박스 ----------------------

    // 체크된 아이템을 담을 배열

    // 체크박스 단일 선택
    // const handleSingleCheck = (checked: boolean, cartId: number) => {
    //     if (checked) {
    //         // 단일 선택 시 체크된 아이템을 배열에 추가
    //         setCheckItems(prev => [...prev, cartId]);
    //         //console.log(checkItems)
    //     } else {
    //         // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
    //         setCheckItems(checkItems.filter((el) => el !== cartId));
    //         //console.log(checkItems)
    //     }
    // };

    // // 체크박스 전체 선택
    // const handleAllCheck = (checked: boolean) => {
    //     if (checked) {
    //         // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
    //         const idArray: any = [];
    //         CartData.map((arr: any) => {
    //             idArray.push(arr.cartId)
    //         })
    //         //data.forEach((el: any) => idArray.push(el.id));
    //         setCheckItems(idArray);
    //         //console.log(checkItems)
    //     }
    //     else {
    //         // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
    //         setCheckItems([]);
    //         //console.log(checkItems)
    //     }
    // }


    //console.log("test" + value);
    // console.log("checkItems " + checkItems)
    // console.log("checkItemslength " + checkItems.length)

    // console.log("total ", total);

    // const ReduceCart = orderList.reduce((acc: any, cur: any) => {
    //     if (!acc.find((item: any) => item.productId === cur.productId)) {
    //         acc.push(cur);
    //     }
    //     return acc;
    // }, []);

    // console.log("ReduceCart", ReduceCart);

    
    const ReduceOrder = orderList.reduce((acc: any, cur: any) => {
        if (!acc.find((item: any) => item.cartId === cur.cartId)) {
            acc.push(cur);
        }
        return acc;
    }, []);

    const ReducePrice = priceList.reduce((acc: any, cur: any) => {
        if (!acc.find((item: any) => item.cartId === cur.cartId)) {
            acc.push(cur);
        }
        return acc;
    }, []);

    console.log("ReduceOrder", ReduceOrder);
    console.log("ReducePrice", ReducePrice);

    return (

        <div>
            <div className="border-[5px] border-[#f4f4f4]"></div>
            <div>
                <div className="flex py-[10px] px-[16px] text-[12px] text-[#666666] leading-[12px] tracking-[-0.05rem]">
                    <div>
                        <span>
                            <input type='checkbox' name='select-all'
                            // onChange={(e) => handleAllCheck(e.target.checked)}
                            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                            // checked={checkItems.length === maxValue ? true : false}
                            />
                        </span>
                        <span className="pl-[3px] pr-[5px]">전체</span>
                        <span className="pr-[5px]">품절삭제</span>
                        <span>선택상품만 보기</span>
                    </div>
                    <div>
                        <span>배송방법변경</span>
                    </div>
                </div>
            </div>
            {
                CartData.map((item: CartDataType) => (
                    <CartItem
                        key={item.cartId}
                        item={item}
                        orderList={orderList}
                        priceList={priceList}
                        setTotal={setTotal}
                    />
                ))
            }
            {/* {
                cartListByBrand && Object.keys(cartListByBrand).map((brandId, index) => {
                    const brand = cartListByBrand[brandId][0].brandId;
                    const list = cartListByBrand[brandId];
                    return (
                        <>
                            <CartListItem
                                key={index}
                                list={list}
                                orderList={orderList}
                                priceList={priceList}
                                handleSingleCheck={handleSingleCheck}
                                checkItems={checkItems}
                                setTotal={setTotal}
                                maxOrderList={maxOrderList}
                            />
                            <ShippingCharge list={list} brand={brand} />
                        </>
                    )
                })
            } */}

            <CartTotal ReduceOrder={ReduceOrder} ReducePrice={ReducePrice} value={value} />


        </div>

    )
}