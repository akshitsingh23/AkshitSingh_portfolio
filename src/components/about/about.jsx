import React from 'react'
import "./about.css";
import Me from '../../assets/akshit-me.jpg';
import {BsAward} from 'react-icons/bs';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 alt="About Akshit Singh">About </h2>

      <div className='container about__container'>
        
        <div className='about__me' alt='About Akshit Singh'>
          <div className='about__me-image'>
            <img src= {Me} alt='Akshit Singh' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a keen interest in learning new technologies and frameworks. I have a strong foundation in web development and am constantly learning new technologies to improve my skills. I am a quick learner and a team player who is always looking for new challenges. I am looking for opportunities to work on exciting projects and grow as a developer.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About