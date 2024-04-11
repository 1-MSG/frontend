import { CartDataType } from "@/types/cartDataType";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { CommonDataResType } from "@/types/commonResType";
import DeleteCart from "@/images/svgs/DeleteCart";
import ProductCount from "./productCount";
import { Dispatch, SetStateAction, useEffect } from "react";

const fetcher = (args: any) => fetch(args).then(res => res.json())
function useProduct(productId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/product/${productId}`, fetcher)

    return {
        data: data,
        isError: error
    }
}

const ImageFetcher = (args: any) => fetch(args).then(res => res.json())
function useImage(productId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/product/${productId}/image`, ImageFetcher)

    return {
        ImageValue: data,
        ImageError: error
    }
}

const OptionFetcher = (args: any) => fetch(args).then(res => res.json())
function useOption(optionId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/option?productOptionId=${optionId}`, OptionFetcher)

    return {
        OptionValue: data,
        OptionError: error
    }
}

export default function CartItem({
    list, orderList, priceList, handleSingleCheck, checkItems, setTotal, maxOrderList
}: {
    list: CartDataType, orderList: any, priceList: any, handleSingleCheck: any, checkItems: any, setTotal: any, maxOrderList: any
}) {

    const { data, isError } = useProduct(list.productId)
    const {ImageValue, ImageError} = useImage(list.productId)
    const {OptionValue, OptionError} = useOption(list.productOptionId)

    if (isError || ImageError || OptionError) return <div>Failed to load</div>
    if (!data || !ImageValue || !OptionValue) return <div>Loading...</div>

    const ProductData: CommonDataResType = data;
    const product = ProductData.data;
    //console.log(product);

    const imageData: CommonDataResType = ImageValue;
    const image = imageData.data;
    //console.log("image ", image);

    const optionData: CommonDataResType = OptionValue;
    const option = [...optionData.data].reverse()
   // console.log("option", option);
    
    let optionText = "";
    option.map((item) => {
        optionText += item.optionsName + " ";
    });

    // orderList.push({
    //     optionId: list.productOptionId,
    //     optionName: optionText
    // });
    const idx = orderList.findIndex((e: any) => e.cartId === list.cartId);
    orderList[idx] = {
        cartId: list.cartId,
        optionId: list.productOptionId,
        optionName: optionText
    }

    maxOrderList.push({
        cartId: list.cartId,
        optionId: list.productOptionId,
        optionName: optionText
    })

    priceList.push({
        cartId: list.cartId,
        productId: list.productId,
        productPrice: product.productPrice,
        discountPrice: product.discountPrice,
        discountRate: product.discountRate,
        salePrice: 0,
        count: list.cartProductQuantity,
    });

    let sum = 0;
    function GetPrice(cartId: number, salePrice: number, count: number) {
        const value = {
            cartId: cartId,
            productId: list.productId,
            productPrice: product.productPrice,
            discountPrice: product.discountPrice,
            discountRate: product.discountRate,
            salePrice: salePrice,
            count: count
        }
        const idx = priceList.findIndex((e: any) => e.cartId === cartId);
        priceList[idx] = value;
        sum = 0;
        priceList.map((e: any) => sum += e.salePrice)
        setTotal(sum)
        // useEffect(() => {
        //     setTotal(sum)
        // })
    }

    return(
        <div className="grid grid-cols-4 px-[16px] py-[20px] border-b border-b-[#f5f5f5] last:border-b-none">
            <div className="relative">
                <Image src={image.productImageUrl} alt={image.productImageDescription} width={87} height={87} />
                <input type='checkbox'
                    onChange={(e) => handleSingleCheck(e.target.checked, list.cartId)}
                    //체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                    checked={checkItems.includes(list.cartId) ? true : false}
                    className="absolute top-0" />
            </div>

            <div className="col-start-2 col-end-5 ml-[10px] mb-[6px]">
                <div className="flex text-[13px] tracking-[-0.05rem]">
                    <Link href="">
                        <strong>{product.brandName} </strong>
                        <span>{product.productName}</span>
                    </Link>
                    <div className="pl-[5px] h-[28px] w-[28px]">
                        <button><DeleteCart /></button>
                    </div>
                </div>
                
                <div className="basis-full text-[12px] text-[#666666] tracking-[-0.05rem]">옵션 : {optionText}</div>

                {/* 수량 변경 */}
                <ProductCount 
                    quantity={list.cartProductQuantity} 
                    productPrice={product.productPrice} 
                    discountPrice={product.discountPrice}
                    GetPrice={GetPrice}
                    cartId={list.cartId}
                />


                {/* 옵션변경 버튼, 바로구매 버튼 */}
                <div className="flex mt-[8px] w-full h-[36px] text-[13px] text-center tracking-[-0.1rem]">
                    <div className="w-1/2 border border-[#e5e5e5] content-center">옵션변경</div>
                    <button className="w-1/2 border border-[#e5e5e5] font-bold">바로구매</button>
                </div>
            </div>
        </div>
    );
}