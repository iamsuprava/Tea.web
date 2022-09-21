import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
// import Slider from './components/Slider';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Usp from './components/Usp';
import Features from './components/Features';
import Words from './components/Words';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  Aos.init({
    duration: 500,
    offset: 90,
  });
  return (
    <div className='overflow-hidden'>
      {/* <Slider /> */}
      <Hero />
      <Cards />
      <Facts />
      <Usp />
      <Features />
      <Words />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
