import OrderLoginPost from "@/components/pages/nonuser/orderLoginPost";
import CategoryCrooked from "@/images/svgs/CategoryCrooked";
import Link from "next/link";

export default function Page() {
    return (
        <main className="px-[30px] py-[20px]">
            <div className="">
                <form>
                    <div className=''>
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="text" placeholder="주문자명" maxLength={20} className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]"/>
                        </p>
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="number" placeholder='휴대폰 번호 (  "  -  "  없이 입력)' maxLength={11} className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]"/>
                        </p>
                        <p className="mt-[10px]">
                            <label></label>
                            <input type="text" placeholder="이메일 주소" className="w-full px-[11px] py-[10px] text-[13px] border placeholder:tracking-[-0.07rem]"/>
                        </p>
                        <OrderLoginPost/>
                        <div className="mt-[30px]">
                            <span>
                                <input type="checkbox"/>
                                <label className="pl-[3px] text-[13px]">&#91;필수&#93;만 14세 이상 고객입니다</label>
                            </span>
                        </div>
                        <div className="w-full mt-[20px] text-[13px] tracking-[-0.07rem] ">
                            <button className="w-1/2 h-[50px] border border-[#222222]">취소</button>
                            <button className="w-1/2 h-[50px] bg-[#222222] border border-[#222222] text-white">주문하기</button>
                        </div>
                    </div>
                </form>
            </div>
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