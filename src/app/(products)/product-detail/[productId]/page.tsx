'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import data from '@/app/(commonAccess)/dummydata/product_detail_data.json'
import GreyQuestion from '@/images/svgs/GreyQuestion';
import Share from '@/images/svgs/Share';
import Star from '@/images/svgs/Star';
import Like from '@/images/svgs/Like';

// 모달은 주석 처리!

export default function Page() {

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function Rate() {
        let n = (100 - data[0].product_rate) / 100;
        return (
            <div>
                <p className='line-through text-[#777777] text-[14px]'>{priceToString(data[0].product_price)}원</p>
                <div className='inline-block items-center '>
                    <p className='mr-[5px] float-left text-[#ff5452] text-[26px] font-bold'>{data[0].product_rate}%</p>
                    <p className='float-left text-[#222222] text-[26px] font-bold'>{priceToString(data[0].product_price * n)}원</p>
                </div>
            </div>
        )
    }

    function NotRate() {
        return (
            <div className='inline-block items-center'>
                <p className='float-left'>{priceToString(data[0].product_price)}</p>
                <GreyQuestion />
            </div>
        )
    }


    function replaceAt(word: string, i: number) {
        if (i >= word.length) {
            return word.valueOf();
        }

        return word.substring(0, i) + '*'.repeat(word.length - 3)
    }

    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    const [modal, setModal] = useState(false);
    const [orderModal, setOrderModal] = useState(false);

    const clickReviewModal = () => { setModal(!modal) }
    const clickOrderModal = () => { setOrderModal(!orderModal) }

    const giveData = data[0];


    return (
        <div>
            {/*<div className="h-[2000px] bg-slate-300">test</div>*/}

            <div className='relative'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    navigation={false}
                >
                    {data[0].product_img_url.map((imgs, i) => {
                        return (
                            <div className='relative'>
                                <SwiperSlide key={imgs.product_img_id}>
                                    <Link href="">
                                        <img src={imgs.product_img_url_list} alt="" className="h-auto w-full max-w-[550px] max-h-[550px] pt-[3px]" />
                                    </Link>
                                </SwiperSlide>
                            </div>

                        )
                    })}

                </Swiper>
            </div>
            <div className='flex border-b border-[#f5f5f5]'>
                <div></div>
                <Share />
            </div>
            <div className='mt-[13px] mb-[15px] pl-[16px] pr-[16px] text-[#222222]'>
                <p className='pb-[5px] text-[13px] tracking-[-0.1rem] font-[1000]'>{data[0].product_brand}</p>
                <p className='font-[500]'>{data[0].product_name}</p>
                <div className='mt-[20px]'>
                    {data[0].product_rate != 0 ? <Rate /> : <NotRate />}
                </div>
                <div className=''>
                    <div className='w-full h-auto items-center'>
                        <img src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png&w=750" alt="" className='block m-auto' ></img>
                    </div>
                </div>
            </div>
            <div className='pt-[13px] pb-[13px] pl-[16px] text-[15px] pr-[18px] border-b border-[#f5f5f5]'>
                <div className=''>
                    <div className='h-[16px] w-[15px] float-left pt-[2px]'><Star /></div>
                    <em className='float-left not-italic font-bold  pl-[5px] pr-[24px]'>{data[0].product_star}</em>
                </div>


                <p onClick={() => setModal(true)} className='text-[#222222] text-[14px] font-medium underline tracking-[-0.05rem]'>
                    {data[0].product_review_count}건 리뷰</p>
                {/*{
                    modal &&
                    <ReviewModal clickModal={clickReviewModal} giveData={giveData} />
                }*/}
            </div>
            <div className='pt-[20px] pb-[25px] pl-[16px] pr-[16px] text-[14px]'>
                <dl className='mb-[20px]'>
                    <dt className='float-left text-[#848684]'>무이자 할부</dt>
                    <dd className='ml-[80px]'>
                        <p className='underline tracking-[-0.05rem]'>카드사별 무이자 혜택</p>
                    </dd>
                </dl>
                <dl>
                    <dt className='float-left text-[#848684]'>배송정보</dt>
                    <dd className='ml-[80px]'>
                        <em className='not-italic tracking-[-0.05rem] font-bold'>택배배송 </em>
                        <span className='pl-[2px]'>CJ대한통운</span>
                        <p className='text-[#8807f4] tracking-[-0.05rem] font-bold '>오늘출발 마감</p>
                        <p className='text-[#8807f4] tracking-[-0.05rem]'>지금 주문 시 내일 배송 출발</p>
                        <p className=' tracking-[-0.05rem]'>배송비 {data[0].product_delivery_fee} &#40;{data[0].min_delivery_fee}만원 이상 무료&#41;</p>
                        <p className=' tracking-[-0.05rem]'>{data[0].product_delivery_fee_add}</p>
                    </dd>
                </dl>
            </div>
            <div className='pb-[20px] pl-[16px] pr-[16px] border-t-[14px] border-[#f5f5f5]' >
                <div className='pt-[40px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5]'>
                    <h3 className='inline-block border-b border-[#000]'>상세정보</h3>
                </div>
                <ul className='pb-[20px] pr-[16px] text-[14px] font-medium text-[#777777] border-b border-[#f5f5f5] '>
                    <li>상품번호 : {data[0].product_id}</li>
                    <li>모델 : {data[0].product_item_number}</li>
                </ul>
            </div>
            <div className='pl-[16px] pr-[16px] pb-[20px] border-b-[14px] border-[#f5f5f5]'>
                {data[0].product_detail_url.map((product_detail, index) => {
                    return (
                        <div key={index}>
                            <img src={product_detail} alt="" className="h-auto w-full max-w-4xl rounded-lg" />
                        </div>
                    )
                })}
            </div>
            <div className='pb-[40px]' >
                <div className='pt-[40px] px-[16px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5] last:border-b-0'>
                    <h3 className='inline-block border-b border-[#000]'>고객리뷰</h3>
                </div>
                <div className='px-[16px] pt-[25px] pb-[34px] '>
                    리뷰 별점
                </div>
                <div className='flex mb-[16px] px-[16px] tracking-[-0.05rem]'>
                    <span className='text-[16px] font-bold'>포토&동영상 리뷰</span>
                    <Link href="" className='text-[13px] text-[#848684]'>더보기</Link>
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
                        {data[0].photo_reviews.map((review, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href="" className=''>
                                        <img src={review.review_img_url} alt="" className="h-auto w-full max-w-28 max-h-32 rounded-lg first-of-type:ml-0" />
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className='px-[16px] mt-[60px] mb-[15px] tracking-[-0.05rem]'>
                    <span className='text-[16px] font-bold'>전체 리뷰</span>
                </div>
                <div className='h-[40px] bg-[#f5f5f5] w-full'></div>
                <div className=''>
                    {data[0].product_reviews.map((reviews) => {
                        return (
                            <div key={reviews.review_id} className='mx-[16px] first:pt-[15px] pt-[30px] pb-[20px] border-b border-[#f5f5f5] last:border-none' >
                                <div className='relative '>
                                    <div className='h-[12px] w-[12px] float-left pt-[2px]'><Star/></div>
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
                                    {reviews.review_img_url.map(imgs => {
                                        return (
                                            <SwiperSlide key={imgs.review_img_id}>
                                                <Link href="">
                                                    <img src={imgs.review_img_detail_url} alt="" className="h-auto w-full max-w-28 max-h-32 mt-[12px] mb-[8px] rounded-lg" />
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                <Link href="" className='text-[13px]'>{reviews.review_content}</Link>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center'>
                    <button className='inline-block bottom-0 w-11/12 mb-5  font-bold pt-3 pb-3 rounded-lg border border-[#f5f5f5] text-[#848684] text-[13px]'
                        onClick={() => setModal(true)}>
                        더보기 &#40;{data[0].product_reviews.length}&#41;
                    </button>
                </div>
                {/*{
                    modal &&
                    <ReviewModal clickReviewModal={clickReviewModal} giveData={giveData} />
                }*/}

            </div>
            <div className='pt-[20px] pb-[20px] px-[16px] text-[13px] border-t-[15px] border-[#f5f5f5]'>
                <div className='flex justify-between'>
                    <div className='w-1/2 h-[44px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>상품고시정보</div>
                    <div className='w-1/2 h-[44px] ml-[5px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>백화점 상품 안내</div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2 h-[44px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>교환/반품/환불 안내</div>
                    <div className='w-1/2 h-[44px] ml-[5px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>배송안내</div>
                </div>
            </div>
            <img src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202306/2023060809574180075551801655_598.jpg&w=750&t=aa8dcb01bf15e184376b817b3eed864b5fb2d071'
                alt='' className='w-full h-auto' />
            <img src='https://sstatic.ssgcdn.com/promo/event/ssg/202402/40163920247419180.jpg' alt='' className='w-full h-auto' />
            <div className='border-t-[15px] border-b-[30px] border-[#f5f5f5] '>
                <dl className='px-[16px] py-[20px] text-[14px] '>
                    <dt className='float-left text-[#848684]'>
                        카테고리
                    </dt>
                    <dd className='ml-[80px] font-bold'>
                        {data[0].product_category_name} &gt; {data[0].product_category_name_mid}
                    </dd>
                </dl>
            </div>

            <div>
                <div>
                    <ul className='flex fixed w-full z-10 bottom-0 h-[52px] text-center leading-[52px]'>
                        <li className=' basis-1/6 justify-center bg-white '>
                            <div className='w-[28px] h-[28px] m-auto pt- align-middle justify-center pt-[11px]' ><Like/></div>
                        </li>
                        <li className='basis-5/6 bg-[#ff5452] text-[17px] font-bold text-white' onClick={() => setOrderModal(true)}>
                            구매하기
                        </li>
                        {/*{
                            orderModal &&
                            <OrderModal clickOrderModal={clickOrderModal} giveData={giveData} />
                        }*/}
                    </ul>
                </div>
            </div>




        </div>

    );
}