"use client"

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageData from "@/assets/image/mainbanner/data";

function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(imageData[currentIndex].url);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageUrl(imageData[index].url);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* 배경 이미지에 흐림 효과 적용 */}
        <div className="flex justify-center items-center py-5 px-3" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height : "400px",backgroundImage: `url(${currentImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'blur(3px)' }}></div>
        {/* 내부 이미지 */}
        <div className="flex justify-center items-center py-5 px-3" style={{ zIndex: 1 }}>
            <Carousel
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                swipeable={true} 
                selectedItem={currentIndex}
                onChange={handleChange}
                showStatus={false}
            >
            {imageData.map((image, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <img src={image.url} alt={image.alt} />
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',fontSize:'20px', fontWeight:"bolder",color: '#fff', padding: '5px', borderRadius: '5px' }}>
                    {image.label[0]}
                    <br/>
                    {image.label[1]}
                </div>
              </div>
              
            ))}
            </Carousel>
        </div>
    </div>
  );
};

export default MainBanner;
