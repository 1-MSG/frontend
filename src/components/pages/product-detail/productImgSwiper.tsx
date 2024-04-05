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

export default function ProductImgSwiper({Images}: {Images: any}) {

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
                {Images.map((imgs:any, i:number) => {
                    return (
                        <div key={i} className='relative'>
                            <SwiperSlide>
                                <div className='h-auto pt-[3px]'>
                                    <Image src={imgs.productImageUrl} 
                                            alt={imgs.productImageDescription} 
                                            width={500}
                                            height={500}
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