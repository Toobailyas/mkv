'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import JoinUs from './components/JoinUs';
import Contact from './components/ContactUs';
import Journey from './components/Journey';
import Statistic from './components/Statistic';
import Values from './components/Values';
import Work from './components/Work';

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-back",
      duration: 900,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Statistic />
      <Values />
      <Journey />
      <JoinUs />
      <Contact />
    </>
  );
};

export default Home;
