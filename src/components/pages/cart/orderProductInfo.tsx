'use client'

import CartTotal from "./cartTotal";
import { useEffect, useState } from "react";
import CartListItem from "./CartListItem";
import { CartDataType } from "@/types/cartDataType";
import CartItem from "./CartItem";
import ShippingCharge from "./ShippingCharge";

export default function OrderProductInfo({data}:{data:CartDataType[]}) {

   const [cartListByBrand, setCartListByBrand] = useState<any>();

    useEffect(() => {
        const cartListByBrand = data.reduce((acc, cur) => {
            const brandId = cur.brand_id;
            if (!acc[brandId]) acc[brandId] = [];
            acc[brandId].push(cur);
            return acc;
        }, {} as Record<number, CartDataType[]>);
        console.log(cartListByBrand);
        setCartListByBrand(cartListByBrand);
    }, [data]);


    // let delivery: any = [];
    // let brandTotal: any = [];
    // let discountTotal: any = [];
    // let originalTotal: any = [];
    // let maxValue = 0

    // const [value, setValue] = useState(maxValue);

    // // -------------------- 체크 박스 ----------------------

    // // 체크된 아이템을 담을 배열
    // const [checkItems, setCheckItems] = useState<Array<number>>([]);

    // // 체크박스 단일 선택
    // const handleSingleCheck = (checked: boolean, id: number) => {
    //     if (checked) {
    //         // 단일 선택 시 체크된 아이템을 배열에 추가
    //         setCheckItems(prev => [...prev, id]);
    //         //console.log(checkItems)
    //     } else {
    //         // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
    //         setCheckItems(checkItems.filter((el) => el !== id));
    //         //console.log(checkItems)
    //     }
    // };

    // // 체크박스 전체 선택
    // const handleAllCheck = (checked: boolean) => {
    //     if (checked) {
    //         // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
    //         const idArray: any = [];

    //         data.brand_list.map((arr1: any, i: number) => {
    //             arr1.product_list.map((arr2: any, j: number) => {
    //                 idArray.push(arr2.product_id)
    //             })
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

    // useEffect(() => {
    //     if (checkItems.length == 0) setValue(maxValue);
    //     else setValue(checkItems.length)
    // }, [checkItems])

    // console.log("test" + value);
    // console.log("checkItems " + checkItems)
    // console.log("checkItemslength " + checkItems.length)



    // // -------------- 최종 금액 계산 --------------
    // data.brand_list.map((arr1: any, i: number) => {
    //     let sum = 0;
    //     let discount = 0;
    //     let original = 0;

    //     arr1.product_list.map((arr2: any, j: number) => {
    //         maxValue++;
    //         sum += arr2.cart_product_quantity * (arr2.product_price * ((100 - arr2.product_rate) / 100))
    //         discount += arr2.cart_product_quantity * (arr2.product_price * (arr2.product_rate) / 100)
    //         original += arr2.cart_product_quantity * arr2.product_price
    //     })

    //     if (sum >= arr1.min_delivery_fee) delivery.push(0)
    //     else delivery.push(arr1.product_delivery_fee)

    //     brandTotal.push(sum);
    //     discountTotal.push(discount);
    //     originalTotal.push(original);

    //     // useEffect(() => {
    //     //     if (sum >= arr1.min_delivery_fee) setDelivery([...delivery2, 0])
    //     //     else setDelivery([...delivery2, arr1.product_delivery_fee])
    //     // }, [])
    //     // if(sum >= arr1.min_delivery_fee) setDelivery([...delivery2, 0])
    //     // else setDelivery([...delivery2, arr1.product_delivery_fee])
    // })

    // let finalOriginal = 0;
    // originalTotal.map((e: number) => finalOriginal += e)

    // let finalDiscount = 0;
    // discountTotal.map((e: number) => finalDiscount += e)

    // let finalDelivery = 0;
    // delivery.map((e: number) => finalDelivery += e)
    // delivery2.map((e: number) => finalDelivery += e)



    return (

        <div>
            <div className="border-[5px] border-[#f4f4f4]"></div>
            {/* <div>
                <div className="flex py-[10px] px-[16px] text-[12px] text-[#666666] leading-[12px] tracking-[-0.05rem]">
                    <div>
                        <span>
                            <input type='checkbox' name='select-all'
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                checked={checkItems.length === maxValue ? true : false} />
                        </span>
                        <span className="pl-[3px] pr-[5px]">전체</span>
                        <span className="pr-[5px]">품절삭제</span>
                        <span>선택상품만 보기</span>
                    </div>
                    <div>
                        <span>배송방법변경</span>
                    </div>
                </div>
            </div> */}
            {
                cartListByBrand && Object.keys(cartListByBrand).map((brandId, index) => {
                    const brand = cartListByBrand[brandId][0].brand;
                    const list = cartListByBrand[brandId];
                    return (
                        <>
                        <CartListItem key={index} brand={brand} list={list} />
                        <ShippingCharge />
                        </>
                    )
                })
            }
            
            {/* <CartTotal data={data} finalOriginal={finalOriginal} finalDiscount={finalDiscount} finalDelivery={finalDelivery} value={value} /> */}


        </div>

    )
}