import CartIcon from "@/images/svgs/CartIcon";
import BtnBack from "../../product-review/BtnBack";

import Link from "next/link";
import HomeIcon from "@/images/svgs/HomeIcon";

export default function MyOrderHeader() {
    return(
        <header className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed] last:border-0">
            <div className="w-[84px] pl-[15px]"><BtnBack /></div>
            <h2 className=' text-[14px] font-medium leading-[50px]'>나의주문내역</h2>
            <div className="flex items-center w-[84px] h-[50px] place-self-center">
                <div className="w-1/2 pl-[3px]"><CartIcon w={34} h={34}/></div>
                <Link href="/" className="w-1/2 h-[50px] pt-[15px] pl-[5px]"><HomeIcon /></Link>
            </div>
        </header>
    )
}