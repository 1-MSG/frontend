'use client'
import { CartDataType } from "@/types/cartDataType";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { CommonDataResType } from "@/types/commonResType";
import DeleteCart from "@/images/svgs/DeleteCart";
import ProductCount from "./productCount";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
    item, 
    orderList, 
    priceList, 
    setTotal,
    setOrderList
}: {
    item:any, 
    orderList: any, 
    priceList: any, 
    setTotal: any,
    setOrderList: any
}) {

    const session = useSession();
    const router = useRouter();
    const userId = session.data?.user?.data?.userId;
    const accessToken = session.data?.user?.data?.accessToken;

    const { data, isError } = useProduct(item.productId)
    const {ImageValue, ImageError} = useImage(item.productId)
    const {OptionValue, OptionError} = useOption(item.productOptionId)

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
    //console.log("option", option);
    
    let optionText = "";
    option.map((item:any) => {
        optionText += item.optionsName + " ";
    });

    orderList.push({
        cartId: item.cartId,
        optionId: item.productOptionId,
        optionName: optionText
    })

    priceList.push({
        cartId: item.cartId,
        productId: item.productId,
        productPrice: product.productPrice,
        discountPrice: product.discountPrice,
        discountRate: product.discountRate,
        salePrice: 0,
        count: item.cartProductQuantity,
    });

    // console.log("orderList", orderList);
    
    // console.log("priceList", priceList);

    async function handleClick() {
        
        const res = await fetch(`${process.env.API_BASE_URL}/cart/${item.cartId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        })
        const data: CommonDataResType = await res.json();
        if (data.isSuccess === false) {
            console.error('특가 상품 리스트 조회 실패');
        }
        else if (data.isSuccess == true) {
            alert('삭제되었습니다.')
            router.refresh()
        }
    }
    

    let sum = 0;
    function GetPrice(cartId: number, salePrice: number, count: number) {
        const value = {
            cartId: cartId,
            productId: item.productId,
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
        useEffect(() => {
            setTotal(sum)
        })
    }

    const alertNoti = () => {
        alert('준비 중인 기능입니다!')
    }


    return(
        <div className="grid grid-cols-4 px-[16px] py-[20px] border-b border-b-[#f5f5f5] last:border-b-none">
            <div className="relative">
                <Image src={image.productImageUrl} alt={image.productImageDescription} width={200} height={200} />
                {/* <input type='checkbox'
                    // onChange={(e) => handleSingleCheck(e.target.checked, item.cartId)}
                    //체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                    // checked={checkItems.includes(item.cartId) ? true : false}
                    className="absolute top-0" /> */}
            </div>

            <div className="col-start-2 col-end-5 ml-[10px] mb-[6px]">
                <div className="flex text-[13px] tracking-[-0.05rem]">
                    <Link href={`/product-detail?productId=${item.productId}`}>
                        <strong>{product.brandName} </strong>
                        <span>{product.productName}</span>
                    </Link>
                    <div onClick={handleClick} className="pl-[5px] h-[28px] w-[28px]">
                        <div>
                            <DeleteCart />
                        </div>
                    </div>
                </div>
                
                <div className="basis-full text-[12px] text-[#666666] tracking-[-0.05rem]">{optionText}</div>

                {/* 수량 변경 */}
                <ProductCount 
                    quantity={item.cartProductQuantity} 
                    productPrice={product.productPrice} 
                    discountPrice={product.discountPrice}
                    GetPrice={GetPrice}
                    cartId={item.cartId}
                />


                {/* 옵션변경 버튼, 바로구매 버튼 */}
                <div className="flex mt-[8px] w-full h-[36px] text-[13px] text-center tracking-[-0.1rem]">
                    <div onClick={() => alertNoti()} className="w-1/2 border border-[#e5e5e5] content-center">옵션변경</div>
                    <div onClick={() => alertNoti()} className="w-1/2 border border-[#e5e5e5] font-bold content-center">바로구매</div>
                </div>
            </div>
        </div>
    );
}