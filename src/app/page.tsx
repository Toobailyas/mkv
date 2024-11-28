'use client'
import Hero from './components/Hero';
import About from './components/About';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Statistic from './components/Statistic';
import Values from './components/Values';
import Work from './components/Work';



export default function Home() {
    return (
    <>
            <Hero />
            <Work />
            <About />
            <Journey />
            <Statistic />
            <Values />
            <JoinUs />
            <Contact />
        </>
    );
}