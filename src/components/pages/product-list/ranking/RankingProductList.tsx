'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import { CommonDataResType } from "@/types/commonResType";
import { useRef } from "react";
import { useObserver } from "../useObserver";
import ProductCardTypeItem2 from "@/components/pages/product-list/ProductCardTypeItem2";
import { Suspense } from 'react';


export default function RankingProductList() {
    const bottom = useRef(null);

    const getList = async ({ pageParam = 0 }: { pageParam: number }) => {
        const res = await fetch(`https://sssg.shop/api/v1/ranking?page=${pageParam}&size=10&sort=`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        })

        const RankingList: CommonDataResType = await res.json();
        if (RankingList.isSuccess === false) {
            return false;
        }
        // console.log(RankingList.data);

        return RankingList.data
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
        queryKey: ['ranking'],
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

    return (
        <div>
            {data && data.pages?.map((page, i) => {
                return (
                    <div key={i}>
                        <div className='grid grid-cols-2 gap-2 mx-[16px]'>
                            {page.productList.map((product: any, index: number) => (
                                <Suspense fallback={<div>Loading...</div>} key={index}>
                                    <ProductCardTypeItem2 productId={Number(product.productId)} />
                                </Suspense>
                            ))}
                        </div>
                    </div>
                )
            })}
            <div ref={bottom}></div>
        </div>
    )
}
