'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import { CommonDataResType } from "@/types/commonResType";
import { useRef } from "react";
import { useObserver } from "@/components/pages/product-list/useObserver";
import ProductCardTypeItem2 from "@/components/pages/product-list/ProductCardTypeItem2";
import { Suspense } from 'react';


export default function SearchDataList({searchText}: {searchText: string}) {
    const bottom = useRef(null);

    const getList = async ({ pageParam = 0 }: { pageParam: number }) => {
        const res = await fetch(`${process.env.API_BASE_URL}/search?keyword=${searchText}&page=${pageParam}&size=10&sort=`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        })

        const searchProduct: CommonDataResType = await res.json();
        if (searchProduct.isSuccess === false) {
            return false;
        }
        console.log(searchProduct.data);

        return searchProduct.data
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
        queryKey: ['search'],
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

    return(
        <div>
            
            {data && data.pages?.map((page, i) => {
                return (
                    <div key={i}>
                        <div className='grid grid-cols-2 gap-2 mx-[16px]'>
                            {page.searchProductDtos.map((product: any, index: number) => (
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