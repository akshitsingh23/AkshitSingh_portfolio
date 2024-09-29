import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/akshitsingh23/' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://www.linkedin.com/in/akshit-singh-710807227/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.instagram.com/akshit_some_times?igsh=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default headerSocials;