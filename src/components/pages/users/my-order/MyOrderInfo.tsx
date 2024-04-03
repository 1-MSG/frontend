import MyOrderDetail from "./MyOrderDetail";

export default function MyOrderInfo() {
    return (
        <>
            <div className="mx-[16px] mb-[12px] pb-[3px] border-b border-[#e5e5e5] tracking-[-0.05rem]">
                <div className="mt-[20px] py-[4px]">
                    <span className="text-[16px] text-[#222222] font-bold">
                        2024.04.02
                    </span>
                    <span className="ml-[5px] text-[13px] text-[#969696]">
                        123456789
                    </span>
                </div>
                <div className="mt-[1px] text-[13px]">
                    결제상세 0원
                </div>
            </div>


            {/* 주문 별 상품 상세 map*/}
            <MyOrderDetail/>
        </>
    )
}