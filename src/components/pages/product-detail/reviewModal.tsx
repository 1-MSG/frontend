import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { useRef, useState } from 'react';
import SelectCustom from "@/images/svgs/selectCustom";
import Star from '@/images/svgs/Star';
import BackBtn from '@/images/svgs/BackBtn';
import Recommendation from "@/images/svgs/Recommendation";
import ReviewPhotoImgSwiper from "./reviewPhotoImgSwiper";
import ReviewEntireImgSwiper from "./reviewEntireImgSwiper";


const ReviewModal = (props: any) => {
    // 전달받은 state 함수
    const clickReviewModal = props.clickModal;
    const data = props.giveData;

    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    function replaceAt(word: string, i: number) {
        if (i >= word.length) {
            return word.valueOf();
        }

        return word.substring(0, i) + '*'.repeat(word.length - 3)
    }

    return (
        <div className='w-full h-full z-10 top-0 left-0 fixed flex justify-center items-center'>
            <div className='bg-white h-full w-full relative overflow-scroll'>
                <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                    <div onClick={clickReviewModal} className='pt-[16px] pl-[20px]'><BackBtn /></div>
                    <h2 className='text-[16px] leading-[3rem] font-bold tracking-[-0.05rem]'>리뷰 전체 보기</h2>
                    <div className='flex items-center w-[56px] h-[50px]'></div>
                </div>

                <div className='px-[16px] pt-[25px] pb-[34px]'>
                    별점
                </div>

                <div className='flex mb-[16px] px-[16px] tracking-[-0.05rem]'>
                    <span className='text-[16px] font-bold'>포토&동영상 리뷰</span>
                    <div className='text-[13px] text-[#848684]'>더보기</div>
                </div>
                <div className='pb-[20px] pl-[16px]'>
                    <ReviewPhotoImgSwiper giveData={data} />
                </div>

                <div className='h-[62px] leading-[52px] mt-[60px] px-[20px] text-[13px] border-t-[10px] border-[#f5f5f5]'>
                    <div className='float-left'>
                        <p className='float-left'>전체&#40;{data[0].product_reviews.length}&#41;</p>
                        <div className='float-left pt-[22px] pl-[4px]'><SelectCustom /></div>
                    </div>
                    <div className='float-right'>
                        <p className='float-left'>추천순</p>
                        <div className='float-right pt-[19px] pl-[3px]'><Recommendation /></div>
                    </div>
                    <div className='float-right mr-[15px]'>
                        <p>옵션별 보기</p>
                        <p></p>
                    </div>
                </div>
                <div className='h-[1px] bg-[#f5f5f5]'></div>
                <div className='pb-[20px] border-b-[40px] border-[#f5f5f5]'>
                    {data[0].product_reviews.map((reviews: any, index: number) => {
                        return (
                            <div key={index} className='p-[20px]'>
                                <div className=''>
                                    <div className='h-[12px] w-[12px] float-left pt-[3px]'><Star w={12} h={12} /></div>
                                    <p className='ml-[4px] text-[12px]'>{reviews.review_star}</p>
                                </div>
                                <div className='relative mt-[7px] mb-[20px]'>
                                    <p className='float-left h-[10px] mr-[10px] text-[#96969d] text-[11px] after:content-["|"] after:w-[1px] after:absolute after:pl-[3px] after:text-[12px] after:top-0 after:text-[#e5e5e5]' >{reviews.review_createdate}</p>
                                    <p className='ml-[5px] mr-[10px] text-[#96969d] text-[11px]'>{replaceAt(reviews.reviewer, 3)}</p>
                                </div>
                                <div className='text-[13px]'>
                                    <p className='float-left text-[#777777] font-bold pr-[10px]'>구매옵션</p>
                                    <p className='text-[#96969d]'>사이즈: 095</p>
                                </div>
                                <ReviewEntireImgSwiper reviews={reviews}/>
                                <div className='mt-[15px] text-[14px]'>
                                    {reviews.review_content}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReviewModal