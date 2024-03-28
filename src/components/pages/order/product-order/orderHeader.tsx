import BtnBack from "./btnBack";

export default function OrderHeader() {
    return (
        <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
            <BtnBack/>
            <h2 className='text-[15px] leading-[3rem] font-[600]'>결제하기</h2>
            <div className='flex items-center w-[56px] h-[50px]'></div>
        </div>
    )
}