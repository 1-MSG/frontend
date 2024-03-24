import { forwardRef, useEffect, useState } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import OrderOptionModal from "./orderOptionModal";
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"
import Link from "next/link";


export default function OrderModal(props: any, optionRef: any) {
    const { clickOrderModal } = props;
    const data = props.giveData;


    const [modal, setModal] = useState(false);
    const clickOptionModal = () => { setModal(!modal) }

    let selling_price = data.product_price * ((100 - data.product_rate) / 100)

    //let optionList: any = [];
    const [option, setOption] = useState('');
    function getOption(id: number, color: string, size: string) {
        setOption(color + " " + size)

        //optionRef.current = "color"


        //optionRef.current = id //({"id": id, "color": color, "size": size});
        //console.log("모달 " + JSON.stringify(optionRef));
    }
    //console.log("모달2 " + JSON.stringify(optionRef));

    const [price, setPrice] = useState(0);
    const changePrice = () => {

    }

    const [count, setCount] = useState(1);

    const onMinus = () => {
        if (count == 1) setCount(1)
        else setCount(count - 1);
    }

    const onPlus = () => {
        setCount(count + 1);
    }

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className="w-full max-h-[364px] bg-white fixed z-10 bottom-0 rounded-t-md shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOrderModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md"
                    onClick={() => setModal(true)}>
                    선택하세요. &#40;사이즈&#41;
                </div>
                {
                    modal &&
                    <OrderOptionModal clickOptionModal={clickOptionModal} getOption={getOption} giveData={data} />
                }
                <div>
                    <div className="px-[15px] pt-[12px]">
                        <div>
                            {option == '' ? <div></div> :
                                <div className="pt-[13px] px-[15px] border border-[#707070] rounded-md bg-[#f8f8f8]">
                                    <div>
                                        <div className="text-left text-[13px] text-[#222222] leading-[13px]">옵션: {option}</div>
                                        <div className="flex">
                                            <div className="mt-[14px] h-[33px] flex">
                                                <button onClick={onMinus} className="bg-white w-[34px] h-[33px] text-center"><Minus /></button>
                                                <div className="bg-white text-[14px] leading-[33px] w-[34px] h-[33px]">
                                                    <span>{count}</span>
                                                </div>
                                                <button onClick={onPlus} className="bg-white box-border w-[34px] h-[33px]"><Plus /></button>
                                            </div>
                                            <div className="mt-[10px]">
                                            <span className="text-[18px] font-bold">
                                                <em className="not-italic"></em>
                                                <span>{priceToString(count * selling_price)}원</span>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[6px] pr-[20px] pb-[15px] float-right">
                <strong className="text-[16px]">총 합계</strong>
                <strong className="text-[25px] text-[#ff5452]">
                    <em className=""></em>
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


