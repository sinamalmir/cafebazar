import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMobile = () => {
    return (
        <div className='md:hidden bg-white shadow-lg '>
            <div className='flex items-center justify-around p-2 '>
                <div className='p-1 w-10  bg-zinc-200 rounded'>
                   <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M3.643 6.273h16.714A.631.631 0 0021 5.636.631.631 0 0020.357 5H3.643A.631.631 0 003 5.636c0 .358.281.637.643.637zm16.714 5.09H3.643A.631.631 0 003 12c0 .358.281.636.643.636h16.714A.631.631 0 0021 12a.631.631 0 00-.643-.636zm0 6.364H3.643a.631.631 0 00-.643.637c0 .358.281.636.643.636h16.714a.631.631 0 00.643-.636.631.631 0 00-.643-.637z" fill="#20222A"></path></svg>
                </div>
                <div className='w-full flex justify-center ml-3 mr-3'>
                    <input type="text" placeholder='جست و جو در بازار' className='p-2 bg-[#FFFFFF] border font-normal text-sm rounded-md w-full  ' />
                </div>
                <div className='w-10'>
                  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" fill="#9da0af"></path></svg>
                </div>
            </div>  

            <div className='flex items-center justify-around p-2'>
                <div>
                    <span className='p-4 pt-2 pb-2'> برای شما </span>
                </div>
                <div>
                    <span className='p-4 pt-2 pb-2'> دسته بندی ها </span>
                </div>
                <div>
                    <span className='p-4 pt-2 pb-2'> کودک </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;