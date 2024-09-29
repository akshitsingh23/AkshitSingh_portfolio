import React from 'react';
import './header.css';
import CTA from "./CoreToAction";
import Me from "../../assets/me-prof2.webp";
import HeaderSocial from './headerSocials';
import Type from './type';

const header = () => {
  return (
    <header>
      <div className='container header__container' id="header">
        <h4>Hello I'm</h4>
        <h1 className='font-medium '>Akshit Singh</h1>
        <div>
          <h5 className='text-light'>
            <Type />
          </h5>
        </div>
        <CTA />
        <HeaderSocial />
        <div className='.me'>
          <img src= {Me} className='me' alt='me' />
        </div>
        
      </div>
    </header>
  )
}

export default header