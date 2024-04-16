import { CommonDataResType } from "@/types/commonResType";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

// 배송지 정보 가져오기
async function getAddressInfo(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    })
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function OrderCustomerInfo() {

    const session = await getServerSession(options)
    const accessToken = session?.user.data.accessToken

    // console.log("accessToken ", accessToken);

    const Info: CommonDataResType = await getAddressInfo(accessToken);
    const data = Info.data;

    // console.log(data);


    return (
        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem]">
                주문자 정보
            </h2>
            
                <div className="text-[14px] tracking-[-0.1rem]">
                    <dl className="table">
                        <dt className="table-cell text-[#888888]">주문자명</dt>
                        <input name="userName" readOnly value={data.userName} className="table-cell pl-[60px]" />
                    </dl>
                    <dl className="table mt-[5px]">
                        <dt className="table-cell text-[#888888]">연락처</dt>
                        <input name="phoneNumber" readOnly value={data.phoneNumber} className="table-cell pl-[72px]" />
                    </dl>
                    <dl className="table mt-[5px]">
                        <dt className="table-cell text-[#888888]">이메일</dt>
                        <input name="email" readOnly value={data.email} className="table-cell pl-[72px]" />
                    </dl>
                    <dl className="table mt-[5px]">
                        <dt className="table-cell text-[#888888]">품절시 환불</dt>
                        <dd className="table-cell pl-[45px]">주문 시 결제수단으로 환불받기</dd>
                    </dl>
                </div>

        </div>
    )
}