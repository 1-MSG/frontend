import BtnBack from "@/components/pages/product-review/BtnBack";
import CartIcon from "@/images/svgs/CartIcon";
import SearchIcon from "@/images/svgs/searchIcon";
import Link from "next/link";

export default function SpecialPriceHeader() {
    return(
        <div className="sticky flex bg-white h-[50px] top-0 z-20 overflow-x-scroll overflow-y-hidden">
            <div className='w-[80px] pt-[19px] pl-[20px]'><BtnBack /></div>
            <div className="flex px-[12px] text-[14px] font-bold text-center tracking-[-0.05rem]">
                <div className="pt-[18px] px-[8px] min-w-[55px]">상품</div>
                <div className="pt-[18px] px-[8px] min-w-[55px]">리뷰</div>
                <div className="pt-[18px] px-[8px] min-w-[55px]">추천</div>
            </div>
            <div className="flex">
                <SearchIcon />
                <Link href="/cart" className="pt-[8px] pr-[8px]"><CartIcon w={32} h={32}/></Link>
            </div>
        </div>
    )
}