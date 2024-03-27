'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import Star from '@/images/svgs/Star';
import ReviewPhotoImgSwiper from '@/components/pages/product-detail/reviewPhotoImgSwiper';
import Image from 'next/image';

export default function SpecialRriceCustomerReview(props: any) {

    const bundle = props.bundle;

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

            <div className='px-[16px] pt-[25px] pb-[34px] '>
                리뷰 별점
            </div>

            <div className='flex mb-[16px] px-[16px] tracking-[-0.05rem]'>
                <span className='text-[16px] font-bold'>포토&동영상 리뷰</span>
                <div className='text-[13px] text-[#848684]'>더보기</div>
            </div>

            <div className='pb-[16px] pl-[16px]' >
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
                >
                    {bundle.photo_reviews.map((review: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image src={review.review_img_url}
                                    alt=""
                                    width={90}
                                    height={90}
                                    className="rounded-lg first-of-type:ml-0" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className='px-[16px] mt-[60px] mb-[15px] tracking-[-0.05rem]'>
                <span className='text-[16px] font-bold'>전체 리뷰</span>
            </div>

            <div className=''>
                {bundle.product_reviews.map((reviews: any) => {
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
                                className='left-[-25px] rounded-lg'
                            >
                                {reviews.review_img_list.map((imgs: any, index:number) => {
                                    return (
                                        <SwiperSlide key={index}>

                                            <Image src={imgs.review_img_url} alt="" width={85} height={85} className="h-auto w-full max-w-28 max-h-32 mt-[12px] mb-[8px] rounded-lg" />

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
                <button className='inline-block bottom-0 w-11/12 mb-5  font-bold pt-3 pb-3 rounded-lg border border-[#ebebeb] text-[#848684] text-[13px]'>
                    더보기 &#40;{bundle.product_reviews.length}&#41;
                </button>
            </div>


        </div>
    )
}