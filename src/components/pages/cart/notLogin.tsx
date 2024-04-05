import EmptyCart from "./emptyCart";

export default function NotLogin() {
    return (
        <div>
            <div className="pt-[1px] pb-[100px]">
                <div className="my-[40px] px-[50px] text-center tracking-[-0.1rem]">
                    <div className="grid place-items-center mt-[50px] mb-[20px] "><EmptyCart /></div>
                    <p className="text-[18px]">장바구니에 담긴 상품이 없습니다.</p>
                    <p className="mt-[10px] text-[14px]">로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!</p>
                    <div className="mt-[40px]">
                        <button className="bg-[#ff5452] text-white text-[18px] h-[60px] w-full font-medium">로그인하기</button>
                    </div>
                </div>
                <div className="border-b-[#f4f4f4] border-2"></div>
                <div className="pt-[20px] pb-[40px] px-[16px] tracking-[-0.1rem] text-[#666666]">
                    <h3 className="text-[16px]"><strong>장바구니 상품안내</strong></h3>
                    <ul className="mt-[10px] text-[13px]">
                        <li className="">- 장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                        <li className="mt-[5px]">- 상품 우측 상단의 핀셋 아이콘으로 &#39;계속 담아두기&#39;를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}