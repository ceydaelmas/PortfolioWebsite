import React from 'react'
import './portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image: IMG1,
    title: "Hospital Management System",
    github: "https://github.com/ceydaelmas/hospital_management_system",
    demo: "https://github.com/ceydaelmas"
  },
  {
    id:2,
    image: IMG2,
    title: "Restaurant Website",
    github: "https://github.com/ceydaelmas/restaurant_website",
    demo: "https://github.com/ceydaelmas"
  },
  {
    id:3,
    image: IMG3,
    title: "Restaurant Application",
    github: "https://github.com/ceydaelmas/restaurant_app",
    demo: "https://github.com/ceydaelmas"
  },
  {
    id:4,
    image: IMG4,
    title: "Global Content Management System",
    github: "https://github.com/ceydaelmas/GriffonCMS",
    demo: "https://github.com/ceydaelmas"
  },
  {
    id:5,
    image: IMG5,
    title: "IOT Project",
    github: "https://github.com/ceydaelmas/IOT_FINAL",
    demo: "https://github.com/ceydaelmas"
  },
  {
    id:6,
    image: IMG6,
    title: "Cinephile Backend Project",
    github: "https://github.com/ceydaelmas/CinephileBackend",
    demo: "https://github.com/ceydaelmas"
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
          </article>
          )
        })
       }
        
      </div>
    </section>
  )
}

export default Portfolio