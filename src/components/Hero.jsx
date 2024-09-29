import React from 'react'
import HeroImage from '../assets/images/hero-image.png'
function Hero() {
  return (
    <section className='mb-[140px]  '>
      <div className="containers">
        <div className='flex flex-col-reverse lg:flex-row bg-[#154444]'>
          <img className='w-[309px] h-[326px] mx-auto lg:mx-0 mt-[40px] lg:mt-0 md:w-[411px] md:h-[560px]' src={HeroImage} alt="Hero Chair Image" width={411} height={560} />
          <div className='pt-[40px] pl-[20px] lg:pt-[100px] lg:pl-[100px]'>
            <h1 className='text-[32px] leading-[42px] text-[#FFFFFF] font-bold mb-5 md:text-[56px] md:leading-[68.26px] md:w-full'>We Help You Make Modern Furniture</h1>
            <p className='text-white text-[12px] w-full leading-[25px] mb-[35px] md:w-[450px] md:text-[20px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials</p>
            <button className='w-[149px] bg-white py-[15px] text-[#154444] text-[20px] leading-[25px] md:w-[172px]'>Explore More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero