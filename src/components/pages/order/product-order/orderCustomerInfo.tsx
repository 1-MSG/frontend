import { CommonDataResType } from "@/types/commonResType";

// 배송지 정보 가져오기
async function getAddressInfo(userId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function OrderCustomerInfo({userId}: {userId: number}) {

    const addressInfo: CommonDataResType = await getAddressInfo(userId);

    const data = addressInfo.data[0];

    return (
        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem]">
                주문자 정보
            </h2>
            <div className="text-[14px] tracking-[-0.1rem]">
                <dl className="table">
                    <dt className="table-cell text-[#888888]">주문자명</dt>
                    <dd className="table-cell pl-[60px]">{data.user_name}</dd>
                </dl>
                <dl className="table mt-[5px]">
                    <dt className="table-cell text-[#888888]">연락처</dt>
                    <dd className="table-cell pl-[72px]">{data.phone_number}</dd>
                </dl>
                <dl className="table mt-[5px]">
                    <dt className="table-cell text-[#888888]">이메일</dt>
                    <dd className="table-cell pl-[72px]">{data.email}</dd>
                </dl>
                <dl className="table mt-[5px]">
                    <dt className="table-cell text-[#888888]">품절시 환불</dt>
                    <dd className="table-cell pl-[45px]">주문 시 결제수단으로 환불받기</dd>
                </dl>
            </div>
        </div>
    )
}