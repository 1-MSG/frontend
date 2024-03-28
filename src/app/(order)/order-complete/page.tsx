import OrderInfo from "../../../components/pages/order/order-complete/orderInfo";
import Benefit from "../../../components/pages/order/order-complete/benefit";
import data from "@/app/(commonAccess)/dummydata/orderInfomation.json"

export default function Page() {
    const giveData = data[0];

    return (
        <main>
            <div>
                <div className="pt-[40px] px-[16px] pb-[24px] border-b-[10px] border-[#f5f5f5]">
                    <p className="text-[22px] tracking-[-0.1rem] text-center"><strong className="">주문이 완료되었습니다.</strong></p>
                </div>

                {/* 주문자 정보, 주문 정보 */}
                <OrderInfo data={giveData}/>

                {/* 혜택안내 */}
                <Benefit total={giveData.total_amount}/>

            </div>
        </main>
    )
}