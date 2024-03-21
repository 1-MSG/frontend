import Link from "next/link";
import BtnQuestion from "@/images/svgs/GreyQuestion"
import data from '@/app/(commonAccess)/dummydata/review_create_data.json'

export default function ReviewList() {
    return (
        <div className="pt-[30px]">
            <div className='flex text-[13px] items-center'>
                <div>
                    <select name='' className="appearance-none text-[#474f4e] bg-[url('/assets/image/etc/Triangle.png')] bg-no-repeat bg-right pr-10 pt-[3px] items-start">
                        <option>SSG</option>
                    </select>

                </div>
                <div>
                    <select className="appearance-none text-[#474f4e] bg-[url('/assets/image/etc/Triangle.png')] bg-no-repeat bg-right pr-10 pt-[3px] items-start">
                        <option>최근주문순</option>
                    </select>
                </div>
                <div className='flex text-[#a0a1a0] text-[12px] pt-[3px]'>
                    <p className="pr-[1px]">리뷰 등록/혜택 안내</p>
                </div>
            </div>
            <div className="pt-[5px] pb-[5px]">
                {data.map((review, index) => {
                    return (
                        <div key={index} className="pb-[15px] border-b border-[#ededed]">
                            <em className="not-italic text-[12px] text-[#a0a1a0]">{review.order_created_at} &#40;{review.order_id}&#41;</em>
                            <div className="w-full">
                                <img src={review.product_img_url} alt="" className="h-auto w-1/5 rounded-lg inline-block "/>
                                <p className="inline-block text-[13px] pl-[13px]">{review.product_name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-screen'>
                <Link href="/product-review/create">
                    <button className='bottom-0 w-11/12 mb-5 font-bold pt-3 pb-3 rounded-lg border-solid border border-black text-[13px]'>리뷰쓰기</button>
                </Link>

            </div>
        </div>
    )
}

