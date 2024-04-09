'use client'
import { forwardRef, useEffect, useState } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"
import Link from "next/link";
import ProductDetailCount from "./ProductDetailCount";
import XIcon from "@/images/svgs/xIcon";
import { CommonDataResType } from "@/types/commonResType";
import OrderChildOptionModal from "./OrderChildOptionModal";
import OrderOneOption from "./OrderOneOption";
import OrderTwoOption from "./OrderTwoOption";
import OrderThreeOption from "./OrderThreeOption";
import OrderModalBtn from "./OrderMoalBtn";
import { OptionListType } from "@/types/optionDataType";
import OrderOption from "./OrderOption";

// import OrderOptionModal from "./OrderOptionModal";




export default function OrderModal({
    setOrderModal, Info, onRemove, orderList, priceList, setTotal, total, productId
}: {
    setOrderModal: React.Dispatch<React.SetStateAction<boolean>>, Info : any, onRemove: any, orderList: any, priceList: any, setTotal: any, total: any, productId: number
}) {

    const [kind, setKind] = useState<OptionListType[]>([] as OptionListType[]);
    const [openedOptionName, setOpenedOptionName] = useState('');
    const [lastLevel, setLastLevel] = useState<number>(0);
    const [selectedList, setSelectedList] = useState([] as boolean[]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/option/type/${productId}`)
            if (res.ok) {
                const data: CommonDataResType = await res.json();
                setKind(data.data.reverse());
                setLastLevel(data.data.length);
                console.log("kind ", data);
                setSelectedList(new Array(data.data.length).fill(false));
                setSelectedList((prev) => {
                    prev[0] = true;
                    return prev;
                })
            } 
        }
        getData();
    }, [productId])

    //console.log("kind ", kind);


    //const { clickOrderModal } = props;
    //const data = props.giveData;

    // const orderList = props.orderList;
    // const priceList = props.priceList;
    // const setTotal = props.setTotal;
    // const total = props.total;
    // const { onRemove } = props;
    // let sum = 0;

    // // ------------ 부모 옵션 id --------------
    // const [parentId, setParentId] = useState(0);

    // const getOptionId = (optionId: number) => {
    //     setParentId(optionId);
    // }


    // // ------------ 옵션 체크 모달 --------------
    // const [modal, setModal] = useState(false);
    // const clickOptionModal = () => { setModal(!modal) }

    // const [childModal, setChildModal] = useState(false);
    // const clickChildOptionModal = () => { setModal(!childModal) }

    // console.log("orderList", orderList);
    // console.log("priceList", priceList);
    
    

    return (
        <>
        {/* {
            isOpenModal && 
            <OrderOptionModal 
                setIsOpenModal={setIsOpenModal}
                productId={productId}
                openedOptionName={openedOptionName}

            />
        } */}
        
        <div className="w-full bg-white fixed z-10 bottom-0 rounded-t-md shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={()=>setOrderModal(false)}><ModalBackBtn /></div>
            </div>
            <div>
                {
                    kind.length > 0 && kind.map(( item: OptionListType, index: number) => (
                        <OrderOption 
                            item={item} 
                            key={index}
                            setOpenedOptionName={setOpenedOptionName}
                            setIsOpenModal={setIsOpenModal}
                            selected={selectedList[index]}
                            index={index}
                            setSelectedList={setSelectedList}
                        />
                    ))
                }
                {/* {kind.length == 1 && 
                    <OrderOneOption 
                        kind={kind} 
                        productId={productId} 
                        orderList={orderList} 
                        priceList={priceList} 
                        setTotal={setTotal} 
                        Info={Info}
                        onRemove={onRemove} />}

                {kind.length == 2 && 
                    <OrderTwoOption
                        kind={kind} 
                        productId={productId} 
                        orderList={orderList} 
                        priceList={priceList} 
                        setTotal={setTotal} 
                        Info={Info}
                        onRemove={onRemove}
                        />}

                {kind.length == 3 && <OrderThreeOption/>} */}

                {/* {kind.map((e: any, index: number) => (
                    <>
                        <div key={index} className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                            onClick={() => setModal(true)}>
                            선택하세요. &#40;{e.optionType}&#41;
                        </div>
                        {
                            modal &&
                            <OrderOptionModal clickOptionModal={clickOptionModal} getOptionId={getOptionId} productId={productId} />
                        }
                        {
                            childModal && parentId != 0 &&
                            <OrderChildOptionModal clickChildOptionModal={clickChildOptionModal} optionId={parentId} />
                        }
                    </>
                ))} */}
                {/* <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                    onClick={() => setModal(true)}>
                    선택하세요. &#40;사이즈&#41;
                </div> */}
                <div>
                    {/* <div className="px-[15px] pt-[12px] max-h-[300px] overflow-y-scroll">
                        {orderList.length == 0 ? <div></div> :
                            <div>
                                {orderList.map((list: any, index: number) => {
                                    return (
                                        <div key={index} className=" relative mt-[5px] pt-[13px] px-[15px] border border-[#707070] rounded-md bg-[#f8f8f8]">
                                            <div className="text-left text-[13px] text-[#222222] leading-[13px]">
                                                <p>{list.color} {list.size}</p>

                                                <ProductDetailCount product_price={giveData.product_price} product_rate={giveData.product_rate} getPrice2={GetPrice2} index={index} />
                                                <div onClick={() => onRemove(index)} className="absolute top-0 right-0 pt-[5px] pr-[5px]">
                                                    <XIcon />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div> */}
                </div>
            </div>
            <div className="pt-[6px] pr-[20px] pb-[15px] float-right">
                <strong className="text-[16px]">총 합계 </strong>
                <strong className="text-[25px] text-[#ff5452]">
                    <em className="not-italic">{total.toLocaleString()}</em>
                    <span>원</span>
                </strong>
            </div>
            <OrderModalBtn productId={productId} orderList={orderList} priceList={priceList}/>
        </div>
    </>
    )
}


