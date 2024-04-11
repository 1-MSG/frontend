import useSWR from "swr";
import { CommonDataResType } from '@/types/commonResType';

const fetcher = (args: any) => fetch(args).then(res => res.json())

function useOption(brand: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/brand/${brand}`, fetcher)

    return {
        data: data,
        isError: error
    }
}

export default function ShippingCharge({ list, brand }: { list: any, brand: any }) {

    //console.log("list ", list);
    //console.log("brand ", brand);

    const { data, isError } = useOption(brand)

    if (isError) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const BrandData: CommonDataResType = data;
    const brandDeliveryFee = BrandData.data;

    //console.log(brandDeliveryFee);

    return (
        <div className="bg-[#f4f4f4] mx-[16px] mb-[20px] p-[12px] text-[13px] text-center tracking-[-0.05rem]">
            {/* <div>
                <p>{brandTotal[index].toLocaleString()}원 + 배송비 {delivery[index].toLocaleString()}원 = <strong>{(brandTotal[index] + delivery[index]).toLocaleString()}원</strong></p>
            </div>
            <div className="bg-white mt-[10px] pt-[8px] px-[10px] pb-[7px]">
                배송비 절약상품 보러가기
            </div> */}
        </div>
    )
}