'use client'
import { forwardRef, useEffect, useState } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"
import Link from "next/link";
import ProductDetailCount from "./ProductDetailCount";
import XIcon from "@/images/svgs/xIcon";
import { CommonDataResType } from "@/types/commonResType";
import OrderModalBtn from "./OrderMoalBtn";
import { OptionDataType, OptionListType } from "@/types/optionDataType";
import OrderOption from "./OrderOption";
import OrderOptionModal from "./OrderOptionModal";
import { useSearchParams } from "next/navigation";




export default function OrderModal({
    setOrderModal, Info, onRemove, orderList, priceList, setTotal, total, productId
}: {
    setOrderModal: React.Dispatch<React.SetStateAction<boolean>>, Info: any, onRemove: any, orderList: any, priceList: any, setTotal: any, total: any, productId: number
}) {

    const [kind, setKind] = useState<OptionListType[]>([] as OptionListType[]);
    const [openedOptionName, setOpenedOptionName] = useState('');
    const [lastLevel, setLastLevel] = useState<number>(0);
    const [selectedLevel, setSelectedLevel] = useState<number>(0);
    const [selectedList, setSelectedList] = useState([] as boolean[]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [option, setOption] = useState<OptionDataType[]>([] as OptionDataType[] | []);
    const [childOption, setChildOption] = useState<OptionDataType[]>([] as OptionDataType[]);
    // const [optionId, setOptionId] = useState<number>(0);
    const params = useSearchParams();
    const [zeroId, setZeroId] = useState<number>(0);
    const [zeroStock, setZeroStock] = useState<number>(0);
    let kindLen = 0;

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/option/type/${productId}`)
            if (res.ok) {
                const data: CommonDataResType = await res.json();
                setKind(data.data.reverse());
                setLastLevel(data.data.length);
                setSelectedList(new Array(data.data.length).fill(false));
                setSelectedList((prev) => {
                    prev[0] = true;
                    return prev;
                })

            }
        }
        getData();

        const getOptionFirstData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/option/first/${productId}`)
            if (res.ok) {
                const data: CommonDataResType = await res.json();
                // console.log("option ", data);
                setOption(data.data);

                if(data.data[0].optionId == null) {
                    orderList.push({
                        optionId: data.data[0].productOptionId,
                        optionName: '',
                    })
                    // setZeroId(data.data[0].productOptionId)
                    // setZeroStock(data.data[0].stock)
                }
            }
        }
        getOptionFirstData();

    }, [productId])


    const handleGetOptionListData = async (optionId: number, optionName: string, productOptionId: number) => {

        // console.log("optionId get handler", optionId);
        // console.log("selectedLevel", selectedLevel);

        if (selectedLevel === lastLevel) {

            let option1 = params.get('option1');
            let option2 = params.get('option2');
            let name = ''

            if (option1 == null) option1 = '';
            if (option2 == null) option2 = '';

            if (selectedLevel === 1 && orderList.length != 0) {
                name = optionName;
            }
            else {
                name = option1 + " " + option2 + " " + optionName;
            }

            const value = {
                optionId: productOptionId,
                optionName: name,
            }
            const priceValue = {
                productId: productId,
                productPrice: Info.productPrice,
                discountPrice: Info.discountPrice,
                discountRate: Info.discountRate,
                salePrice: 0,
                count: 1
            }

            const idx = orderList.findIndex((e: any) => e.optionId === productOptionId);
            if (idx !== -1) {
                alert('이미 선택된 옵션입니다.');
                return;
            }
            orderList.push(value)
            priceList.push(priceValue)
            setSelectedLevel(1);
            setChildOption([]);
            //console.log("orderList", orderList);

            //return alert("마지막 옵션입니다.");
        }
        else {
            const res = await fetch(`${process.env.API_BASE_URL}/option/child/${optionId}`)
            if (res.ok) {
                const data: CommonDataResType = await res.json();
                // console.log("option child", data);
                setChildOption(data.data);
            }
        }
    }


    let sum = 0;
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

    const ReduceOrder = orderList.reduce((acc: any, cur: any) => {
        if (!acc.find((item: any) => item.optionId === cur.optionId)) {
            acc.push(cur);
        }
        return acc;
    }, []);

    // console.log("ReduceOrder", ReduceOrder);


    return (
        <>
            {
                isOpenModal &&
                <OrderOptionModal
                    setIsOpenModal={setIsOpenModal}
                    productId={productId}
                    openedOptionName={openedOptionName}
                    optionData={option.length > 0 ? option : []}
                    childOption={childOption.length > 0 ? childOption : []}
                    selectedLevel={selectedLevel}
                    setSelectedList={setSelectedList}
                    handleGetOptionListData={handleGetOptionListData}
                />
            }

            <div className="w-full bg-white fixed z-10 bottom-0 rounded-t-md shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
                <div className="w-full ">
                    <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={() => setOrderModal(false)}><ModalBackBtn /></div>
                </div>
                <div>
                    {
                        lastLevel == 0 ?
                            <div className="px-[15px] pt-[12px]">
                                <div className="relative mt-[5px] pt-[13px] px-[15px] rounded-md bg-[#f8f8f8]">
                                    <div className="text-left text-[13px] text-[#222222] leading-[13px]">
                                        <p>{Info.productName}</p>
                                        <ProductDetailCount discountPrice={Info.discountPrice} getPrice2={GetPrice2} index={0} />
                                    </div>
                                </div>
                            </div>
                            :
                            kind.length > 0 && kind.map((item: OptionListType, index: number) => (
                                <OrderOption
                                    item={item}
                                    key={index}
                                    setOpenedOptionName={setOpenedOptionName}
                                    setIsOpenModal={setIsOpenModal}
                                    selected={selectedList[index]}
                                    index={index}
                                    setSelectedLevel={setSelectedLevel}
                                />
                            ))
                    }
                    {/* {
                        kind.length > 0 && kind.map((item: OptionListType, index: number) => (
                            <OrderOption
                                item={item}
                                key={index}
                                setOpenedOptionName={setOpenedOptionName}
                                setIsOpenModal={setIsOpenModal}
                                selected={selectedList[index]}
                                index={index}
                                setSelectedLevel={setSelectedLevel}
                            />
                        ))
                    } */}
                    <div>
                        <div className="px-[15px] pt-[12px] max-h-[300px] overflow-y-scroll">
                            {
                                lastLevel == 0 ? <div></div> :
                                ReduceOrder.length == 0 ? <div></div> :
                                    <div>
                                        {ReduceOrder.map((list: any, index: number) => {
                                            return (
                                                <div key={index} className=" relative mt-[5px] pt-[13px] px-[15px] border border-[#707070] rounded-md bg-[#f8f8f8]">
                                                    <div className="text-left text-[13px] text-[#222222] leading-[13px]">
                                                        <p>{list.optionName}</p>

                                                        <ProductDetailCount discountPrice={Info.discountPrice} getPrice2={GetPrice2} index={index} />
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
                    </div>
                </div>
                <div className="pt-[6px] pr-[20px] pb-[15px] float-right">
                    <strong className="text-[16px]">총 합계 </strong>
                    <strong className="text-[25px] text-[#ff5452]">
                        <em className="not-italic">{total.toLocaleString()}</em>
                        <span>원</span>
                    </strong>
                </div>
                <OrderModalBtn productId={productId} orderList={ReduceOrder} priceList={priceList} Info={Info} />
            </div>
        </>
    )
}


