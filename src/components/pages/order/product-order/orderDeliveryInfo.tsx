import { CommonDataResType } from "@/types/commonResType";

// 배송지 정보 가져오기
async function getAddressInfo(userId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function OrderDeliveryInfo({userId}: {userId: number}) {

    const addressInfo: CommonDataResType = await getAddressInfo(userId);


    const data = addressInfo.data[0];

    return (
        <>
            <div className="pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
                <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">배송지 : {data.addressName}</h2>
                <p className="text-[13px] tracking-[-0.06rem]">{data.address}</p>
                <p className="mt-[10px] text-[12px] text-[#777777] tracking-[-0.06rem]">{data.recipient} / {data.mobileNumber}</p>
            </div>
            <div className="pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
                <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">배송 요청사항</h2>
                <p className="text-[13px] tracking-[-0.05rem]">
                    <span className="text-[#777777] font-bold pr-[10px]">택배배송 요청사항</span>
                    <span>부재 시 경비실에 맡겨주세요</span>
                </p>
            </div>
        </>
    )
}