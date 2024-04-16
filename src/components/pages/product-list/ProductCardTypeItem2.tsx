'use client'
import Link from "next/link"
import Image from "next/image"
import CartIcon from "@/images/svgs/CartIcon";
import GrayStar from "@/images/svgs/GrayStar";
import { CommonDataResType } from "@/types/commonResType";
import { redirect, useRouter } from 'next/navigation';
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LikeEvent from "@/components/pages/product-list/LikeEvent";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from 'next-auth/react'
import cardimg from "@/assets/image/maincard/card2.png"
import Like from '@/images/svgs/Like';

const fetcher = (args: any) => fetch(args).then(res => res.json())
function useProduct(productId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/product/${productId}`, fetcher)
    // console.log("1111", data);
    // console.log("productID", productId);
    
    
    return {
        data: data,
        isError: error
    }
}

const ImageFetcher = (args: any) => fetch(args).then(res => res.json())
function useImage(productId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/product/${productId}/image`, ImageFetcher)
    // console.log("2222", data);
    return {
        ImageValue: data,
        ImageError: error
    }
}


export default function ProductCardTypeItem2({ productId }: { productId: number }) {
    const session = useSession();
    const { data, isError } = useProduct(productId)
    const {ImageValue, ImageError} = useImage(productId)

    if (isError || ImageError) return <div>Failed to load</div>
    if (!data || !ImageValue) return <div>Loading...</div>

    const ProductData: CommonDataResType = data;
    const product = ProductData.data;
    // console.log(product);

    const imageData: CommonDataResType = ImageValue;
    const image = imageData.data;
    // console.log("image ", image);

    const accessToken = session.data?.user?.data?.accessToken;


    function Rate(price: number, rate: number, salePrice: number) {
        //let n = (100 - rate) / 100;
        return (
            <div>
                <p className='line-through text-[#969696] text-[12px]'>{Number(price).toLocaleString()}원</p>
                <div className='inline-block items-center mt-[2px] text-[15px] font-bold'>
                    <p className='mr-[4px] float-left text-[#ff5452]'>{rate}%</p>
                    <p className='float-left'>{Number(salePrice).toLocaleString()}원</p>
                </div>
            </div>
        )
    }

    function NotRate(price: number) {
        return (
            <div className='inline-block items-center'>
                <p className='float-left text-[16px] font-bold'>{Number(price).toLocaleString()}원</p>
            </div>
        )
    }


    return (
        <div className='pt-[10px] pb-[20px]'>
            <Link href={`/product-detail?productId=${productId}`}>
                <Image src={image?.productImageUrl}
                    alt=""
                    width={500}
                    height={500}
                    className='' />
            </Link>

            <div className='flex mt-[3px] py-[2px]'>
                <div></div>
                <div className='flex'>
                    <LikeEvent productId={productId} accessToken={accessToken}/>
                    {/* <Like w={20} h={20} /> */}
                    <button className='mr-[3px]'><CartIcon w={26} h={26} /></button>
                </div>
            </div>

            <Link href={`/product-detail?productId=${productId}`} className='mt-[10px] pr-[20px] leading-[16px]'>
                <p className='text-[13px]'>
                    <span className='font-bold'>{product.productBrand} </span>
                    {product.productName}</p>
                <div className='mt-[4px]'>
                    {product.discountRate == 0 ? NotRate(product.productPrice) : Rate(product.productPrice, product.discountRate, product.discountPrice)}
                </div>
                <div className=' text-[#777777] text-[12px] items-center mt-[4px]'>
                    <div className='float-left pt-[3px]'><GrayStar /></div>
                    <p className='float-left ml-[4px]'>{product.productStar}</p>
                    <p className='float-left ml-[4px] text-[#ededed] text-[10px]' >|</p>
                    <p className='float-left ml-[4px]'>{Number(product.reviewCount).toLocaleString()}건</p>
                </div>
            </Link>
        </div>
    )
}

