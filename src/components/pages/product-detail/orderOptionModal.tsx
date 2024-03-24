import { useRef } from "react";
import ModalBackBtn from "@/images/svgs/ModalBackBtn";


export default function OrderOptionModal(props: any) {
    const { clickOptionModal } = props;
    const {getOption} = props;
    const data = props.giveData;

    const optionList = data.product_options;

    const possible: any = [];
    const impossible: any = [];

    optionList.map((e: any) => {
        if (e.stock == 0) impossible.push({ "product_option_id": e.product_option_id, "size": e.size, "color": e.color})
        else possible.push({ "product_option_id": e.product_option_id, "size": e.size, "color": e.color})
    })


    

    let optionRef = useRef([]);
    console.log("디테일 " + JSON.stringify(optionRef));

    return (
        <div className="w-full h-[497px] bg-white fixed z-20 bottom-0 justify-center items-center rounded-t-md overflow-scroll shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOptionModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ededed] rounded-md">
                    선택하세요. &#40;사이즈&#41;
                </div>
                <div className="mx-[15px] pl-[10px] pr-[15px] pb-[24px]">
                    <ul>
                        {possible.map((option: any) => {
                            return (
                                <li key={option.product_option_id}
                                    className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                    onClick={() => {getOption(option.product_option_id, option.color, option.size); clickOptionModal()}}>
                                    {option.color} {option.size}
                                </li>
                            )
                        })}
                        {impossible.map((option: any) => {
                            return (
                                <li key={option.product_option_id}
                                    className="mt-[12px] w-full first:mt-0 text-[12px] text-left h-[50px] text-[#96969d]">
                                    <div className="flex">
                                        <span>{option.color} {option.size}&#40;품절&#41; </span>
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

