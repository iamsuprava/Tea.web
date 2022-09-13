import React from 'react';

// import logo
import Logo from '../assets/img/logo.png';

// import icons
import { FaYoutube, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pb-[70px]' data-aos='fade-up' data-aos-offset='0'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* copyright text */}
          <p><a href="https://sponsorgenix.in" target="_blank"
                      >
            &copy; Sponsorgenix 2022. All rights reserved.</a></p>
          {/* social icons */}
          <div className='flex gap-x-4 text-orange text-lg'>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaYoutube />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaInstagram />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaTwitter />
            </div>
            
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
            <a href="https://api.whatsapp.com/send?phone=+917406077788&text=%20" target="_blank"
                      >
              <FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
