'use client'

import CartTotal from "./cartTotal";
import { useEffect, useState } from "react";
import CartListItem from "./CartListItem";
import { CartDataType } from "@/types/cartDataType";
import CartItem from "./CartItem";
import ShippingCharge from "./ShippingCharge";

export default function OrderProductInfo({ CartData }: { CartData: CartDataType[] }) {

    let maxValue = CartData.length;
    const [cartListByBrand, setCartListByBrand] = useState<any>();
    let orderList: any = [];
    const [value, setValue] = useState(maxValue);
    const priceList: any[] = [];
    const [checkItems, setCheckItems] = useState<Array<number>>([]);
    const [total, setTotal] = useState(0);
    const maxOrderList: any = [];
    const maxPriceList: any = [];

    useEffect(() => {
        const cartListByBrand = CartData.reduce((acc, cur) => {
            const brandId = cur.brandId;
            if (!acc[brandId]) acc[brandId] = [];
            acc[brandId].push(cur);
            return acc;
        }, {} as Record<number, CartDataType[]>);
        //console.log(cartListByBrand);
        setCartListByBrand(cartListByBrand);
    }, [CartData]);

    CartData.map((data: any) => {
        orderList.push({
            cartId: data.cartId,
            optionId: data.productOptionId,
            optionName: ''
        });
    })

    // let delivery: any = [];
    // let brandTotal: any = [];
    // let discountTotal: any = [];
    // let originalTotal: any = [];


    // -------------------- 체크 박스 ----------------------

    // 체크된 아이템을 담을 배열

    // 체크박스 단일 선택
    const handleSingleCheck = (checked: boolean, cartId: number) => {
        // if (orderList.length == CartData.length) {
        //     maxOrderList.push(orderList)
        //     console.log("maxOrderList ", maxOrderList);
        //     const newList = [...orderList]
        //     newList.splice(0);
        //     setOrderList(newList)

        //     maxPriceList.push(priceList)
        //     console.log("maxPriceList ", maxPriceList);
        //     priceList.splice(0);
        // }
 

        if (checked) {
            console.log("CartDatalength ", CartData.length);
            console.log("orderListlength ", orderList.length);
            
            
            if(orderList.length == CartData.length) {
                orderList.splice(0)
                console.log("dfdOrderList ", orderList);
            }
            const idx = CartData.findIndex((e: any) => e.cartId === cartId);
            orderList.push(CartData[idx]);
            console.log("orderList ", orderList);

            // const idx2 = priceList.findIndex((e: any) => e.cartId === cartId);
            // const newList2 = [priceList[idx2]];
            // priceList.push(newList2[0]);
            // console.log("priceList ", priceList);

            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, cartId]);
            //console.log(checkItems)
        } else {
            const idx = orderList.findIndex((e: any) => e.cartId === cartId);
            orderList.splice(idx, 1);
            console.log("orderList ", orderList);

            // const idx2 = priceList.findIndex((e: any) => e.cartId === cartId);
            // const newList2 = [...priceList]
            // newList2.splice(idx2, 1);
            //console.log("priceList ", priceList);

            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== cartId));
            //console.log(checkItems)
        }

        // let sum = 0;
        // priceList.map((e: any) => sum += e.salePrice)
        // useEffect(() => {
        //     setTotal(sum)
        // })
    };

    // 체크박스 전체 선택
    const handleAllCheck = (checked: boolean) => {
        orderList.splice(0)
        console.log("OrderList ", orderList);
        orderList = maxOrderList
        //setOrderList(maxOrderList)
        console.log("maxOrderList ", maxOrderList);
        console.log("OrderList ", orderList);

        // priceList.splice(0);
        // priceList.push(maxPriceList);

        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray: any = [];

            CartData.map((arr: any) => {
                idArray.push(arr.cartId)
            })

            //data.forEach((el: any) => idArray.push(el.id));
            setCheckItems(idArray);
            //console.log(checkItems)
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
            //console.log(checkItems)
        }

        // let sum = 0;
        // priceList.map((e: any) => sum += e.salePrice)
        // useEffect(() => {
        //     setTotal(sum)
        // })
    }

    useEffect(() => {
        if (checkItems.length == 0) setValue(maxValue);
        else setValue(checkItems.length)
    }, [checkItems])

    //console.log("test" + value);
    console.log("checkItems " + checkItems)
    console.log("checkItemslength " + checkItems.length)

    console.log("total ", total);
    

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
            <div>
                <div className="flex py-[10px] px-[16px] text-[12px] text-[#666666] leading-[12px] tracking-[-0.05rem]">
                    <div>
                        <span>
                            <input type='checkbox' name='select-all'
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                                checked={checkItems.length === maxValue ? true : false}
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
            }

            {/* <CartTotal data={data} finalOriginal={finalOriginal} finalDiscount={finalDiscount} finalDelivery={finalDelivery} value={value} /> */}


        </div>

    )
}