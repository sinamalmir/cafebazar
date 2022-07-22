import React from 'react';
import { Swiper , SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../tailwind.css';

import { Navigation } from "swiper";

import Sina from './sina.jpeg';


const Applications = () => {
    return (
    <>
    <div className=' container 2xl:max-w-screen-2xl mx-auto'>
        <div className='md:shadow mt-10 mb-10 md:ml-3 md:mr-3 p-3 md:border md:rounded md:bg-white '>
            <div className='flex items-center justify-between'>
                <h4 className='md:mb-3 mb-5 '> برنامه های کاربردی </h4>
                <div className='flex items-center'>
                    <span className='font-normal text-sm ml-2'> بیشتر </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
            <hr className='mb-5 hidden md:block' />
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
        </div>
    </div>
    </>
    );
};

export default Applications;