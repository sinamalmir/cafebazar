import React from 'react';
import { Swiper , SwiperSlide } from 'swiper/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../tailwind.css';
import { Navigation } from "swiper";

// sample img for test
import Sina from './sina.jpeg';

const Slider = () => {
    return (
     
            <Swiper 
                slidesPerView={4}
                spaceBetween={14}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    488: {
                      slidesPerView: 5,
                    },
                    666: {
                      slidesPerView: 7,
                    },
                  }}
            >
                <SwiperSlide className='flex items-start justify-start flex-col'>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
                <SwiperSlide className='flex items-start justify-start flex-col '>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
                <SwiperSlide className='flex items-start justify-start flex-col '>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
                <SwiperSlide className='flex items-start justify-start flex-col '>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
                <SwiperSlide className='flex items-start justify-start flex-col '>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
                <SwiperSlide className='flex items-start justify-start flex-col '>
                    <img src={Sina} alt="img-slider" className='lg:rounded-3xl rounded-2xl mb-1' />
                    <span className='font-normal text-xs'> اینستاگرام </span>
                    <span className='font-thin text-xs'> امور مالی </span>
                </SwiperSlide>
            </Swiper>
      
    );
};

export default Slider;