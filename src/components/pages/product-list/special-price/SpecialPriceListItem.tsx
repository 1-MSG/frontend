'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import { CommonDataResType } from "@/types/commonResType";
import { useRef } from "react";
import { useObserver } from "../useObserver";
import ProductCardTypeItem2 from "@/components/pages/product-list/ProductCardTypeItem2";
import { Suspense } from 'react';
import SpecialPriceContent from "./specialPriceContent";

export default function SpecialPriceListItem() {

    const bottom = useRef(null);
    // const maxPage = 5;

    const getList = async ({ pageParam = 0 }: { pageParam: number }) => {
        const res = await fetch(`${process.env.API_BASE_URL}/bundles?page=${pageParam}&size=10&sort=`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        })

        const specialPrice: CommonDataResType = await res.json();
        if (specialPrice.isSuccess === false) {
            return false;
        }
        // console.log(specialPrice.data);

        return specialPrice.data
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
        queryKey: ['bundle'],
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
        <div className="px-[16px]">
            {data && data.pages.map((page: any, index: number) => (
                <div key={index}>
                    {page.bundles.map((bundle: any, i: number) => (
                        <Suspense fallback={<div>test...</div>} key={i}>
                            <SpecialPriceContent list={bundle} />
                        </Suspense>
                    ))}
                </div>
            ))}
            <div ref={bottom}></div>
        </div>
    )
}