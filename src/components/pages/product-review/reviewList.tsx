import Link from "next/link";
import data from '@/dummydata/review_create_data.json'
import SelectCustom from "@/images/svgs/selectCustom";

export default function ReviewList() {
    return (
        <div className="pt-[30px]">

            <div className='flex text-[13px] items-center'>
                <div>
                    <select className="appearance-none text-[#474f4e] pr-[30px] pt-[3px] items-start">
                        <option>SSG</option>
                    </select>
                </div>
                <div className="inline-block pb-[2px] pl-[10px]"><SelectCustom/></div>
                <div className="text-[12px] text-[#e5e5e5]">|</div>
                <div>
                    <select className="appearance-none text-[#474f4e] pr-[10px] pt-[3px] items-start">
                        <option>최근주문순</option>
                    </select>
                </div>
                <div className="inline-block pb-[2px]"><SelectCustom/></div>
                <div className='flex text-[#a0a1a0] text-[12px] pt-[3px]'>
                    <p className="pr-[1px]">리뷰 등록/혜택 안내</p>
                </div>
            </div>

            <div className="pt-[5px] pb-[5px]">
                {data.read_review.map((review, index) => {
                    return (
                        <div key={index} className="border-b border-[#ededed] last:border-0">
                            <div className="pb-[15px]">
                                <em className="not-italic text-[12px] text-[#a0a1a0]">{review.order_created_at} &#40;{review.order_id}&#41;</em>
                                <div className="w-full grid grid-cols-4">
                                    <img src={review.product_img_url} alt="" className="h-[87px] w-[87px] rounded-lg inline-block" />
                                    <p className="col-start-2 col-end-5 text-[13px] pl-[13px]">{review.product_name}</p>
                                </div>
                            </div>
                            <div className='w-screen'>
                                <Link href="/product-review/create">
                                    <button className='bottom-0 w-11/12 mb-3 font-bold pt-3 pb-3 rounded-lg border-solid border border-black text-[13px]'>리뷰쓰기</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

