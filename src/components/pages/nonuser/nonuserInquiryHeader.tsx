import BtnBack from "@/components/pages/product-review/BtnBack";

export default function NonuserInquiryHeader() {
    return (
        <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
            <div className='pt-[18px] pl-[20px]'><BtnBack /></div>
            <h2 className='text-[15px] leading-[3rem] font-[600]'>비회원 조회하기</h2>
            <div className='flex items-center w-[56px] h-[50px]'></div>
        </div>
    )
}