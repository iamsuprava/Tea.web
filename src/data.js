// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.png';
import CourseImage2 from '../src/assets/img/courses/course-2.png';
import CourseImage3 from '../src/assets/img/courses/course-3.png';
import Founder01 from '../src/assets/img/founders/founder01.png';
import Founder02 from '../src/assets/img/founders/founder02.png';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Franchise',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '50',
    unit: '',
    title: 'Outlets',
    desc: 'We are now the fasting gowing tea franchise in India.',
  },
  {
    startNumber: '1',
    endNumber: '75',
    unit: 'K',
    title: 'Cups Served Everyday',
    desc: 'We have over 85 thousand clients all over the India. They are very satisfied.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Cities',
    desc: 'We have 50+ outlets spread over more than 15 cities and counting.',
  },
  {
    startNumber: '1',
    endNumber: '6',
    unit: '',
    title: 'Months',
    desc: 'Just in 6 Months we have created milestones.',
  },
];

export const words = [
  {
    image: Founder01,
    title: 'VISHAL',
    desc: 'My journey started with fear. Over time I learnt that the same fear brings out my courage and makes me work harder.The harder I work, more luckier I get everytime.I want to encourage everyone with the passion for business to overcome the fear, work harder and grow along with us.',
    link: 'FOUNDER - TEA DAY ',
    delay: '600',
  },
  {
    image: Founder02,
    title: 'MAHESH ',
    desc: 'The way to get started is to quit thinking & talking and begin doing. Chase the vision and passion, not the money and you will see the money will end up following you. If you don’t enjoy it, don’t do it. You must love what you do in order to be successful. Work hard, Dream Big & Never Give-up !',
    link: 'FOUNDER & CEO - TEA DAY',
    delay: '800',
  },
  
];

export const courses = [
  {
    image: CourseImage1,
    title: 'TEA DAY',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'TEA DAY',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '800',
  },
  {
    image: CourseImage3,
    title: 'TEA DAY',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '900',
  },
];

export const pricing = [
  {
    title: 'Standalone Model',
    price: '4.5 to 5.5 Lakhs.',
    list: [
      
      {
        icon: <BsCheck />,
        name: '100 to 200 sq. ft area',
      },
      {
        icon: <BsCheck />,
        name: '100+ Customized Menu',
      },
      {
        icon: <BsCheck />,
        name: 'ROI 6 to 8 Months',
      },
      {
        icon: <BsCheck />,
        name: 'Expected Monthly Sale 3 to 4.5 Lakhs',
      },
     
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  {
    title: 'Cafe Model',
    price: '7.5 to 9 Lakhs.',
    list: [
      
      {
        icon: <BsCheck />,
        name: '350 to 500 sq. ft area',
      },
      {
        icon: <BsCheck />,
        name: '140+ Customized Menu',
      },
      {
        icon: <BsCheck />,
        name: 'ROI 9 to 11 Months',
      },
      {
        icon: <BsCheck />,
        name: 'Expected Monthly Sale 4 to 6 Lakhs',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '800',
  },
  {
    title: 'Corporate Model',
    price: '9 to 11 Lakhs.',
    list: [
      
      {
        icon: <BsCheck />,
        name: '4k to 10k Employees',
      },
      {
        icon: <BsCheck />,
        name: 'Menu as per MNC',
      },
      {
        icon: <BsCheck />,
        name: 'ROI 6 to 9 Months',
      },
      {
        icon: <BsCheck />,
        name: 'Expected Daily Sale 15k to 25k',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
  },
];

export const franchiseD = [
  {
    title: 'Standalone Model',
    price: '4.5 to 5.5 Lakhs.',
    list: [
      
      {
        icon: <BsCheck />,
        name: 'NO ROYALTY - We don’t charge any royalty',
      },
      {
        icon: <BsCheck />,
        name: 'INTERIOR - Trendy inteiror design customized as per shop area',
      },
      {
        icon: <BsCheck />,
        name: 'KITCHEN EQUIPMENT - TEA BREWER, COFFEE FILTER, GRILLER, FRYER, MIXERS, Complete Kitchen Items',
      },
      {
        icon: <BsCheck />,
        name: 'FREEZERS & STOVES - Hard Top Commerical Freezes, Refrigerators, Microwave, Induction',
      },
      {
        icon: <BsCheck />,
        name: 'SIGN BOARDS - ACP LED Main Board, Menu Board, Photo Frames, Wall Paper, LolliPOP Board',
      },
      {
        icon: <BsCheck />,
        name: 'MANPOWER - TEA DAY hires chef for every franchise and trained at Company Outlet for full menu',
      },
      {
        icon: <BsCheck />,
        name: 'SUPPORT - End to End Support from franchise sign-up to day 2 day running',
      },
      {
        icon: <BsCheck />,
        name: 'ADDITIONAL INCOME SOURCE - Online aggregator Tie-Ups with Zomato, Swiggy, Amazon Foods, Dunzo',
      },
      {
        icon: <BsCheck />,
        name: 'MARKETING & BRANDING - Google Mapping, Social Media Ads on Insta & FB, T-Shirts, Caps, Packaging',
      },
     
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  
];


export const qna = [
  {
    title: 'Standalone Model',
    price: '4.5 to 5.5 Lakhs.',
    list: [
      
      {
        icon: <BsCheck />,
        name: 'Awarded Best Tea Franchise Chain by Karnataka Business Awards 2022 - KTCC',
      },
      {
        icon: <BsCheck />,
        name: 'Diverse & All Year Menu for Steady and Stable Profit throughout the year',
      },
      {
        icon: <BsCheck />,
        name: 'Profit Margin of 60% to 100% across Menu',
      },
      {
        icon: <BsCheck />,
        name: 'Life Time Agreement with No Renewal Fees',
      },
      {
        icon: <BsCheck />,
        name: 'Minimum Wastage of less than 2% across the menu',
      },
      {
        icon: <BsCheck />,
        name: 'Pocket-freindly pricing to drive high walk-ins of all age',
      },
      {
        icon: <BsCheck />,
        name: 'Shop search support provided post Franchise Signup',
      },
      
     
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  
];

