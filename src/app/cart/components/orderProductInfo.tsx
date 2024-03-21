'use client'
import Link from "next/link"
import DeleteCart from "@/images/svgs/DeleteCart"
import data from "@/app/(commonAccess)/dummydata/cart.json"
import ProductCount from "./productCount"

export default function OrderProductInfo() {
    let arr = [];
    const info = data[0]
    const pullCount = (count: number) => console.log(count);


    return (

        <div>
            <div>
                <div className="flex py-[10px] px-[16px] text-[12px] text-[#666666] leading-[12px]">
                    <div>
                        <span>
                            <input type="checkbox" className="" />
                        </span>
                        <span>전체</span>
                        <span>품절삭제</span>
                        <span>선택상품만 보기</span>
                    </div>
                    <div>
                        <span>배송방법변경</span>
                    </div>
                </div>
            </div>
            <div className="">
                {info.product_info.map((list, i) => {
                    return (
                        <div className="grid grid-cols-4 px-[16px] py-[20px] border-b border-b-[#ededed] last:border-b-none">
                            <div className="w-[87px] h-[87px]">
                                <img src={list.product_img_url} alt="" />
                            </div>
                            <div className="col-start-2 col-end-5 ml-[10px] mb-[6px]">

                                <div className="flex text-[13px] tracking-[-0.05rem]">
                                    <Link href="">
                                        <strong>{list.product_brand} </strong>
                                        <span>{list.product_name}</span>
                                    </Link>
                                    <div className="pl-[5px] h-[28px] w-[28px]">
                                        <button><DeleteCart /></button>
                                    </div>
                                </div>
                                <div className="basis-full text-[12px] tracking-[-0.05rem]">{list.product_option_detail}</div>

                                {/* 수량 변경 */}
                                <ProductCount quantity={list.cart_product_quantity} product_price={list.product_price} product_rate={list.product_rate} pullCount={pullCount} />


                                {/* 옵션변경 버튼, 바로구매 버튼 */}
                                <div className="flex mt-[8px] w-full h-[36px] text-[13px] text-center tracking-[-0.1rem]">
                                    <button className="w-1/2 border border-[#ededed]">옵션변경</button>
                                    <button className="w-1/2 border border-[#ededed] font-bold">바로구매</button>
                                </div>
                            </div>
                        </div>
                    )
                })}


                <div className="bg-[#f4f4f4] mx-[16px] mb-[20px] p-[12px] text-[13px] text-center tracking-[-0.05rem]">
                    <div>
                        <p>295,740원 + 배송비 0원 = <strong>295.730원</strong></p>
                    </div>
                    <div className="bg-white mt-[10px] pt-[8px] px-[10px] pb-[7px]">
                        배송비 절약상품 보러가기
                    </div>
                </div>

                <div className="border-[2px] border-[#f4f4f4]"></div>

                <div>
                    <div className="px-[16px] pt-[16px] pb-[20px]">
                        <h3><strong className="text-[20px] font-bold">결제 예정금액</strong></h3>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>주문금액</dt>
                            <dd>+원</dd>
                        </dl>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>상품할인</dt>
                            <dd className="text-[#ff5452]">-원</dd>
                        </dl>
                        <dl className="flex mt-[6px] text-[13px]">
                            <dt>배송비</dt>
                            <dd>+원</dd>
                        </dl>
                        <dl className="flex mt-[10px] pt-[10px] ">
                            <dt>총 결제예정금액</dt>
                            <dd>원</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    )
}