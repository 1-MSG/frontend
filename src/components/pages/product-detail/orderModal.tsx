'use client'
import { forwardRef, useEffect, useState } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import OrderOptionModal from "./orderOptionModal";
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"
import Link from "next/link";
import ProductDetailCount from "./ProductDetailCount";
import XIcon from "@/images/svgs/xIcon";


export default function OrderModal({
    clickOrderModal, giveData, onRemove, orderList, priceList, setTotal, total, productId
}: {
    clickOrderModal: any, giveData: any, onRemove: any, orderList: any, priceList: any, setTotal: any, total: any, productId: number
}) {


    // useEffect(() => { 
    //     console.log("sfsdf");
        
    //     const getData = async () => {
    //         const res = await fetch(`${process.env.API_BASE_URL}/option/type/${productId}`)
    //         if (res.ok) {
    //             const data = await res.json();
    //             console.log(data);
    //         }
    //     }
    //     getData();
    // }, [])
    // const { clickOrderModal } = props;
    // const data = props.giveData;

    // const orderList = props.orderList;
    // const priceList = props.priceList;
    // const setTotal = props.setTotal;
    // const total = props.total;
    // const { onRemove } = props;
    let sum = 0;


    // ------------ 옵션 체크 모달 --------------
    const [modal, setModal] = useState(false);
    const clickOptionModal = () => { setModal(!modal) }


    // ------------ 옵션 체크 모달에서 가져온 값 리스트에 추가 --------------
    function getOption(e: any) {
        orderList.push(e);
        priceList.push(giveData.product_price * ((100 - giveData.product_rate) / 100)) 
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
        <div className="w-full bg-white fixed z-10 bottom-0 rounded-t-md shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOrderModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                    onClick={() => setModal(true)}>
                    선택하세요. &#40;사이즈&#41;
                </div>
                {/* {
                    modal &&
                    <OrderOptionModal clickOptionModal={clickOptionModal} getOption={getOption} giveData={giveData} productId={productId} />
                } */}
                <div>
                    <div className="px-[15px] pt-[12px] max-h-[300px] overflow-y-scroll">
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
                    </div>
                </div>
            </div>
            <div className="pt-[6px] pr-[20px] pb-[15px] float-right">
                <strong className="text-[16px]">총 합계 </strong>
                <strong className="text-[25px] text-[#ff5452]">
                    <em className="not-italic">{total.toLocaleString()}</em>
                    <span className="">원</span>
                </strong>
            </div>
            <div>
                <ul className='flex w-full bottom-0 h-[52px] text-center leading-[52px] text-[16px] font-medium'>
                    <li className='bg-black text-white w-1/2'>
                        장바구니
                    </li>
                    <li className='bg-[#ff5452] text-white w-1/2'>
                        <Link href="/order">바로구매</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


