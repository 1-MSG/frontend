import Link from "next/link";
import HomeIcon from "@/images/svgs/HomeIcon"
import OrderInfo from "./_components/orderInfo";
import Benefit from "./_serverComponents/benefit";
import data from "@/app/(commonAccess)/dummydata/orderInfomation.json"

export default function Page() {
    const giveData = data[0];

    return (
        <div>
            <div className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed]">
                <div className='flex items-center w-[56px]'></div>
                <h2 className='text-[14px] font-medium leading-[50px]'>주문완료</h2>
                <div className="h-full w-[50px] pt-[10px] pl-[10px]"><HomeIcon /></div>
            </div>

            <div>
                <div className="pt-[40px] px-[16px] pb-[24px] border-b-[10px] border-[#f5f5f5]">
                    <p className="text-[22px] tracking-[-0.1rem] text-center"><strong className="">주문이 완료되었습니다.</strong></p>
                </div>

                {/* 주문자 정보, 주문 정보 */}
                <OrderInfo data={giveData}/>

                {/* 혜택안내 */}
                <Benefit total={giveData.total_amount}/>

            </div>
        </div>
    )
}