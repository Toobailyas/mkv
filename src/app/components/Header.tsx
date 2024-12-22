"use client"; 
import React, { useState } from "react"; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import Image from "next/image"; 

const Header = () => {   
  const [isMenuOpen, setIsMenuOpen] = useState(false);    

  const toggleMenu = () => {     
    setIsMenuOpen(!isMenuOpen);   
  };    

  return (     
    <header>       
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center p-6 bg-black bg-opacity-70">         
        {/* Logo */}         
        <div className="flex items-center space-x-3">           
          <Image             
            src="/images/mk-logo.jpg"             
            alt="MK Volunteers Logo"             
            width={50}             
            height={50}             
            className="rounded-md"           
          />           
          <span className="text-2xl font-bold text-white">MK Volunteers</span>         
        </div>          

        {/* Desktop Menu */}         
        <ul className="hidden md:flex gap-5 lg:gap-8 text-white">           
          <li className="menuLink">             
            <a href="/">Home</a>           
          </li>           
          <li className="menuLink">             
            <a href="/routes/about">About</a>           
          </li>                      

          <li className="menuLink">             
            <a href="/routes/contact">Contact</a>           
          </li> 

          <li className="menuLink">             
            <a href="/routes/contact#join">Join Us</a>           
          </li> 

          <li className="menuLink">             
            <a href="/routes/about#team">Our Team</a>           
          </li>          
          <li className="menuLink">             
            <a href="/routes/faq">FAQ</a>           
          </li>         
        </ul>          

        {/* Mobile Menu Toggle */}         
        <div className="md:hidden text-white" onClick={toggleMenu}>           
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}         
        </div>       
      </div>        

      {/* Mobile Menu */}       
      {isMenuOpen && (         
        <ul className="flex flex-col gap-2 bg-black bg-opacity-75 p-9 md:hidden text-white fixed top-0 left-0 w-full z-40 mt-24"> 
          <li className="menuLink">             
            <a href="/" onClick={toggleMenu}>               
              Home             
            </a>           
          </li>           
          <li className="menuLink">             
            <a href="/routes/about" onClick={toggleMenu}>               
              About             
            </a>           
          </li>                     

          <li className="menuLink">             
            <a href="/routes/about#team" onClick={toggleMenu}>               
              Our Team             
            </a>           
          </li>           
          <li className="menuLink">             
            <a href="/routes/contact" onClick={toggleMenu}>               
              Contact             
            </a>           
          </li>

          <li className="menuLink">             
            <a href="/routes/contact#join" onClick={toggleMenu}>               
              Join Us             
            </a>           
          </li>
          <li className="menuLink">             
            <a href="/routes/faq" onClick={toggleMenu}>               
              FAQ            
            </a>           
          </li> 
        </ul>       
      )}     
    </header>   
  ); 
};

export default Header;
