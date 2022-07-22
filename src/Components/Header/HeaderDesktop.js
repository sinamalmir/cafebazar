import React from 'react';

import logo from './bazaar-logo.svg';

const HeaderDesktop = () => {
    return (
        <div className='hidden lg:flex lg:justify-between lg:p-3 bg-white shadow  '>
            <div className='flex items-center justify-between mr-10'>
                <img src={logo} alt="" style={{width:'100px'}} />
                <div>
                    <ul className='flex items-center justify-between'>
                        <li className='xl:ml-3 ml-1 p-1 xl:p-3 hover:bg-[#f9fafd] rounded cursor-pointer'> برنامه </li>
                        <li className='xl:ml-3 ml-1 p-1 xl:p-3 hover:bg-[#f9fafd] rounded cursor-pointer'> بازی </li>
                        <li className='xl:ml-3 ml-1 p-1 xl:p-3 hover:bg-[#f9fafd] rounded cursor-pointer'> پشتیبانی </li>
                        <li className='xl:ml-3 ml-1 p-1 xl:p-3 hover:bg-[#f9fafd] rounded cursor-pointer'> توسعه دهندگان بازار </li>
                        <li className='xl:ml-3 ml-1 p-1 xl:p-3 hover:bg-[#f9fafd] rounded cursor-pointer'> تبلیغات در بازار </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between ml-10'>
                <input type="text" placeholder='جست و جو در بازار' className='border p-3 rounded-lg bg-[#f9fafd] hover:bg-white text-xs pl-14' />
                <span className='ml-4 mr-4 hover:bg-gray-300 p-2 rounded-full'>
                 <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" fill="#9da0af"></path></svg>
                </span>
                <button className='p-3 pt-2 pb-2 bg-green-500 rounded-md text-white '> دانلود بازار </button>
                <span className='mr-4 hover:bg-gray-300 p-1 rounded '>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#757575"></path></svg>
                </span>
            </div>

        </div>
    );
};

export default HeaderDesktop;