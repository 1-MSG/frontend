import data from '@/dummydata/review_create_data.json'

export default function ReviewList2() {
    return (
        <div className='pt-[10px]'>
            <div>
                {data.map((review, index) => {
                    return (
                        <div key={index} className='border-b border-[#ededed]'>
                            <div>
                                <em className="not-italic text-[12px] text-[#a0a1a0]">{review.order_created_at} &#40;{review.order_id}&#41;</em>
                                <div className="w-full grid grid-cols-4 pt-[5px] pb-[18px]">
                                    <img src={review.product_img_url} alt="" className="h-[87px] w-[87px] rounded-lg inline-block " />
                                    <p className="col-start-2 col-end-5 text-[13px] pl-[13px]">{review.product_name}</p>
                                </div>
                            </div>
                            <div className='pb-[15px]'>
                                <div className='text-[13px] pb-[10px]'>별점</div>
                                <p className='text-[13px] pb-[2px]'>{review.review_content}</p>
                                <p className='text-[11px] text-[#a0a1a0]'>{review.review_create_at} 작성</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p className="text-[#8d8e8d] text-[10px] pt-[20px] pb-[35px]">
                판매가 중지된 상품의 경우 작성한 리뷰 리스트에서 미노출 될 수 있습니다.
            </p>
        </div>
    )
}

