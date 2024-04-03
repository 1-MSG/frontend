import Image from "next/image";
import Link from "next/link";

export default function MyOrderDetail() {
    return (
        <>
            <div className="px-[16px] pt-[10px] pb-[16px] grid grid-cols-4">
                <div>
                    <Image src="https://sitem.ssgcdn.com/75/03/35/item/1000565350375_i1_140.jpg" alt="" width={75} height={75} />
                </div>
                <div className="col-span-3">
                    <div className="mb-[10px]">
                        <Link href="" className="text-[13px] tracking-[-0.05rem]">
                            <strong className="text-[#222222]">
                                브랜드명
                            </strong>
                            <span className="pl-[4px] text-[#333333]">상품명</span>
                        </Link>
                    </div>
                    <p className="text-[13px] text-[#333333]">옵션</p>
                    <div className="mt-[10px]">
                        <div>
                            <span className="text-[#222222]">
                                <span className="text-[18px] font-medium">10000</span>
                                <em className="not-italic px-[1px] mb-[2px] text-[11px]">원</em>
                            </span>
                            <span className="pl-[5px] text-[#969696] text-[13px] line-through">
                                <span>정상가</span>
                                <em className="not-italic">원</em>
                            </span>
                            <span className="pl-[5px] text-[13px]">
                                1개
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[16px]">
                <div className="grid grid-cols-2 gap-2 tracking-[-0.05rem]">
                    <div className="py-[10px] bg-[#f9f9f9] border border-[#dedede] text-[15px] text-[#333333] text-center">
                        반품신청
                    </div>
                    <div className="py-[10px] bg-[#f9f9f9] border border-[#dedede] text-[15px] text-[#333333] text-center">
                        교환신청
                    </div>
                </div>
                <div className="py-[10px] mt-[8px] bg-[#f9f9f9] border border-[#dedede] text-[15px] text-[#333333] text-center">
                    리뷰작성
                </div>
            </div>
            <div className="flex mt-[20px] mb-[30px] px-[15px]">
                <p className="ml-auto text-[12px]">전체상품 다시담기</p>
            </div>
            <div className="border-b"></div>
        </>

    )
}