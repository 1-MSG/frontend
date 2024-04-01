'use client'

import BtnBack from "@/components/pages/product-review/BtnBack";
import CartIcon from "@/images/svgs/CartIcon";
import SearchIcon from "@/images/svgs/searchIcon";
import { useEffect, useState, useRef } from "react";

export default function ProductHeader() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      }, []);

    const handleScroll = () => {
        // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
        if (window.scrollY >= 56) {
            setOpen(true);
        } else {
            // 스크롤이 50px 미만일경우 false를 넣어줌
            setOpen(false);
        }
    };

    

    return (
        <>
            {open &&
                <div className="sticky flex bg-white h-[50px] top-0 z-10 overflow-x-scroll overflow-y-hidden">
                    <div className='w-[80px] pt-[19px] pl-[20px]'><BtnBack /></div>
                    <div className="flex px-[12px] text-[14px] font-bold text-center tracking-[-0.05rem]">
                        <div className="pt-[18px] px-[8px] min-w-[55px]">상세</div>
                        <div className="pt-[18px] px-[8px] min-w-[55px]">리뷰</div>
                        <div className="pt-[18px] px-[8px] min-w-[55px]">Q&A</div>
                    </div>
                    <div className="flex">
                        <SearchIcon />
                        <div className="pt-[8px] pr-[8px]"><CartIcon w={32} h={32} /></div>
                    </div>
                </div>
            }
        </>
    )
}