import UniverseBg from "@/components/pages/cart/universeBg";
import CardEvent from "@/components/pages/cart/cardEvent";

export default function CartTotal(props:any) {

    let value = props.value;
    let finalOriginal = props.finalOriginal;
    let finalDiscount = props.finalDiscount;
    let finalDelivery = props.finalDelivery;
    let finalPrice = finalOriginal - finalDiscount + finalDelivery


    // ------------ 숫자 쉼표 -------------
    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    
    return (
        <div>
            <div className="">
                <div className="border-[2px] border-[#f4f4f4]"></div>

                <div>
                    <div className="px-[16px] pt-[16px] pb-[20px]">
                        <h3><strong className="text-[20px] font-bold">결제 예정금액</strong></h3>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>주문금액</dt>
                            <dd>+{priceToString(finalOriginal)}원</dd>
                        </dl>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>상품할인</dt>
                            <dd className="text-[#ff5452]">-{priceToString(finalDiscount)}원</dd>
                        </dl>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>배송비</dt>
                            <dd>+{priceToString(finalDelivery)}원</dd>
                        </dl>
                        <dl className="flex mt-[10px] pt-[10px] ">
                            <dt>총 결제예정금액</dt>
                            <dd>{priceToString(finalPrice)}원</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <UniverseBg />
            <CardEvent />

            <div>
                <div className="pt-[20px] px-[16px] pb-[40px] text-[#666666] tracking-[-0.1rem]">
                    <h3 className="text-[16px]"><strong>장바구니 상품안내</strong></h3>
                    <ul className="mt-[10px] text-[13px]">
                        <li className="">- 장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                        <li className="mt-[5px]">- 상품 우측 상단의 핀셋 아이콘으로 '계속 담아두기'를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
                    </ul>
                </div>
            </div>

            <div className="bottom-0 fixed w-full z-10 bg-white rounded-t-md shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)] tracking-[-0.07rem]">
                <div className="p-[16px] text-[13px]">
                    <p>전체상품 {value}개 {priceToString(finalOriginal - finalDiscount)}원 + 배송비 {priceToString(finalDelivery)}원 = {priceToString(finalPrice)}원</p>
                    <p className="text-[#ff5452]">청구할인 혜택보기</p>
                </div>
                <div className="bg-[#ff5452] h-[52px] leading-[52px] text-center text-white text-[16px] ">주문하기</div>
            </div>
        </div>
    )
}