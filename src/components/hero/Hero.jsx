import React from 'react'
import FeaturedJobs from './FeaturedJobs'

const Hero = () => {
  return (
    <>
    <div className='bg-white w-full diagonal-separator'>
        <div className='max-w-[1440px] mx-auto px-[30px] pt-[104px] max-[691px]:pt-[60px] mb-[74px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[10px] font-bold max-w-[671px] mb-[20px] flex items-center'>Finding the right fit <img className='w-[68px] h-[43px]' src="/assets/hero/hero-anime.gif" alt="" />has</h1>
                <h1 className='text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[10px] font-bold max-w-[671px] mb-[20px]'>never been easier.</h1>
                <p className='text-[22px] leading-[32px] text-zwilt-black font-normal max-w-[570px] mb-[30px] max-[691px]:text-sm'>With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>

                <div className='flex w-full max-w-[570px] min-[1440px]:min-w-[570px] justify-center mb-[40px] relative'>
                    {/* come back here and use react typed to make the type effect and on focus, we turn it to normal input */}
                    <input type="text" className='h-[74px] max-[691px]:h-[34px] w-full  ps-[27px] py-[29px] rounded-[15px] border-[1.5px]' placeholder='Looking for design' />
                    <button className='absolute right-0 h-[74px] max-[691px]:h-[59px] w-[74px] rounded-[15px] bg-primary flex justify-center items-center'><img src="/assets/hero/Vector.svg" alt="" /></button>
                </div>

                <FeaturedJobs/>
            </div>
        </div>

        <img src="/assets/hero/hero-shape.svg" alt="" className='w-full relative z-30 translate-y-10' />
    </div>
    </>
  )
}

export default Hero