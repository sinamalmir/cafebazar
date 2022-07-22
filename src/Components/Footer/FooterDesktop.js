import React from 'react';

import FooterImg from './footer-download.png';



const FooterDesktop = () => {
    return (
        <div className='hidden lg:block bg-white pt-10 pb-3'>
        <div className=' container 2xl:max-w-screen-2xl mx-auto '>
            <div className='ml-3 mr-3'>
                <div className='flex items-center justify-between  mt-10 mb-10'>
                    <div className=' ml-10'>
                        <h3 className='font-medium mb-3 text-lg'> بازار، نخستین و پرمخاطب‌ترین فروشگاه ایرانی برنامه‌ها و بازی‌های موبایلی دنیای اندروید </h3>
                        <p className='font-normal text-sm text-[#6B6B6B]'>
                        صد‌ها هزار بازی ایرانی و خارجی دیتادار یا بدون دیتا را با ترافیک نیم‌بها نصب کنید و به سادگی خرید درون‌ برنامه‌ای انجام دهید. بازار مجهز به سپر امنیت است که برنامه‌ها را توسط آنتی ویروس‌ها بررسی کرده و به محض شناسایی برنامه‌ی مخرب، به کاربر اعلام می‌کند که آن برنامه را از دستگاه خود پاک کند.
                        </p>
                    </div>
                    <div className='w-4/5 flex items-center justify-between border rounded p-3'>
                        <img src={FooterImg} alt="footer img" className='ml-1' />
                        <div className='flex flex-col items-start text-xs'>
                            <h4 className='text-sm mb-2'> دانلود اپلیکیشن بازار </h4>
                            <span className='font-thin'> پرمخاطب‌ترین اپ‌استور (اندروید) فارسی‌زبانان </span>
                            <div className='flex items-center mt-3'>
                                <button className='border rounded p-3 text-green-500 ml-2' > نسخه اندروید </button>
                                <button className='border rounded p-3 text-green-500'> نسخه اندروید  TV </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className='flex items-center justify-between ml-3 mr-3 mt-10 mb-10' >
                <ul>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> نصب بازار </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300 '> بازی اندروید </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> برنامه اندروید </li>
                </ul>

                <ul>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> نصب بازار </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300 '> بازی اندروید </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> برنامه اندروید </li>
                </ul>
                <ul>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> نصب بازار </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300 '> بازی اندروید </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> برنامه اندروید </li>
                </ul>
                <ul>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> نصب بازار </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300 '> بازی اندروید </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> برنامه اندروید </li>
                </ul>
                <ul>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> نصب بازار </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300 '> بازی اندروید </li>
                    <li className='p-2 text-sm font-normal hover:text-green-500 cursor-pointer transition-all duration-300'> برنامه اندروید </li>
                </ul>
            </div>

        </div>
        </div>
    );
};

export default FooterDesktop;