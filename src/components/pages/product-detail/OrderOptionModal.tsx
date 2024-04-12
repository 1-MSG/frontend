'use client'
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import { CommonDataResType } from '@/types/commonResType';
import { OptionDataType } from "@/types/optionDataType";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function OrderOptionModal({ 
    setIsOpenModal, productId, openedOptionName, optionData, childOption, selectedLevel, setSelectedList, handleGetOptionListData
}: { 
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>, 
    productId: number,
    openedOptionName: string,
    optionData: OptionDataType[],
    childOption: OptionDataType[],
    selectedLevel: number,
    setSelectedList: React.Dispatch<React.SetStateAction<boolean[]>>,
    handleGetOptionListData: Function
}) {

    //console.log("optionData ", optionData);
    //console.log("childOption ", childOption);

    const router = useRouter()
    const params = useSearchParams();
    const option1name = params.get('option1');
    const option2name = params.get('option2');
    const option3name = params.get('option3');

    const handleSelectOption = (optionName:string, optionId:number) => {
        console.log("optionName ", optionName);
        console.log("selectedLevel ", selectedLevel);
        setIsOpenModal(false);
        handleGetOptionListData(optionId, optionName);
        
        if ( selectedLevel == 1 ) {
            setSelectedList((prev) => {
                prev[selectedLevel] = true;
                return prev;
            })
            router.push(`/product-detail?productId=${productId}&option1=${optionName}`)
        } else if ( selectedLevel == 2 ) {
            setSelectedList((prev) => {
                prev[selectedLevel] = true;
                return prev;
            })
            router.push(`/product-detail?productId=${productId}&option1=${option1name}&option2=${optionName}`)
        } else if ( selectedLevel == 3 ) {
            router.push(`/product-detail?productId=${productId}&option1=${option1name}&option2=${option2name}&option3=${optionName}`)
        }
    }

    //

    // console.log("option ", option);


    // // const { clickOptionModal } = props;
    // // const {getOption} = props;
    // // const data = props.giveData;

    // const optionList = option;

    // console.log("optionList ", optionList);

    // const possible: any = [];
    // const impossible: any = [];

    // if (optionList.length == 1) {
    //     optionList.map((e: any) => {
    //         if (e.stock == 0) impossible.push(e)
    //         else possible.push(e)
    //     })
    // }


    return (
        <div className="w-full h-[497px] bg-white fixed z-20 bottom-0 justify-center items-center rounded-t-md overflow-scroll shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={()=>setIsOpenModal(false)}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[1.8rem] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ededed] rounded-md">
                    선택하세요. &#40;{openedOptionName}&#41;
                </div>
                <div className="mx-[15px] pl-[10px] pr-[15px] pb-[24px]">
                    <ul>
                        {
                            childOption.length > 0 ? childOption.map((option: any) => {
                                return (
                                    option.stock > 0  &&
                                        <li key={option.optionId}
                                            className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                            onClick={() => handleSelectOption(option.optionName, option.optionId)}
                                        >
                                             <div className="flex">
                                                <span>{option.optionName} 
                                                {
                                                    option.stock == 0 ? <span>&#40;품절&#41;</span> : null
                                                } </span>
                                                {/* <span><a className="py-[8px] px-[20px] border border-[#222222] text-[#222222] text-right tracking-[-0.05rem]">입고알림</a></span> */}
                                            </div>
                                        </li>
                                )
                            })
                            :
                            optionData.length > 0 ? optionData.map((option: any) => {
                                return (
                                    option.stock > 0 || option.stock === null  &&
                                        <li key={option.optionId}
                                            className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                            onClick={() => handleSelectOption(option.optionName, option.optionId)}
                                        >
                                            {option.optionName}
                                        </li>
                                )
                            }) 
                            :
                            <div>  데이터없음 </div>
                       
                        }
                                {/* {impossible.map((option: any) => {
                                    return (
                                        <li key={option.optionId}
                                            className="mt-[12px] w-full first:mt-0 text-[12px] text-left h-[50px] text-[#96969d]">
                                            <div className="flex">
                                                <span>{option.optionName} &#40;품절&#41; </span>
                                                <span><a className="py-[8px] px-[20px] border border-[#222222] text-[#222222] text-right tracking-[-0.05rem]">입고알림</a></span>
                                            </div>
                                        </li>
                                    )
                                })} */}
                        
                        {/* {optionList.length =! 1 &&
                            <li key={option.optionId}
                                className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                onClick={() => {getOption(option); clickOptionModal() }}>
                                {option.optionName}
                            </li>
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

