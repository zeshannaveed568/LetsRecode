import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className='about'>
      <div className='left'>
        <img
          src='https://ultimatewebsolutions.net/orabel/img/photo/51.jpg'
          alt=''
        />

        <div className='box'></div>
        <div className='line'></div>
        <span>"</span>
      </div>

      <div className='title'>
        <span>
          Hi, I'm a photographer. I love my job. I often have to communicate
          with people.
        </span>
      </div>

      <div className='right'>
        <div className='box'></div>

        <div className='quote'>
          <span>
            I am proud of my work, it gives me a lot of emotions and pleasure.
            This is what I would do all my life.
          </span>
          <p>Anastasiya, Photographer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
