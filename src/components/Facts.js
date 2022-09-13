import React from 'react';

// import react countup
import CountUp from 'react-countup';
// import image
import Image from '../assets/img/john-cena.png';
import CardImage2 from '../assets/img/cards/card-2.png';
// import data
import { facts } from '../data';

const Facts = () => {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]'>
        <div
          className='flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]'
          data-aos='fade-up'
        >
          {facts.map((item, index) => {
            const { startNumber, endNumber, unit, title, desc } = item;
            return (
              <div className='w-[45%]' key={index}>
                <h2 className='h2 mb-2 lg:mb-4'>
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={2}
                    enableScrollSpy
                  />
                  {unit}+
                </h2>
                <div className='text-xl text-heading font-bold mb-3'>
                  {title}
                </div>
                <p className='max-w-[240px]'>{desc}</p>
              </div>
            );
          })}
        </div>
        <div className='flex-1 -order-1 lg:order-none'>
          <div className='flex flex-col justify-center h-full lg:pl-[100px]'>
            <h2
              className='h2 mb-12 max-w-[295px] md:max-w-none'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              TEA DAY Trusted & Profitable Business Model
            </h2>
            <p className='max-w-[240px]'>Investment Range 4.5 Lakhs to %.5 Lakhs including Interior, Equipment, Chef, Customized Menu with 100+ Varients
           </p>
           <div className='text-xl text-heading font-bold mb-3'>
                  End to End Support
                </div>

            {/* Card */}
            <div
            className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            {/* <div className='flex items-center mb-[18px] lg:mb-[28px]'>
              <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                Find a Yoga Mentor For You.
              </h4>
              <h2 className='h2 text-stroke-2'>4</h2>
            </div> */}
            <div>
              <img src={CardImage2} alt='' />
            </div>
          </div>
        

            <div className='mb-2' data-aos='fade-down' data-aos-delay='600'>
              <img src={Image} alt='' />
            </div>
            <div
              className='text-lg font-bold mb-6 text-heading'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              Vishal & Mahesh
              <span className='text-base text-paragraph font-normal'>
                /Founders
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
