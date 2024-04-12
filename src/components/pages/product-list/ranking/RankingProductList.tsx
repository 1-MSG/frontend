'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import { CommonDataResType } from "@/types/commonResType";
import { useRef } from "react";
import { useObserver } from "./useObserver";
import ProductCardTypeItem2 from "@/components/pages/product-list/ranking/ProductCardTypeItem2";


export default function RankingProductList({ maxPage }: { maxPage: number }) {
    const bottom = useRef(null);
    // const maxPage = 5;

    const getList = async ({ pageParam = 0 }: { pageParam: number }) => {
        const res = await fetch(`${process.env.API_BASE_URL}/ranking?page=${pageParam}&size=30&sort=`, {
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
        console.log(RankingList.data);

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
                        {page.productList.map((product: any) => (
                            <ProductCardTypeItem2 productId={Number(product.productId)} />
                        ))}
                    </div>
                )
            })}
            <div ref={bottom}></div>
        </div>
    )
}
