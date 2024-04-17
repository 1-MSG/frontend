'use client'

import { getListType } from "@/app/(search)/search-list/page";
import { CommonDataResType } from "@/types/commonResType";
import useSWR from "swr";
import { useRouter } from 'next/navigation';

const fetcher = (args: any) => fetch(args).then(res => res.json())
function useSearch(searchText: string) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/search?keyword=${searchText}`, fetcher)

    return {
        data: data,
        isError: error
    }
}

function SearchList({ searchList }: { searchList: getListType[] }) {

    const router = useRouter();

    const handleSearch = async (searchText: string) => {
        const res = await fetch(`${process.env.API_BASE_URL}/search?keyword=${searchText}`)
        if (res.ok) {
            const ProductData: CommonDataResType = await res.json();
            const product = ProductData.data.searchProductDtos[0];
            // console.log(product);

            router.push(`/product-detail?productId=${product.productId}`);
        }
    }


    return (
        <>
            <div className='bg-[#ffffff] p-[10px]' style={{ width: '100%', height: 'calc(100% - 50px)', position: 'absolute', bottom: '0', right: '0' }}>
                {
                    searchList.map((item, index) => (
                        <div key={index} onClick={() => handleSearch(item.productName)} style={{ padding: '5px', paddingBottom: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d4d4d4', fontSize: '12px' }}>
                            <p>{item.productName}</p>
                            <span>↖</span>
                        </div>
                    )).slice(0, 10)
                }
            </div>
        </>
    );
}

export default SearchList;
