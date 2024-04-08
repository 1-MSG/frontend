'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (args: any) => fetch(args).then(res => res.json())

function useOption(optionId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/option/${optionId}`, fetcher)

    return {
        data: data,
        isError: error
    }
}

export default function OrderModalBtn({productId, orderList, priceList} : {productId: number, orderList: any, priceList: any}) {

    console.log("orderList", orderList);
    console.log("priceList", priceList);

    // const optionPost:any[] = [];
    // orderList.map((e:any) => ()

    return (
        <div>
            <ul className='flex w-full bottom-0 h-[52px] text-center leading-[52px] text-[16px] font-medium'>
                <li className='bg-black text-white w-1/2'>
                    장바구니
                </li>
                <li className='bg-[#ff5452] text-white w-1/2'>
                    <Link href={{
                        pathname: "/product-order",
                        query: { productId: productId, orderList: JSON.stringify(orderList), priceList: JSON.stringify(priceList) }
                    }}
                    >
                        바로구매
                    </Link>
                </li>
            </ul>
        </div>
    )
}