import React from 'react';

import { Swiper , SwiperSlide } from 'swiper/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../tailwind.css';
import { Navigation } from "swiper";
import { shorten } from '../helper/function';



const SliderWrapper = ({appData}) => {

    

    // console.log(appData.simpleAppList);
    const slidersApp = appData.simpleAppList.apps


    return (
        <div className=' container 2xl:max-w-screen-2xl mx-auto'>
        <div className='md:shadow mt-10 mb-10 md:ml-3 md:mr-3 p-3 md:border md:rounded md:bg-white '>
            <div className='flex items-center justify-between'>
                <h4 className='md:mb-3 mb-5 '>
                    { appData.simpleAppList.title }
                </h4>
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
                spaceBetween={5}
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
                    1200: {
                        slidesPerView: 11,
                    }
                  }}
                >
                    {
                        slidersApp.map((item) => (
                            <SwiperSlide
                                className='flex items-start justify-start flex-col'
                                key={item.info.name}
                            >
                                <img src={ item.info && item.info.image} alt="img" className='lg:rounded-3xl rounded-2xl mb-1 image-slider-list ' />
                                <span className='font-normal text-sm mt-2'> {item.info && shorten(item.info.name)} </span>
                               
                            </SwiperSlide>
                        ))
                    }

                </Swiper>


                {/* <Slider /> */}

            </div>
    </div>
    );
};

export default SliderWrapper;
{/* <Slider key={item.info.name} data={item} /> */}

{
    {/* 
                    {
                        slidersApp.map(item => 
                                <Slider key={item.info && item.info.name} data={item} /> 
                         )
                    } */}
    // console.log('applications info ' ,slidersApp)
}