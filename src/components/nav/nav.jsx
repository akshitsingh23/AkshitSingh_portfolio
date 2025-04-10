import React from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {AiOutlineUser,AiOutlineFileText} from 'react-icons/ai'
import {GoBook} from 'react-icons/go';
import {MdOutlineWorkOutline } from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';
// import CV1 from "../../assets/akshit_cv.pdf";

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#header' rel='noopener'
        onClick={() => setActiveNav('#header')}
        className= {activeNav === '#header' ? 'active' : ''}><BiHome />
      </a>
      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser />
      </a>
      <a href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}><GoBook />
      </a>
      <a href='#recentWork'
        onClick={() => setActiveNav('#recentWork')}
        className={activeNav === '#recentWork' ? 'active' : ''}><MdOutlineWorkOutline />
      </a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage />
      </a>
      <a href="https://drive.google.com/file/d/1_fTXBQC6txRj-oj6XmUCxk9jLUla8JvZ/view?usp=sharing" target='_blank'// Assuming you have a route for the resume page
        // onClick={() => setActiveNav('#resume')}

        className={activeNav === '#resume' ? 'active' : ''}><AiOutlineFileText />
      </a>
    </nav>
  )
}

export default Nav;