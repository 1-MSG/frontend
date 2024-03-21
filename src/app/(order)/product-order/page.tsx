import dummydata from '@/app/(commonAccess)/dummydata/order.json'
import BackBtn from '@/images/svgs/BackBtn';
import ToggleCircleTrue from '@/images/svgs/ToggleCircleTrue';
import Ssgpay from './_components/ssgpay';
import Kakaopay from './_components/kakaopay';
import Payco from './_components/payco';
import Crooked from './_components/crooked';


export default function Page() {
    const data = dummydata[0];

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function deliveryFee() {
        
    }

    return (
        <div className='w-full h-auto'>
            <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                <BackBtn/>
                <h2 className='text-[15px] leading-[3rem] font-[600]'>결제하기</h2>
                <div className='flex items-center w-[56px] h-[50px]'></div>
            </div>

            {/*  */}
            <div className="bg-[#f5f5f5] pt-[20px]">
                <form>
                    <div className="px-[14px] pb-[60px]">
                        <div className="pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
                            <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">배송지 : {data.address_name}</h2>
                            <p className="text-[13px] tracking-[-0.06rem]">{data.address}</p>
                            <p className="mt-[10px] text-[12px] text-[#777777] tracking-[-0.06rem]">{data.user_name} / {data.phone_number}</p>
                        </div>
                        <div className="pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
                            <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">배송 요청사항</h2>
                            <p className="text-[13px] tracking-[-0.05rem]">
                                <span className="text-[#777777] font-bold pr-[10px]">택배배송 요청사항</span>
                                <span>부재 시 경비실에 맡겨주세요</span>
                            </p>
                        </div>
                        <div className="h-[445px] pt-[20px] px-[16px] pb-[20px] mb-[20px] bg-white rounded-xl">
                            <h2 className="pb-[15px] text-[18px] font-extrabold tracking-[-0.1rem]">결제방법</h2>
                            <p className="pb-[20px] ">
                                <span className="float-left w-[24px] h-auto pt-[2px]"><ToggleCircleTrue/></span>
                                <span className="text-[15px] font-extrabold tracking-[-0.1rem]">일반결제</span>
                            </p>

                            <ul className="grid gap-1 grid-cols-3 grid-row-3 text-center text-[13px] leading-[48px] tracking-[-0.1rem]">
                                <li className="border border-black bg-black text-white">신용카드</li>
                                <li className="m-auto border border-[#d8d8d8] px-[22px] py-[15px]"><Ssgpay/></li>
                                <li className="m-auto border border-[#d8d8d8] px-[21px] py-[13px]"><Kakaopay/></li>
                                <li className="m-auto border border-[#d8d8d8] px-[23px] py-[14px]"><Payco/></li>
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
                                    <p><span></span>원</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
                            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem] border-b border-[#f5f5f5]">
                                <span>결제예정금액</span>
                                <span>원</span>
                            </h2>
                            <div className="pt-[16px] text-[14px] tracking-[-0.1rem]">
                                <p className="flex">
                                    <span>주문금액</span>
                                    <span>원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>배송비</span>
                                    <span>+ 원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>할인금액</span>
                                    <span className="text-[#ff5452]">- 원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>
                                        <div className="float-left pt-[6px] pr-[3px] pl-[2px]"><Crooked /></div>
                                        <em className="not-italic text-[#888888]">상품할인</em>
                                    </span>
                                    <span className="text-[#888888]">- 원</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-t-xl">
                            <div>
                                <p className="flex text-[13px] tracking-[-0.07rem]">
                                    <span>주문정보 및 서비스 약관에 동의합니다.</span>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                        <div className="pt-[10px] px-[16px] pb-[10px] text-center bg-[#ff5452] rounded-b-xl">
                            <button className="text-[18px] font-extrabold text-white tracking-[-0.07rem]">
                                결제하기
                            </button>
                        </div>
                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
                            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem]">
                                주문자 정보
                            </h2>
                            <div className="text-[14px] tracking-[-0.1rem]">
                                <dl className="table">
                                    <dt className="table-cell text-[#888888]">주문자명</dt>
                                    <dd className="table-cell pl-[60px]">{data.user_name}</dd>
                                </dl>
                                <dl className="table mt-[5px]">
                                    <dt className="table-cell text-[#888888]">연락처</dt>
                                    <dd className="table-cell pl-[72px]">{data.phone_number}</dd>
                                </dl>
                                <dl className="table mt-[5px]">
                                    <dt className="table-cell text-[#888888]">이메일</dt>
                                    <dd className="table-cell pl-[72px]">{data.email}</dd>
                                </dl>
                                <dl className="table mt-[5px]">
                                    <dt className="table-cell text-[#888888]">품절시 환불</dt>
                                    <dd className="table-cell pl-[45px]">주문 시 결제수단으로 환불받기</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="mt-[20px] mb-[15px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
                            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem]">
                                택배배송
                            </h2>
                            <div className="">
                                <div className="inline-block align-top">
                                    <img src={data.product_img_url} className="w-[85px] h-[85px]"></img>
                                </div>
                                <div className="inline-block ml-[10px]">
                                    <p className="text-[14px]">
                                        <strong className="">{data.product_brand}</strong>
                                        <span> {data.product_name}</span>
                                    </p>
                                    <p className="mt-[5px] text-[12px] text-[#888888]">
                                        <span>옵션 : </span>
                                        <span>095</span>
                                    </p>
                                    <p className="mt-[5px] flex">
                                        <span className="text-[14px]">
                                            <em className="text-[#888888] not-italic line-through">{data.product_price}원</em>
                                            <em className="ml-[4px] not-italic font-extrabold">원</em>
                                        </span>
                                        <span className="text-[12px] text-[#888888]">
                                            수량 <em></em>개
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <button className="w-full h-[52px] bg-[#ff5452] text-[17px] text-white ">
                            <span className="font-extrabold">원</span>
                            <span className="font-semibold"> 결제하기</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )


}

