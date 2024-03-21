import BackBtn from "@/images/svgs/BackBtn";
import SearchIcon from "@/images/svgs/searchIcon";
import EmptyCartUser from "./components/emptyCartUser";
import HomeIcon from "@/images/svgs/HomeIcon";
import NotLogin from "./components/notLogin";
import NotUser from "./_serverComponents/notUser";
import OrderProductInfo from "./components/orderProductInfo";
import UniverseBg from "./components/universeBg";
import CardEvent from "./components/cardEvent";



export default function Page() {

    return (
        <div>
            <div className="pb-[100px]">
                <div className="h-[50px] justify-between flex items-center leading-[2.7rem] border-b border-[#ededed] last:border-0">
                    <div className="w-[79px]"><BackBtn/></div>
                    <h2 className=' text-[14px] font-medium leading-[50px]'>장바구니</h2>
                    <div className="flex items-center w-[79px] h-[50px]">
                        <div><SearchIcon/></div>
                        <div className="w-full h-full pt-[10px]"><HomeIcon /></div>
                    </div>
                </div>

                {/* 비회원일 때 장바구니 물건이 없으면 */}
                {/* <NotLogin/> */}
                {/* 비회원일 때 장바구니 물건이 있으면*/}
                {/* <NotUser/> */}

                {/* 회원일 때 장바구니 물건이 없으면*/}
                {/* <EmptyCartUser/>*/}


                {/* 주문상품유닛 */}
                <OrderProductInfo/>
                
                <UniverseBg/>
                <CardEvent/>

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
                        <p>전체상품 개 원 + 배송비 원 = 원</p>
                        <p className="text-[#ff5452]">청구할인 혜택보기</p>
                    </div>
                    <div className="bg-[#ff5452] h-[52px] leading-[52px] text-center text-white text-[16px] ">주문하기</div>
                </div>
            </div>
        </div>
    )
}