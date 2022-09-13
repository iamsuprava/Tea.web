import React from 'react';

// import data
import { words } from '../data';
// import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Words = () => {
    return (
        <section className='section-sm lg:section-lg'>
            <div className='container mx-auto'>
                {/* text */}
                <div className='text-center mb-16 lg:mb-32'>
                    <h2
                        className='h2 mb-3 lg:mb-[18px]'
                        data-aos='fade-down'
                        data-aos-delay='200'
                    >
                        Our Vision
                    </h2>
                    <p
                        className='max-w-[480px] mx-auto'
                        data-aos='fade-down'
                        data-aos-delay='300'
                    >
                        Is to create Spirit & Values in the lives of our fast growing brand, that inspires our customers, franchisees, employees and our team
                        members. Our Company is committed to serve fresh, traditional and authentic tea in a not so traditional but a modern style café,
                        making Tea as strong as your friendship
                    </p>
                </div>
                
                {/* course list */}
                <div className='flex flex-col lg:flex-row lg:gap-x-[20px] gap-y-24 mb-7 lg:mb-14'>
                    {words.map((item, index) => {
                        const { image, title, desc, link, delay } = item;
                        return (
                            <div
                                className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
                                data-aos='fade-up'
                                data-aos-delay={delay}
                                key={index}
                            >
                                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                                    <img src={image} alt='' />
                                </div>
                                <div>
                                    <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                                        {title}
                                    </h4>
                                    <p>{desc}</p>
                                </div>
                                <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                                    
                                    <a className='font-medium' href='#'>
                                        {link}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    );
};

export default Words;
