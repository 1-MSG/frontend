import ToggleCircleTrue from '@/images/svgs/ToggleCircleTrue';
import Ssgpay from '@/components/pages/order/product-order/ssgpay';
import Kakaopay from '@/components/pages/order/product-order/kakaopay';
import Payco from '@/components/pages/order/product-order/payco';

export default function OrderPaymentInfo({SaleTotal}: {SaleTotal: number}) {

    return (

        <div className="h-[445px] pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
            <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">결제방법</h2>
            <p className="pb-[20px] ">
                <span className="float-left w-[24px] h-auto pt-[2px]"><ToggleCircleTrue /></span>
                <span className="text-[15px] font-extrabold tracking-[-0.1rem]">일반결제</span>
            </p>

            <ul className="grid gap-1 grid-cols-3 grid-row-3 text-center text-[13px] leading-[48px] tracking-[-0.1rem]">
                <li className="w-full border border-black bg-black text-white">신용카드</li>
                <li className="w-full m-auto border border-[#d8d8d8] px-[22px] py-[15px]"><Ssgpay /></li>
                <li className="w-full border border-[#d8d8d8] px-[21px] py-[13px]"><Kakaopay /></li>
                <li className="w-full border border-[#d8d8d8] px-[23px] py-[14px]"><Payco /></li>
                <li className="border border-[#d8d8d8]">휴대폰 소액결제</li>
                <li className="border border-[#d8d8d8]">무통장 입금</li>
                <li className="border border-[#d8d8d8]">실시간 계좌이체</li>
                <li className="border border-[#d8d8d8]">해외발급 신용카드</li>
                <li className="border border-[#d8d8d8]">Alipay</li>
            </ul>

            <div className="mt-[20px]">
                <div className="border border-[#d8d8d8] h-[40px] pl-[15px] text-[13px] leading-[40px]">카드를 선택해 주세요.<span></span></div>
                <div className="mt-[5px] border border-[#d8d8d8] h-[40px] pl-[15px] text-[13px] leading-[40px]">일시불<span></span></div>
                <div className="flex mt-[5px] p-[15px] bg-[#fafafa] rounded-lg text-[13px] font-bold">
                    <p>결제금액</p>
                    <p><span className='font-medium'>{SaleTotal.toLocaleString()}</span>원</p>
                </div>
            </div>
        </div>

    )
}