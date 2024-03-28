'use client'

import Link from "next/link"
import DeleteCart from "@/images/svgs/DeleteCart"
import ProductCount from "./productCount"
import Image from "next/image";
import CartTotal from "./cartTotal";
import { useState } from "react";

export default function OrderProductInfo(props: any) {

    const data = props.data;

    let delivery: any = [];
    let brandTotal: any = [];
    let discountTotal: any = [];
    let originalTotal: any = [];
    let value = 0;


    // -------------------- 체크 박스 ----------------------

    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState<Array<number>>([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked: boolean, id: number) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
            console.log(checkItems)
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
            console.log(checkItems)
        }
    };

    console.log("checkItems " + checkItems)

    // 체크박스 전체 선택
    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray: any = [];

            data.brand_list.map((arr1:any, i:number) => {
                arr1.product_list.map((arr2:any, j:number) => {
                    idArray.push(arr2.product_id)
                })
            })

            //data.forEach((el: any) => idArray.push(el.id));
            setCheckItems(idArray);
            console.log(checkItems)
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
            console.log(checkItems)
        }
    }



    // -------------- 최종 금액 계산 --------------
    data.brand_list.map((arr1: any, i: number) => {
        let sum = 0;
        let discount = 0;
        let original = 0;

        arr1.product_list.map((arr2: any, j: number) => {
            value++;
            sum += arr2.cart_product_quantity * (arr2.product_price * ((100 - arr2.product_rate) / 100))
            discount += arr2.cart_product_quantity * (arr2.product_price * (arr2.product_rate) / 100)
            original += arr2.cart_product_quantity * arr2.product_price
        })

        if (sum >= arr1.min_delivery_fee) delivery.push(0)
        else delivery.push(arr1.product_delivery_fee)

        brandTotal.push(sum);
        discountTotal.push(discount);
        originalTotal.push(original);
    })

    let finalOriginal = 0;
    originalTotal.map((e: number) => finalOriginal += e)

    let finalDiscount = 0;
    discountTotal.map((e: number) => finalDiscount += e)

    let finalDelivery = 0;
    delivery.map((e: number) => finalDelivery += e)


    
    // ------------ 숫자 쉼표 -------------
    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }



    return (

        <div>
            <div className="border-[5px] border-[#f4f4f4]"></div>
            <div>
                <div className="flex py-[10px] px-[16px] text-[12px] text-[#666666] leading-[12px] tracking-[-0.05rem]">
                    <div>
                        <span>
                            <input type='checkbox' name='select-all'
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                checked={checkItems.length === value ? true : false} />
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

            <div>
                {data.brand_list.map((brand: any, index: number) => {
                    return (
                        <div key={index} className="border-b-[3px] border-b-[#f5f5f5]">
                            {brand.product_list.map((list: any, index2: number) => {
                                return (
                                    <div key={index2} className="grid grid-cols-4 px-[16px] py-[20px] border-b border-b-[#f5f5f5] last:border-b-none">
                                        <div className="relative">
                                            <Image src={list.product_img_url} alt="" width={87} height={87} />
                                            <input type='checkbox'
                                                onChange={(e) => handleSingleCheck(e.target.checked, list.product_id)}
                                                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                                checked={checkItems.includes(list.product_id) ? true : false}
                                                className="absolute top-0" />
                                        </div>

                                        <div className="col-start-2 col-end-5 ml-[10px] mb-[6px]">
                                            <div className="flex text-[13px] tracking-[-0.05rem]">
                                                <Link href="">
                                                    <strong>{brand.brand_name} </strong>
                                                    <span>{list.product_name}</span>
                                                </Link>
                                                <div className="pl-[5px] h-[28px] w-[28px]">
                                                    <button><DeleteCart /></button>
                                                </div>
                                            </div>
                                            <div className="basis-full text-[12px] tracking-[-0.05rem]">{list.product_option_detail}</div>

                                            {/* 수량 변경 */}
                                            <ProductCount quantity={list.cart_product_quantity} product_price={list.product_price} product_rate={list.product_rate} />


                                            {/* 옵션변경 버튼, 바로구매 버튼 */}
                                            <div className="flex mt-[8px] w-full h-[36px] text-[13px] text-center tracking-[-0.1rem]">
                                                <button className="w-1/2 border border-[#e5e5e5]">옵션변경</button>
                                                <button className="w-1/2 border border-[#e5e5e5] font-bold">바로구매</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="bg-[#f4f4f4] mx-[16px] mb-[20px] p-[12px] text-[13px] text-center tracking-[-0.05rem]">
                                <div>
                                    <p>{priceToString(brandTotal[index])}원 + 배송비 {priceToString(delivery[index])}원 = <strong>{priceToString(brandTotal[index] + delivery[index])}원</strong></p>
                                </div>
                                <div className="bg-white mt-[10px] pt-[8px] px-[10px] pb-[7px]">
                                    배송비 절약상품 보러가기
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <CartTotal data={data} finalOriginal={finalOriginal} finalDiscount={finalDiscount} finalDelivery={finalDelivery} value={value} />
        </div>

    )
}