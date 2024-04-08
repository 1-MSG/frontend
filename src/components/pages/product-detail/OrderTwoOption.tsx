'use client'

import OrderOptionModal from "./orderOptionModal";
import { useEffect, useState } from "react";
import ProductDetailCount from "./ProductDetailCount";
import XIcon from "@/images/svgs/xIcon";
import OrderChildOptionModal from "./OrderChildOptionModal";
import OrderTwoOptionModal from "./OrderTwoOptionModal";

export default function OrderTwoOption({
    kind, productId, orderList, priceList, setTotal, Info, onRemove
}: {
    kind: any, productId: number, orderList: any, priceList: any, setTotal: any, Info: any, onRemove: any
}) {
    let sum = 0;

    // ------------ 옵션 체크 모달 --------------
    const [modal, setModal] = useState(false);
    const clickOptionModal = () => { setModal(!modal) }

    const [childModal, setChildModal] = useState(false);
    const clickChildOptionModal = () => { setChildModal(!childModal) }


    // ------------ 부모 옵션 --------------
    const [parentId, setParentId] = useState(0);
    const [parentName, setParentName] = useState('');

    const pullOption = (e: any) => {
        console.log(e.optionId, "optionId");
        setParentId(e.optionId);
        setParentName(e.optionName);
    }


    //------------ 옵션 체크 모달에서 가져온 값 리스트에 추가 --------------
    function getOption(e: any) {
        const value = {
            parentName: parentName,
            optionId: e.optionId,
            optionName: e.optionName
        }
        const priceValue = {
            productId: productId,
            productPrice: Info.productPrice,
            discountPrice: Info.discountPrice,
            discountRate: Info.discountRate,
            salePrice: 0,
            count: 1
        }
        orderList.push(value);
        priceList.push(priceValue)
    }

    function GetPrice2(index: number, salePrice: number, count: number) {

        const value = {
            productId: productId,
            productPrice: Info.productPrice,
            discountPrice: Info.discountPrice,
            discountRate: Info.discountRate,
            salePrice: salePrice,
            count: count
        }
        priceList[index] = value;
        sum = 0;
        priceList.map((e: any) => sum += e.salePrice)
        useEffect(() => {
            setTotal(sum)
        })
    }
    

    return (
        <>
            <>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                    onClick={() => setModal(true)}>
                    선택하세요. &#40;{kind[0].optionType}&#41;
                </div>
                {
                    modal &&
                    <OrderTwoOptionModal clickOptionModal={clickOptionModal} productId={productId} pullOption={pullOption} /> 
                }
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                    onClick={() => setChildModal(true)}>
                    선택하세요. &#40;{kind[1].optionType}&#41;
                </div>
                {parentId != 0 && (
                    childModal &&
                    <OrderChildOptionModal 
                        clickChildOptionModal={clickChildOptionModal} 
                        parentId={parentId} 
                        parentName={parentName} 
                        getOption={getOption}
                    />
                )}
            </>


            <div className="px-[15px] pt-[12px] max-h-[300px] overflow-y-scroll">
                {orderList.length == 0 ? <div></div> :
                    <div>
                        {orderList.map((list: any, index: number) => {
                            return (
                                <div key={index} className="relative mt-[5px] pt-[13px] px-[15px] border border-[#707070] rounded-md bg-[#f8f8f8]">
                                    <div className="text-left text-[13px] text-[#222222] leading-[13px]">
                                        <p>{list.parentName} / {list.optionName}</p>

                                        <ProductDetailCount 
                                            discountPrice={Info.discountPrice} 
                                            getPrice2={GetPrice2} 
                                            index={index} 
                                            productPrice={Info.productPrice}
                                            />
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