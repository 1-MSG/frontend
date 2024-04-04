import BtnBack from "../../product-review/BtnBack";

export default function UnionHeader() {
    return (
        <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
            <div className='pt-[18px] pl-[20px]'><BtnBack/></div>
            <h2 className='text-[15px] leading-[3rem] font-[600]'>신세계포인트 통합회원 가입</h2>
            <div className='flex items-center w-[56px] h-[50px]'></div>
        </div>
    )
}