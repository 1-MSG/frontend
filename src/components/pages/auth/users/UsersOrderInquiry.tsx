import Link from "next/link";

export default function UsersOrderInquiry({order}: {order:number}) {
    return (
        <div className="tracking-[-0.05rem]">
            <div className="flex justify-between">
                <Link href="" className="">
                    <strong className="text-[18px]">주문/배송 조회</strong>
                </Link>
                <p className="border border-[#cfcfcf] rounded-lg px-[12px] text-[11px] content-center">배송지 관리</p>
            </div>

            <div className="mt-[8px] flex">
                <div className=" box-border">
                    <div className="w-[50px] h-[50px] content-center text-center bg-[#f5f5f5] rounded-xl text-[#e5e5e5] font-bold text-[18px]">
                        0
                    </div>
                    <div className="mt-[4px] text-[12px] text-[#444444] text-center">
                        주문접수
                    </div>
                </div>
                <div className=" box-border">
                    <div className="w-[50px] h-[50px] content-center text-center bg-[#f5f5f5] rounded-xl text-[#e5e5e5] font-bold text-[18px]">
                        0
                    </div>
                    <div className="mt-[4px] text-[12px] text-[#444444] text-center">
                        결제완료
                    </div>
                </div>
                <div className=" box-border">
                    <div className="w-[50px] h-[50px] content-center text-center bg-[#f5f5f5] rounded-xl text-[#e5e5e5] font-bold text-[18px]">
                        0
                    </div>
                    <div className="mt-[4px] text-[12px] text-[#444444] text-center">
                        상품준비중
                    </div>
                </div>
                <div className=" box-border">
                    <div className="w-[50px] h-[50px] content-center text-center bg-[#f5f5f5] rounded-xl text-[#e5e5e5] font-bold text-[18px]">
                        0
                    </div>
                    <div className="mt-[4px] text-[12px] text-[#444444] text-center">
                        배송중
                    </div>
                </div>
                <div className=" box-border">
                    <div className="w-[50px] h-[50px] content-center text-center bg-[#f5f5f5] rounded-xl text-[#e5e5e5] font-bold text-[18px]">
                        0
                    </div>
                    <div className="mt-[4px] text-[12px] text-[#444444] text-center">
                        배송완료
                    </div>
                </div>
            </div>

            <div className="mt-[12px] h-[40px] flex bg-[#f5f5f5] rounded-lg">
                <div className="flex px-[10px] justify-between">
                    <span className="text-[12px] text-[#444444] content-center pr-[20px]">취소</span>
                    <strong className="text-[14px] text-[#e5e5e5] content-center">0</strong>
                </div>
                <div className="flex px-[10px]">
                    <span className="text-[12px] text-[#444444] content-center pr-[20px]">교환</span>
                    <strong className="text-[14px] text-[#e5e5e5] content-center">0</strong>
                </div>
                <div className="flex px-[10px]">
                    <span className="text-[12px] text-[#444444] content-center pr-[20px]">반품</span>
                    <strong className="text-[14px] text-[#e5e5e5] content-center">0</strong>
                </div>
                <div className="flex px-[10px]">
                    <span className="text-[12px] text-[#444444] content-center pr-[20px]">구매확정</span>
                    <strong className="text-[14px] text-[#e5e5e5] content-center">{order}</strong>
                </div>
            </div>

            <div className="mt-[16px] h-[45px] text-center content-center">
                <Link href="" className="text-[13px] font-medium">
                    주문/배송 조회 보러가기
                </Link>
            </div>
        </div>
    )
}