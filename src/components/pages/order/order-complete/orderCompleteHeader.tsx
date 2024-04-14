import HomeIcon from "@/images/svgs/HomeIcon"
import Link from "next/link"

export default function OrderCompleteHeader() {
    return (
        <div className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed]">
            <div className='flex items-center w-[56px]'></div>
            <h2 className='text-[14px] font-medium leading-[50px]'>주문완료</h2>
            <div className="h-full w-[50px] pt-[10px] pl-[10px]">
                <Link href="/">
                    <HomeIcon />
                </Link>
            </div>
        </div>
    )
}