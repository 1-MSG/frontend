import BtnBack from "../product-review/BtnBack";

export default function LikeHeader() {
    return (

        <div className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed] last:border-0">
            <div className="w-[79px] pl-[15px]"><BtnBack /></div>
            <h2 className=' text-[14px] font-medium leading-[50px]'>좋아요</h2>
            <div className="w-[79px] h-[50px]"></div>
        </div>

    )
}