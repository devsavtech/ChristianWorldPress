"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const PromotionSlider = () => {
  const promotionText = "Claim 50% Off ★ Black History Matters ★ Claim 50% Off ★ Black History Matters";

  return (
    <div className="w-full bg-white py-3 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={'auto'}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        loop={true}
        allowTouchMove={false}
        className="w-full !overflow-visible"
        direction="horizontal"
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
          }
        }}
      >
        <SwiperSlide className="!w-auto !flex !justify-start">
          <div className="flex space-x-4">
            {[...Array(6)].map((_, index) => (
              <p 
                key={index} 
                className="text-black font-bold text-lg whitespace-nowrap flex-shrink-0 px-4"
              >
                {promotionText}
              </p>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromotionSlider;