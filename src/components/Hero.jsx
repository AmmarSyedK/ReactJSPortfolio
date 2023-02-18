import React from 'react';

function Hero() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='font-semibold text-2xl md:text-4xl mb-1 
            md:mb-3 text-indigo-600 font-poppins dark:text-indigo-500'>
                👋 Hello, I am Ammar
            </h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-500 dark:text-gray-300' >
            Final year computer engineering student (Master's level) seeking 6-month internship starting March, with potential for pre-employment.            </p>
            <a href="#" className='inline-block px-8 py-3 border-transparent
            text-base font-medium rounded-md text-white bg-indigo-600
            hover:bg-indigo-700 md:text-md'>
                See works
            </a>
        </div>
    </div>
  )
}

export default Hero