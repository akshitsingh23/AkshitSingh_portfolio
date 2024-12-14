import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import dtw from "../../assets/Stock_DTW.jpg";
import tbif from "../../assets/Tbif.png";
import chat from "../../assets/Chatmania.png";
const projects = [
  {
    id: 1,
    image: dtw,
    title: 'Multiple Stock Analysis using Dynamic Time Warping',
    github: 'https://github.com/akshitsingh23/Stock_Analysis_Dynamic_Time_Warping.git',
    demo: '/'
  },
  {
    id: 2,
    image: tbif,
    title: 'IIT Ropar-TBIF website',
    github: 'https://github.com/akshitsingh23/Tbif-IIT-Ropar.git',
    demo: 'https://www.iitrpr.ac.in/tbif/'
  },
  {
    id: 3,
    image: chat,
    title: 'ChatMania',
    github: 'https://github.com/akshitsingh23/ChatMania_',
    demo: '/'
  }
];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt='title'/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default RecentWork