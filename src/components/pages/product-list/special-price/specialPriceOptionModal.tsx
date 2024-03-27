import { useRef } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import Image from "next/image";


export default function SpecialPriceOptionModal(props: any) {

    const { clickOptionModal } = props;
    const { getOption } = props;
    const bundle = props.bundle;
    const bundleList = bundle.bundle_product_list;


    // ------------ 품절 상품 체크 --------------
    const possible: any = [];
    const impossible: any = [];

    bundleList.map((e: any) => {
        if (e.stock == 0) impossible.push(e)
        else possible.push(e);
    })


    // ------------ 금액 쉼표 표시 --------------
    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }



    
    return (
        <div className="w-full h-[497px] bg-white fixed z-20 bottom-0 justify-center items-center rounded-t-xl overflow-scroll shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOptionModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ededed] rounded-md">
                    상품을 선택하세요.
                </div>
                <div className="mx-[15px] pl-[10px] pr-[15px] pb-[24px]">
                    <ul>
                        {possible.map((list: any, index:number) => {
                            return (
                                <li key={list.product_id}
                                    className="mt-[12px] first:mt-0 text-[13px] text-left text-[#222222]"
                                    onClick={() => { getOption(list); clickOptionModal() }}>
                                    <span className="grid grid-cols-5 text-wrap">
                                        <span className="col-span-1 m-auto">
                                            <Image src={list.product_img_url} alt="" width={65} height={65} />
                                        </span>
                                        <span className="col-span-3 px-[10px] leading-[17px] text-ellipsis overflow-hidden">&#91;상품{index+1}&#93; {list.product_name}</span>
                                        <span className="col-span-1 text-[14px] font-semibold">{priceToString(list.product_price * ((100 - list.discount_rate) / 100))}원</span>
                                    </span>
                                </li>
                            )
                        })}
                        {impossible.map((list: any, index:number) => {
                            return (
                                <li key={list.product_id}
                                    className="mt-[12px] w-full first:mt-0 text-[12px] text-left h-[50px] text-[#96969d]">
                                    <div className="flex">
                                        <span>{list.product_name}&#40;품절&#41; </span>
                                        <span><a className="py-[8px] px-[20px] border border-[#222222] text-[#222222] text-right tracking-[-0.05rem]">입고알림</a></span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

