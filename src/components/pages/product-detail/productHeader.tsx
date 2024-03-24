import BtnBack from "@/components/pages/product-review/BtnBack";
import CartIcon from "@/images/svgs/CartIcon";
import SearchIcon from "@/images/svgs/searchIcon";
import { useRef } from "react";

export default function ProductHeader() {

    // const scrollRef = useRef([]);

    // const handleScrollView = (event:any) => {
    //     const name = event.target.innerText;
    //     const header = {
    //         One: 0,
    //         Two: 1
    //     };
    //     scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <div className="sticky flex bg-white h-[50px] top-0 z-10 overflow-x-scroll overflow-y-hidden">
            <div className='w-[80px] pt-[19px] pl-[20px]'><BtnBack /></div>
            <div className="flex px-[12px] text-[14px] font-bold text-center tracking-[-0.05rem]">
                <div className="pt-[18px] px-[8px] min-w-[55px]">상세</div>
                <div className="pt-[18px] px-[8px] min-w-[55px]">리뷰</div>
                <div className="pt-[18px] px-[8px] min-w-[55px]">Q&A</div>
            </div>
            <div className="flex">
                <SearchIcon />
                <div className="pt-[8px] pr-[8px]"><CartIcon /></div>
            </div>
        </div>
    )
}