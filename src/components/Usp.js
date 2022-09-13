import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video';
import '../video.scss';

// import icons
import { BsPlayCircleFill } from 'react-icons/bs';
import CardImage1 from '../assets/img/cards/card-1.png';
import Usp1 from '../assets/img/cards/usp1.png';
import Usp2 from '../assets/img/cards/usp2.png';
import Usp3 from '../assets/img/cards/usp3.png';
import Usp4 from '../assets/img/cards/usp4.png';
import Usp5 from '../assets/img/cards/usp5.png';

const Usp = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]'>
      <div className='container mx-auto'>
        <div className='text-center mb-16 lg:mb-32'>
          <h2
            className='h2 mb-3 lg:mb-[18px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Our U S P
          </h2>


        </div>
        
        
        {/* USP */}
        <div className='container mx-auto flex flex-col lg:flex-row gap-x-[32px]'>
          {/* card group */}
          <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] lg:-mt-[77px] z-10 mx-auto '>
            {/* card 1 */}
            <div
              className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md'
              data-aos='fade-up'
              data-aos-delay='400'
            >
                {/* lg:mb-[80px] */}
              <div className='flex items-center mb-[18px] lg:mb-[80px]'> 
                <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                  Brewing Happiness
                </h4>
                <h2 className='h2 text-stroke-2'>1</h2>
              </div>
              <div>
                <img src={Usp1} alt='' />
              </div>
            </div>
            {/* card 2 */}
            <div
              className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md'
              data-aos='fade-up'
              data-aos-delay='600'
            >
              <div className='flex items-center mb-[18px] lg:mb-[80px]'>
                <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                  Modern Equipments
                </h4>
                <h2 className='h2 text-stroke-2'>2</h2>
              </div>
              <div>
                <img src={Usp2} alt='' />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div
            className='bg-white w-full max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            <div className='max-w-[240px]'>
              <div className='flex items-center mb-4 lg:mb-8'>
                <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                  Customized Menu
                </h4>
                <h2 className='h2 text-stroke-2'>3</h2>
              </div>
              <p className='mb-4 lg:mb-3'>
                Hot & Cold Beverages, Sandwiches,
                Snacks, Burgers, Juices & More..
              </p>
              <p></p>
              <a
                className='text-xs lg:text-sm font-bold uppercase text-heading'
                href='#'
              >
                Read more
              </a>
            </div>
            <div>
              <img src={Usp3} alt='' />
            </div>
          </div>
        </div>
        {/* Next Row */}
        {/* flex flex-col lg:flex-row */}
        <div className='container mx-auto flex flex-col lg:flex-row lg:flex-row gap-x-[32px] gap-y-[32px]'>
          {/* card group */}
          <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] lg:-mt-[77px] z-10 mx-auto'>
            {/* card 1 */}
            <div
              className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div className='flex items-center mb-[18px] lg:mb-[28px]'>
                <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                Employment Opportunity
                </h4>
                <h2 className='h2 text-stroke-2'>4</h2>
              </div>
              <div>
                <img src={Usp4} alt='' />
              </div>
            </div>
            {/* card 2 */}
            <div
              className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md'
              data-aos='fade-up'
              data-aos-delay='600'
            >
              <div className='flex items-center mb-[18px] lg:mb-[28px]'>
                <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>
                Pocket-Friendly Pricing
                </h4>
                <h2 className='h2 text-stroke-2'>5</h2>
              </div>
              <div>
                <img src={Usp5} alt='' />
              </div>
            </div>
          </div>
          


        </div>

       </div>
    </section>
  );
};

export default Usp;
