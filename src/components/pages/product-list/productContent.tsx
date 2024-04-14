'use client'

import { CommonDataResType } from '@/types/commonResType';
import { ProductCardDataType, ProductIdListByCategoryType } from '@/types/productDataType';
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon';
import DepartmentIcon from '@/images/svgs/DepartmentIcon';
import { Suspense, useEffect, useState } from 'react';
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useObserver } from "@/components/pages/product-list/useObserver";
import ProductCardTypeItem2 from "@/components/pages/product-list/ProductCardTypeItem2";
import { useRouter } from 'next/navigation';

// async function getProductList(categoryId: number) {
//     const res = await fetch(`${process.env.API_BASE_URL}/category-product?categoryId=${categoryId}`)
//     return res.json();
// }

export interface ProductListByCategoryType {
    productId: number;
}

export interface productListByCategory {
    categoryProducts: ProductListByCategoryType[],
    isLast: boolean,
    pages: number[],
}

export default function ProductConetent({ categoryId }: { categoryId: number }) {

    const bottom = useRef(null);

    if (categoryId === 0) {
        console.log('카테고리 정보가 없습니다.');
    }

    const getList = async ({ pageParam = 0 }: { pageParam: number }) => {
        const res = await fetch(`${process.env.API_BASE_URL}/category-product?categoryId=${categoryId}&page=${pageParam}&size=10&sort=`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        })

        const productList: CommonDataResType = await res.json();
        if (productList.isSuccess === false) {
            return false;
        }
        console.log(productList.data);

        return productList.data
    }

    const {
        data,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
        ...result
    } = useInfiniteQuery({
        queryKey: ['products', categoryId],
        queryFn: getList,
        staleTime: 1000 * 20 * 20,
        gcTime: 300 * 1000,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage || lastPage.length < 5) {
                return undefined;
            }
            return allPages.length + 1;
        },
        initialPageParam: 0,
    })

    const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

    useObserver({
        target: bottom,
        onIntersect,
    });

    // const getProductListData: CommonDataResType = await getProductList(categoryId);
    // console.log('상품데이터', getProductListData.data);

    // const productList: ProductIdListByCategoryType[] = getProductListData.data.categoryProducts;

    return (
        <>
            <div className='pt-[5px]'>
                <div className='my-[10px] pr-[16px] flex'>
                    <div className='flex pl-[16px]'>
                        <div><SsgDeliveryIcon /></div>
                        <div className='ml-[6px]'><DepartmentIcon /></div>
                    </div>
                </div>
            </div>
           
            {data && data.pages?.map((page:any, i) => {
                return (
                    <div key={i}>
                        <div className='grid grid-cols-2 gap-2 mx-[16px]'>
                            <Suspense fallback={
                                <div className='grid grid-cols-2 gap-2 mx-[16px]'>
                                    <Skeleton />
                                </div>
                            }>
                                {page.categoryProducts.map((product: ProductIdListByCategoryType, index: number) => (
                                    <ProductCardTypeItem2 key={index} productId={Number(product.productId)} />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                )
            })}
            
            <div ref={bottom}></div>
        </>
    )
}

export const Skeleton = () => {
    return (
        <>
            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>
            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>

            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>
            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>

            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>
            <div className='w-[50%] h-[300px] bg-[#f5f5f5]'></div>
        </>
    )
}