'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import Star from '@/images/svgs/Star';
import ReviewPhotoImgSwiper from './reviewPhotoImgSwiper';
import ReviewModal from './reviewModal';
import StarRate from './StarRate';

export default function CustomerReview(props: any) {
    const data = props.giveData;

    const [modal, setModal] = useState(false);
    const clickReviewModal = () => { setModal(!modal) }

    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    function replaceAt(word: string, i: number) {
        if (i >= word.length) {
            return word.valueOf();
        }

        return word.substring(0, i) + '*'.repeat(word.length - 3)
    }


    return (
        <div className='pb-[40px]' >
            <div className='pt-[40px] px-[16px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5] last:border-b-0'>
                <h3 className='inline-block border-b border-[#000]'>고객리뷰</h3>
            </div>

            <div className='px-[16px] pt-[25px] pb-[34px] relative text-center'>
                <span className='inline-block mt-[-3px] mr-[20px] font-bold text-[44px]'>{data.product_star}</span>
                <div className='inline-block'>
                    <StarRate product_star={data.product_star}/>
                    <span className='mt-[6px] text-[14px] font-medium'>
                        {data.product_review_count.toLocaleString()}건 리뷰
                    </span>
                </div>
            </div>

            <div className='flex mb-[16px] px-[16px] tracking-[-0.05rem]'>
                <span className='text-[16px] font-bold'>포토&동영상 리뷰</span>
                <div className='text-[13px] text-[#848684]'>더보기</div>
            </div>

            <div className='pb-[16px] pl-[16px]' >
                <ReviewPhotoImgSwiper giveData={data} />
            </div>

            <div className='px-[16px] mt-[60px] mb-[15px] tracking-[-0.05rem]'>
                <span className='text-[16px] font-bold'>전체 리뷰</span>
            </div>

            <div className=' py-[10px] px-[16px] bg-[#f5f5f5] w-full'>
                <ul className='flex whitespace-nowrap overflow-x-hidden text-[12px] text-[#888888]'>
                    <li className='py-[8px] px-[10px] bg-white rounded-full'>만족도</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>디자인</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>사이즈</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>착용감</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>코디</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>소재&#183;마감</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>가격</li>
                    <li className='ml-[7px] py-[8px] px-[10px] bg-white rounded-full'>포장&#183;배송</li>
                </ul>
            </div>

            <div className=''>
                {data.product_reviews.map((reviews: any) => {
                    return (
                        <div key={reviews.review_id} className='mx-[16px] first:pt-[15px] pt-[30px] pb-[20px] border-b border-[#f5f5f5] last:border-none' >
                            <div className='relative '>
                                <div className='h-[12px] w-[12px] float-left pt-[2px]'><Star /></div>
                                <div className='float-left mr-[4px] pl-[2px] font-medium text-[12px] after:content-["|"] after:w-[1px] after:absolute after:pl-[3px] after:text-[12px] after:top-0 after:text-[#e5e5e5]'>{reviews.review_star}</div>
                                <div className='float-left h-[10px] ml-[5px] mr-[10px] text-[#96969d] after:content-["|"] after:w-[1px] after:absolute after:pl-[3px] after:text-[12px] after:top-0 after:text-[#e5e5e5] text-[11px]' >{reviews.review_createdate}</div>
                                <div className='ml-[5px] mr-[10px] text-[#96969d] text-[11px]'>{replaceAt(reviews.reviewer, 3)}</div>
                            </div>
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation]}
                                spaceBetween={10}
                                slidesPerView={3.8}
                                loop={false}
                                autoplay={false}
                                navigation={false}
                                className='left-[-25px]'
                            >
                                {reviews.review_img_url.map((imgs: any) => {
                                    return (
                                        <SwiperSlide key={imgs.review_img_id}>

                                            <img src={imgs.review_img_detail_url} alt="" className="h-auto w-full max-w-28 max-h-32 mt-[12px] mb-[8px] rounded-lg" />

                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                            <div className='text-[13px]'>{reviews.review_content}</div>
                        </div>
                    )
                })}
            </div>

            <div className='text-center'>
                <button className='inline-block bottom-0 w-11/12 mb-5  font-bold pt-3 pb-3 rounded-lg border border-[#f5f5f5] text-[#848684] text-[13px]'
                    onClick={() => setModal(true)}>
                    더보기 &#40;{data.product_reviews.length}&#41;
                </button>
            </div>
            {
                modal &&
                <ReviewModal clickModal={clickReviewModal} giveData={data} />
            }

        </div>
    )
}