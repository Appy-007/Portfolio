import React from 'react'
import './experience.css'
import IMG1 from '../../assets/Screenshot 2023-09-09 193616.png'
import IMG2 from '../../assets/Screenshot 2023-09-09 193723.png'
import IMG3 from '../../assets/Screenshot 2023-09-09 193842.png'
import IMG4 from '../../assets/Screenshot 2023-09-09 213034.png'
import IMG5 from '../../assets/Screenshot 2023-09-10 113256.png'
import IMG6 from '../../assets/Screenshot 2023-09-10 113357.png'

const data =[
  {
    id:1,
    image:IMG1,
    title:'Login Page',
    github:'https://github.com/Appy-007/Security-and-authorization'
  },

  {
    id:2,
    image:IMG2,
    title:'Website Designing',
    github:'https://github.com/Appy-007/TinDogWebsite'
  },

  {
    id:3,
    image:IMG3,
    title:'Blog Project',
    github:'https://github.com/Appy-007/Blog'
  },

  {
    id:4,
    image:IMG4,
    title:'Weather App',
    github:'https://github.com/Appy-007/WeatherApp'
  },

  {
    id:5,
    image:IMG5,
    title:'Website Designing',
    github:'https://github.com/Appy-007/mytopWebSeries'
  },

  {
    id:6,
    image:IMG6,
    title:'Drum Simulator',
    github:'https://github.com/Appy-007/DrumSimulator'
  }
]

function Experience(){
  return (
    <section id="portfolio">
      <h2 className="portfolio_heading">My Portfolio</h2>
      <div className="portfolio_container">{
        data.map(({id,image,title,github}) => ( <div key={id} className="portfolio_item">
        <img src={image} alt={title} className="portfolio_img" />
        <h3 className="portfolio_title">{title}</h3>
        <div className="portfolio_desc">
          <a href={github} className='portfolio_btn' target='blank'>Github</a>
        </div>
      </div> 
          ) 
        )
      }
      </div>
    </section>
  )
}

export default Experience