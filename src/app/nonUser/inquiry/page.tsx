import CircleFalse from "@/images/svgs/CircleFalse";
import CircleTrue from "@/images/svgs/CircleTrue";
import CategoryCrooked from "@/images/svgs/CategoryCrooked";
import Link from "next/link";

export default function Page() {
    return (
        <main className="px-[30px] py-[20px]">
            <form>
                <ul className="mt-[20px] flex w-full">
                    <li className="mx-[15px] w-1/2">
                        <div className="float-left pr-[5px]"><CircleTrue /></div>
                        <p className="font-extrabold text-[15px] text-[#666666]">주문/배송 조회</p>
                    </li>
                    <li className="mx-[15px] w-1/2">
                        <div className="float-left pr-[5px]"><CircleFalse /></div>
                        <p className="font-extrabold text-[15px] text-[#5e5e65]">여행 예약 조회</p>
                    </li>
                </ul>
                <div>
                    <div className="mt-[40px]">
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="text" placeholder="주문자명" maxLength={20} className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]" />
                        </p>
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="number" placeholder='휴대폰 번호 (  "  -  "  없이 입력)' maxLength={11} className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]" />
                        </p>
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="number" placeholder='주문 번호 (  "  -  "  없이 입력)' className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]" />
                        </p>
                        <div className="w-full mt-[30px] text-[13px] tracking-[-0.07rem] ">
                            <button className="w-1/2 h-[50px] border border-[#222222]">취소</button>
                            <button className="w-1/2 h-[50px] bg-[#222222] border border-[#222222] text-white">조회하기</button>
                        </div>
                        <div className="mt-[20px]">
                            <ul className="text-[#9b9b9b] text-[12px] tracking-[-0.07rem]">
                                <li>&#183; 상품 주문 시 입력한 주문자 정보로 조회가 가능합니다.</li>
                                <li>&#183; 여행 상품은 	&#91;여행 예약 조회&#93;에서 확인하실 수 있습니다.</li>
                                <li>&#183; 주문번호를 모르시는 경우 고객센터&#40;1577-3419&#41;로 문의해주세요.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>

            <div className="mt-[144px] text-center">
                <span className="block text-[11px] text-[#9b9b9b] text-center tracking-[-0.07rem]">SSG.COM 회원가입을 하시면 더 많은 혜택을 받으실 수 있습니다.</span>
                <Link href='/join' className="inline-block pt-[5px] text-center text-[11px] text-[#222222] border-b border-[#222222]">
                    <span className="float-left pr-[5px]">회원가입</span>
                    <div className="float-left pt-[3px]"><CategoryCrooked/></div>
                </Link>
            </div>
        </main>
    )
}