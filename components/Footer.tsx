"use client"
import React, { useState, useEffect } from 'react';
import { FaLocationPin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); 
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='footer'>
      {isMobile && <FaMobileAlt className='mobile-icon' />} 
      <div className='footermain'>
        <div className='firstfooterdiv'>
            <h1>Guarder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Perspiciatis ad maxime 
                nesciunt ipsa minima similique.</p>
        </div>
        <div className='secondfooterdiv'>
            <h1>Useful Link</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsam voluptate
                 itaque ullam officia, magnam nobis incidunt!
            </p>
        </div>
        <div className='thirdfooterdiv'>
            <h1>Contact Us</h1>
            <ul>
                <li><FaLocationPin className='icons'/>Lorem ipsum dolor sit amet.</li>
                <li> <IoCall className='icons'/>Call :  +035694789</li>
                <li><MdMail className='icons'/> Mail@.comresponsibility</li>
            </ul>
        </div>
        <div className='fourthfooterdiv'>
            <h1>Newsletter</h1>
            <input type="Email" name='Email' placeholder='Enter your Email' />
            <div>
              <button>SUBSCRIBE</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
