import MyOrderHeader from "@/components/pages/users/my-order/MyOrderHeader";
import MyOrderInfo from "@/components/pages/users/my-order/MyOrderInfo";

// 유저 주문 내역 불러오기 fetch

export default function Page() {
    return (
        <>
            <MyOrderHeader />

            <main>
                <div className="h-[44px]">
                    <p className="text-[15px] font-bold text-[#222222] text-center leading-[44px]">주문배송</p>
                </div>

                <div className="flex px-[16px] py-[13px] text-[13px] text-[#777777] tracking-[-0.05rem] bg-[#f5f5f5]">
                    <div>
                        <span className="pr-[5px]">최근 3개월</span>
                        <span className="text-[11px] text-[#e2e2e2]">|</span>
                        <span className="pl-[5px]">전체</span>
                    </div>
                    <div>
                        <span>상세조회</span>
                    </div>
                </div>

                {/* 날짜 별 결제 내역 map */}
                <MyOrderInfo/>
            </main>
        </>
    )
}