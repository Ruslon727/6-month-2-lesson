import React from 'react'
import Mastercard from '../assets/images/Mastercard.png'
import Airbnb from '../assets/images/Airbnb.png'
import Uber from '../assets/images/Uber.png'
import PayPal from '../assets/images/PayPal.png'
import Visa from '../assets/images/Visa.png'
import Stripe from '../assets/images/Stripe.png'

function Second() {
  return (
    <div className='containers mt-[60px] md:mt-[140px]'>
        <div className='md:mx-[59px] mx-0 sm:mx-[100px]'>
            <span className='lg:ml-[297px] sm:w-full ml-[77px] text-[18px] leading-[23.44px] text-[#244D4D] md:text-[32px] md:leading-[41.66px]'>Trusted by 20,000+ companies</span>
            <div className='flex items-center md:gap-[100px] gap-[28px] mt-[40px]'>
                <img className='md:w-[67px] md:h-[52px]' src={Mastercard} width={31} height={24} alt="Mastercard Icon" />
                <img className='md:w-[125px] md:h-[39px]' src={Airbnb} width={80} height={24} alt="Airbnb Icon" />
                <img className='md:w-[97px] md:h-[34px]' src={Uber} width={57} height={20} alt="Uber Icon" />
                <img className='md:w-[106px] md:h-[37px]' src={PayPal} width={70} height={24} alt="PayPal Icon" />
                <img className='md:w-[89px] md:h-[32px]' src={Visa} width={67} height={24} alt="Visa Icon" />
                <img className='hidden md:inline-block' src={Stripe} alt="Stripe Icon" />   
            </div>
        </div>
    </div>
)
}

export default Second