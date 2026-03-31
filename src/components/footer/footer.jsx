import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo' rel='noopener'>Akshit Singh</a>
      
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#recentWork'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/akshitsingh235/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/akshitsingh23/' target='_blank' rel="noreferrer"><FiGithub /></a>
        <a href='https://www.instagram.com/akshit_some_times?igsh=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer"><FaInstagram /></a>
        <a href='https://www.instagram.com/akshit_some_times/' target='_blank' rel="noreferrer"><BsFacebook/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Akshit Singh. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer