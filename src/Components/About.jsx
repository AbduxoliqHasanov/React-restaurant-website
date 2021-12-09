import React from 'react'
import aboutimage from "../images/about.png"

export default function About() {
    return (
        <div className='about'>
          <div className='about-text'>
              <h1>UPCOMING EVENT</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laborum autem! Sit cupiditate eaque rerum excepturi, rem consequatur quae optio tempore id reiciendis iste dolorum!</p>
              <button>Read More</button>
          </div>
          <div className='about-image'>
              <img src={aboutimage} alt="foto" />
          </div>
        </div>
    )
}
