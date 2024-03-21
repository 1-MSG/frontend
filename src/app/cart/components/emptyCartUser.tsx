import Position from "@/images/svgs/Position";

// 회원 - 장바구니 비었을 때
export default function EmptyCartUser() {

 // 데이터 받아와야 함
    
    return (
        <div>
            <div className="my-[20px] mx-[16px] tracking-[-0.07rem] ">
                <div>
                    <div className="my-[11px]">
                        <div className="">
                            <div className="inline-block pt-[4px] w-[20px] h-[20px] "><Position/></div>
                            <h3 className="inline-block pl-[3px] text-[18px] font-bold">배송지명</h3>
                            <span className="ml-[3px] text-white text-[12px] font-medium bg-[#ff5452] pt-[2px] px-[5px] pb-[2px] leading-[18px] ">기본배송지</span>
                        </div>
                        <p className="text-[13px] text-[#666666]">주소</p>
                    </div>
                    <div className="text-[13px] text-[#666666]">
                        <div className="flex text-center">
                            <div className="w-1/2 py-[8px] border border-[#ededed]">
                                여러 곳으로 한방에
                            </div>
                            <div className="w-1/2 py-[8px] border border-[#ededed]">
                                배송지 변경
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-[40px] px-[50px]">
                    <p className="mb-[40px] text-[18px] text-center">장바구니에 담긴 상품이 없습니다.</p>
                </div>
            </div>  
            <div className="border-b-[#f4f4f4] border-2"></div>
                <div className="pt-[20px] pb-[40px] px-[16px] tracking-[-0.1rem] text-[#666666]">
                    <h3 className="text-[16px]"><strong>장바구니 상품안내</strong></h3>
                    <ul className="mt-[10px] text-[13px]">
                        <li className="">- 장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                        <li className="mt-[5px]">- 상품 우측 상단의 핀셋 아이콘으로 '계속 담아두기'를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
                    </ul>
                </div>
        </div>
    )
}