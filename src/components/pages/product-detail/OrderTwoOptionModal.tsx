'use client'
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import { CommonDataResType } from '@/types/commonResType';
import useSWR from "swr";

const fetcher = (args: any) => fetch(args).then(res => res.json())

function useOption(productId: number) {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/option/first/${productId}`, fetcher)

    return {
        data: data,
        isError: error
    }
}

export default function OrderTwoOptionModal({
    clickOptionModal, productId, pullOption
}: {
    clickOptionModal: any, productId: number, pullOption: any
}) {

    const { data, isError } = useOption(productId)

    if (isError) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const optionData: CommonDataResType = data;
    const optionList = optionData.data;

    //console.log(optionList);

    const possible: any = [];
    const impossible: any = [];


    optionList.map((e: any) => {
        if (e.stock == 0) impossible.push(e)
        else possible.push(e)
    })


    return (
        <div className="w-full h-[497px] bg-white fixed z-20 bottom-0 justify-center items-center rounded-t-md overflow-scroll shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOptionModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ededed] rounded-md">
                    선택하세요. &#40;{optionList[0].optionType}&#41;
                </div>
                <div className="mx-[15px] pl-[10px] pr-[15px] pb-[24px]">
                    <ul>
                        {optionList.map((option: any) => (
                            <li key={option.optionId}
                                className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                onClick={() => { pullOption(option); clickOptionModal() }}>
                                {option.optionName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

