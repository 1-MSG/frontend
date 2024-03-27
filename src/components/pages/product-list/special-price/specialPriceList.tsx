import Like from "@/images/svgs/Like";
import Image from "next/image";
import Link from "next/link";

export default function SpecialPriceList(props: any) {
    const bundle = props.bundle;

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className="mt-[25px]">
            <p className="mt-[4px] px-[16px] text-[14px] text-[#777777] tracking-[-0.07rem]">상품번호 : {bundle.bundle_id}</p>
            {bundle.bundle_product_list.map((list: any, index: number) => {
                return (
                    <div key={index}>
                        <div className="px-[16px] pt-[10px] pb-[20px]">
                            <div className="pt-[6px] pb-[4px] border-t border-[#e5e5e5]">
                                <span className="text-[#222222] text-[12px] font-bold">상품 {index + 1}</span>
                            </div>

                            <div className="grid grid-cols-7 gap-2">
                                <div className="col-span-3">
                                    <Image src={list.product_img_url} width={150} height={150} alt='' />
                                </div>
                                <div className="col-span-4">
                                    <Link href="" className="pt-[6px] pr-[8px] text-[13px] tracking-[-0.07rem] text-[#222222]">
                                        <div>
                                            <em className="not-italic font-extrabold">{bundle.bundle_brand}   </em>
                                            {list.product_name}
                                        </div>
                                        <div className="mt-[4px] text-[#888888] line-through">
                                            <p>{priceToString(list.product_price)}원</p>
                                            <div className='inline-block items-center text-[16px]'>
                                                <p className='mr-[5px] float-left text-[#ff5452] font-bold'>{list.discount_rate}%</p>
                                                <p className='float-left text-[#222222] font-bold'>{priceToString(list.product_price * ((100 - list.discount_rate) / 100))}원</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-center items-center content-center text-center">
                                <span className="text-[12px] text-[#777777]">{priceToString(list.product_order_count)}개 구매중</span>
                                <div className="flex">
                                    <div className="border border-[#222222] text-[13px] h-[30px] mr-[7px] px-[27px] justify-center content-center">상품 선택하기</div>
                                    <div className="m-auto"><Like w={20} h={20}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}