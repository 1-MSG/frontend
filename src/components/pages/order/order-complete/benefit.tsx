import Image from "next/image";
import Link from "next/link";

export default function Benefit(props:any) {
    const total = props.total

    return (
        <div className="pt-[20px] px-[16px] pb-[30px] tracking-[-0.05rem]">

            <p className="text-[17px] font-extrabold">이번 주문으로 누리는 혜택</p>
            <div className="mt-[12px] mb-[12px]">
                <div className="px-[16px] py-[24px] bg-[#f5f5f5] rounded-lg">
                    <div className="mb-[14px]">
                        <p className="font-bold text-[16px]"><strong className="text-[#6841ff]">{Math.floor(total * 0.001)}원</strong> 혜택을 받으셨어요</p>
                    </div>
                    <div className="text-[13px]">
                        <dl className="flex">
                            <dt>신세계포인트</dt>
                            <dd className="font-bold">{Math.floor(total * 0.001)}원</dd>
                        </dl>
                        <dl className="flex mt-[8px]">
                            <dt>스탬프</dt>
                            <dd className="font-bold">1개</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <p className="mt-[30px] text-[17px] font-extrabold">더 많은 혜택을 누리시려면</p>
            <div className="mt-[12px]">
                <Image src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/order/mnodr_universe_type_banner01.png&w=1125" alt="" width={100} height={100}></Image>
            </div>

            <div className="mt-[30px] pb-[30px]">
                <div className="flex pb-[60px] text-[13px] leading-[44px] text-center font-medium">
                    <Link href="/" className="h-[44px] w-1/2 border rounded-full bg-black text-white">계속 쇼핑하기</Link>
                    <Link href="" className="h-[44px] w-1/2 ml-[4px] border rounded-full">주문상품 상세보기</Link>
                </div>
            </div>
        </div>
    )
}