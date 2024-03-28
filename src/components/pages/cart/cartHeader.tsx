import BackBtn from "@/images/svgs/BackBtn";
import SearchIcon from "@/images/svgs/searchIcon";
import HomeIcon from "@/images/svgs/HomeIcon";
import Link from "next/link";

export default function CartHeader() {
    return (
        <div className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed] last:border-0">
            <div className="w-[79px] pl-[15px]"><BackBtn /></div>
            <h2 className=' text-[14px] font-medium leading-[50px]'>장바구니</h2>
            <div className="flex items-center w-[79px] h-[50px]">
                <div><SearchIcon /></div>
                <Link href="/" className="w-full h-full pt-[15px]"><HomeIcon /></Link>
            </div>
        </div>
    )
}