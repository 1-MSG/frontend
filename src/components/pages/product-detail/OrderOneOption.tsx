'use client'

import { useEffect, useState } from "react";
import ProductDetailCount from "./ProductDetailCount";
import XIcon from "@/images/svgs/xIcon";

export default function OrderOneOption({ 
    kind, productId, orderList, priceList, setTotal, Info, onRemove 
}: { 
    kind: any, productId: number, orderList: any, priceList: any, setTotal: any, Info: any, onRemove: any
}) {

    let sum = 0;

    // ------------ 옵션 체크 모달 --------------
    const [modal, setModal] = useState(false);
    const clickOptionModal = () => { setModal(!modal) }


    //------------ 옵션 체크 모달에서 가져온 값 리스트에 추가 --------------
    function getOption(e: any) {
        orderList.push(e);
        priceList.push(e.discountPrice)
    }

    function GetPrice2(index: number, e: number) {
        priceList[index] = e;
        sum = 0;
        priceList.map((e: number) => sum += e)
        useEffect(() => {
            setTotal(sum)
        })
    }


    return (
        <>
            {kind.map((e: any, index: number) => (
                <>
                    <div key={index} className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                        onClick={() => setModal(true)}>
                        선택하세요. &#40;{e.optionType}&#41;
                    </div>
                    {/* {
                        modal &&
                        <OrderOptionModal clickOptionModal={clickOptionModal} productId={productId} getOption={getOption} />
                    } */}
                </>
            ))}

            <div className="px-[15px] pt-[12px] max-h-[300px] overflow-y-scroll">
                {orderList.length == 0 ? <div></div> :
                    <div>
                        {orderList.map((list: any, index: number) => {
                            return (
                                <div key={index} className="relative mt-[5px] pt-[13px] px-[15px] border border-[#707070] rounded-md bg-[#f8f8f8]">
                                    <div className="text-left text-[13px] text-[#222222] leading-[13px]">
                                        <p>{list.optionName}</p>

                                        <ProductDetailCount discountPrice={Info.discountPrice} getPrice2={GetPrice2} index={index} productPrice={Info.productPrice}/>
                                        <div onClick={() => onRemove(index)} className="absolute top-0 right-0 pt-[5px] pr-[5px]">
                                            <XIcon />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}