import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import Image from 'next/image';

export default function ReviewPhotoImgSwiper(props: any) {

    const data = props.giveData

    console.log(data.photo_reviews);


    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    return (
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
            {data[0].photo_reviews.map((review: any, index: number) => {
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

    )
}