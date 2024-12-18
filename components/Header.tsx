"use client"
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='header'>
     
      <div className='headertwo'>
        <Link href="/"><h1>SECURITYGUARD</h1></Link>
        <nav className='row'>
          <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link href="/"><li>HOME</li></Link>
            <Link href="about"><li>ABOUT</li></Link>
            <Link href="services"><li>SERVICES</li></Link>
            <Link href="contact"><li>CONTACT</li></Link>
          </ul>
        </nav>
        <button className='menu-toggle' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        < TiThMenu className='icon'/>
        </button>
      </div>
    </div>
  );
}

export default Header;
