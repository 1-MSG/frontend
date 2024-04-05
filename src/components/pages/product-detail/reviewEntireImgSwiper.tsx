import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import Image from 'next/image';

export default function ReviewEntireImgSwiper(props: any) {

    const reviews = props.reviews

    SwiperCore.use([Navigation]);
    const swiperRef = useRef<SwiperCore>();

    return (
        <div>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                spaceBetween={7}
                slidesPerView={1.05}
                loop={false}
                autoplay={false}
                navigation={false}

            >
                {reviews.review_img_url.map((imgs: any) => {
                    return (
                        <SwiperSlide key={imgs.review_img_id}>
                            <Image src={imgs.review_img_detail_url} alt="" width={400} height={400} className=" mt-[15px] rounded-lg" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}