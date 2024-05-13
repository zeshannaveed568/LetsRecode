import React from "react";
import "./about.scss";
import { personalInfo, stats } from "../../data";
import parse from "html-react-parser";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='about'>
        <h2 className='sectionTitle'>
          About <span>Me</span>
        </h2>

        <div className='innerContainer grid'>
          <div className='aboutInfo'>
            <h3 className='sectionSubtitle'>Personal Info</h3>
            <ul className='infoList grid'>
              {personalInfo.map(({ title, description }, index) => {
                return (
                  <li className='infoItem' key={index}>
                    <span className='infoTitle'>{title}</span>
                    <span className='infoDescription'>{description}</span>
                  </li>
                );
              })}
            </ul>
            <a href='#' className='button'>
              Download CV
              <span className='buttonIcons'>
                <i class='lucide download'></i>
                <Download size={24} color='black' />
              </span>
            </a>
          </div>
          <div className='stats grid'>
            {stats.map(({ no, title }, index) => {
              return (
                <div className='statsBox' key={index}>
                  <h3 className='statsNo'>{no}</h3>
                  <p className='statsTitle'>{parse(title)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
