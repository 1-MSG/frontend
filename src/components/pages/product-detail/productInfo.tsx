'use client'

import Star from '@/images/svgs/Star';
import { useState } from 'react';
import Universe from './universe';
import ReviewModal from './reviewModal';


export default function ProductInfo({ Info }: { Info: any }) {

    //const data = props.giveData;
    const [modal, setModal] = useState(false);

    const clickReviewModal = () => { setModal(!modal) }

    // function priceToString(price: number) {
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

    function Rate() {
        //let n = (100 - Info.product_rate) / 100;
        return (
            <div>
                <p className='line-through text-[#777777] text-[14px]'>{Number(Info.productPrice).toLocaleString()}원</p>
                <div className='inline-block items-center '>
                    <p className='mr-[5px] float-left text-[#ff5452] text-[26px] font-bold'>{Number(Info.discountRate)}%</p>
                    <p className='float-left text-[#222222] text-[26px] font-bold'>{Number(Info.discountPrice).toLocaleString()}원</p>
                </div>
            </div>
        )
    }

    function NotRate() {
        return (
            <div className='inline-block items-center'>
                <p className='float-left'>{Number(Info.productPrice).toLocaleString()}</p>
            </div>
        )
    }


    return (
        <div>
            <div className='mt-[13px] mb-[15px] pl-[16px] pr-[16px] text-[#222222]'>
                <p className='pb-[5px] text-[13px] tracking-[-0.1rem] font-[1000]'>{Info.productBrand}</p>
                <p className='font-[500]'>{Info.productName}</p>
                <div className='mt-[20px]'>
                    {Info.discountRate != 0 ? <Rate /> : <NotRate />}
                </div>
                <div>
                    <Universe />
                </div>
            </div>

            <div className='pt-[13px] pb-[13px] pl-[16px] text-[15px] pr-[18px] border-b border-[#f5f5f5]'>
                {Info.productStar == 0 ? <p></p> :
                    <div className=''>
                        <div className='float-left pt-[2px]'><Star w={16} h={16} /></div>
                        <em className='float-left not-italic font-bold  pl-[5px] pr-[24px]'>{Info.productStar}</em>
                    </div>}
                {
                    Info.reviewCount == null ? <p></p> :
                        <p onClick={() => setModal(true)} className='text-[#222222] text-[14px] font-medium underline tracking-[-0.05rem]'>
                            {Info.reviewCount == null ? 0 : Number(Info.reviewCount.toLocaleString())}건 리뷰</p>
                }
                {
                    modal &&
                    <ReviewModal clickModal={clickReviewModal} giveData={Info} />
                }
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
                        <p className=' tracking-[-0.05rem]'>배송비  &#40;만원 이상 무료&#41;</p>
                        <p className=' tracking-[-0.05rem]'>제주 3,000원, 도서산간 3,000원 추가</p>
                    </dd>
                </dl>
            </div>
        </div>
    )
}