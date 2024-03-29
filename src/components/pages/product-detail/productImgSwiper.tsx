'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import data from '@/dummydata/product_detail_data.json'
import Link from 'next/link'
import Image from 'next/image';

export default function ProductImgSwiper() {

    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    return (
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
                                <div className='h-auto pt-[3px]'>
                                    <Image src={imgs.product_img_url_list} 
                                            alt="" 
                                            width={390}
                                            height={390}
                                            sizes="(max-width:550px)"/>
                                </div>
                            </SwiperSlide>
                        </div>

                    )
                })}

            </Swiper>
        </div>
    )
}